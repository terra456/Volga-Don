import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../../services/userApi';
// import { useLoginMutation, useProtectedMutation } from '../services/authApi';

type RegisterInputs = {
  username: string;
  password1: string;
  password2: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const [signup, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    (async () => {
      try {
        const user = await signup(data).unwrap();
        console.log(user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <div className="admin-registration__container">
      <h1 className="admin-registration__title">Зарегистрироваться</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="admin-registration__fieldset">
          <input
            type="text"
            {...register('username', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Логин"
          />
          {errors.username && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
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
                message: 'пароль должен содержать большие и маленькие буквы',
              },
            })}
            required
          />
          {errors.password1 && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
        </fieldset>
        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
            placeholder="Повторите пароль"
            {...register('password2', {
              required: true,
              // validate: (value, formValues) => {
              //   return value === formValues.password1;
              // },
            })}
          />
          {errors.password2 && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
        </fieldset>
        <button
          type="submit"
          disabled={isLoading}
          className="btn admin-registration__btn admin-registration__btn_loading"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
