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
    <div className="admin-registration__container">
      <h1 className="admin-registration__title">Зарегистрировать пользователя</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="admin-registration__fieldset">
          <input
            type="text"
            {...register('username', {
              required: { value: true, message: 'Поле обязательно для заполнения' },
              minLength: { value: 5, message: 'Имя очень короткое' },
            })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Логин"
          />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </fieldset>

        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
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
        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
            placeholder="Повторите пароль"
            {...register('password2', {
              required: true,
              validate: (value, formValues) => {
                return value === formValues.password1 || 'пароли не совпадают';
              },
            })}
          />
          {errors.password2 && <span className="error-message">{errors.password2.message}</span>}
        </fieldset>
        <div className="admin-users__buttons-container">
          <button
            type="submit"
            disabled={isLoading}
            className="btn admin-registration__btn admin-registration__btn_loading"
          >
            Добавить
          </button>
          <Link to={'/admin'} className="btn btn_type_white add-news__btn_type_exit">
            На главную
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
