import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddUserMutation } from '../../services/userApi';

type RegisterInputs = {
  username: string;
  password1: string;
  password2: string;
};

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    (async () => {
      try {
        const user = await addUser(data).unwrap();
        console.log(user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="admin-registration__fieldset">
        <input
          type="text"
          {...register('username', {
            required: { value: true, message: 'Поле обязательно для заполнения' },
            minLength: { value: 5, message: 'Имя очень короткое' },
          })}
          className="base-input"
          placeholder="Логин"
        />
        {errors.username && <span className="error-message">{errors.username.message}</span>}
      </fieldset>

      <fieldset className="admin-registration__fieldset">
        <input
          type="password"
          className="base-input"
          placeholder="Пароль"
          {...register('password1', {
            minLength: { value: 8, message: 'пароль должен быть больше 8 симоволов' },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: 'пароль должен содержать цифры, большие и маленькие буквы',
            },
          })}
        />
        {errors.password1 && <span className="error-message">{errors.password1.message}</span>}
      </fieldset>
      {/* <fieldset className="admin-registration__fieldset">
        <input
          type="password"
          className="base-input"
          placeholder="Повторите пароль"
          {...register('password2', {
            required: true,
            validate: (value, formValues) => {
              return value === formValues.password1 || 'пароли не совпадают';
            },
          })}
        />
        {errors.password2 && <span className="error-message">{errors.password2.message}</span>}
      </fieldset> */}
      <div className="admin-users__buttons-container">
        <button type="submit" disabled={isLoading} className="admin-btn admin-btn__type_arrow">
          Добавить
        </button>
        <Link to={'/admin'} className="admin-btn admin-btn__type_arrow admin-btn_type_white">
          На главную
        </Link>
      </div>
    </form>
  );
};

export default AddUserForm;
