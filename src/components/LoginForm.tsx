import { useForm, SubmitHandler } from 'react-hook-form';
// import { navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { useLoginMutation } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
// import { useLoginMutation, useProtectedMutation } from '../services/authApi';

type Inputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    (async () => {
      try {
        const user = await login(data).unwrap();
        console.log(user);
        dispatch(setCredentials({ acsessToken: user.access, refreshToken: user.refresh, username: data.username }));
        navigate('/admin');
      } catch (err) {
        console.log(err);
        // toast({
        //   status: 'error',
        //   title: 'Error',
        //   description: 'Oh no, there was an error!',
        //   isClosable: true,
        // });
      }
    })();
  };
  return (
    <div className="admin-registration__container">
      <h1 className="admin-registration__title">Вход в админ-панель</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="admin-registration__fieldset">
          <input
            defaultValue="test"
            {...register('username', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Логин"
            required
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
            {...register('password', { required: true })}
            required
          />
          {errors.password && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
        </fieldset>
        <button
          type="submit"
          disabled={isLoading}
          className="btn admin-registration__btn admin-registration__btn_loading"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
