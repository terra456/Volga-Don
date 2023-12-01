import { useForm, SubmitHandler } from 'react-hook-form';
// import { navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import { useLoginMutation } from '../../services/authApi';
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
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [login, { error, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    (async () => {
      try {
        const user = await login(data).unwrap();
        console.log(user);
        dispatch(
          setCredentials({
            acsessToken: user.access,
            refreshToken: user.refresh,
            userInfo: { username: data.username },
          }),
        );
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
    <section className="admin-login-section">
      <div className="admin-form-section">
        <h1 className="admin-title">Вход в админ-панель</h1>
        <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('username', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Логин"
            required
          />
          {errors.username && <span className="error-message">*Это поле обязательно к заполнению</span>}

          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
            placeholder="Пароль"
            {...register('password', { required: true })}
            required
          />
          {errors.password && <span className="error-message">*Это поле обязательно к заполнению</span>}
          {error && <span className="error-message">{JSON.stringify(error)}</span>}

          <button
            type="submit"
            disabled={isLoading}
            className="admin-btn admin-btn__type_arrow admin-registration__btn admin-registration__btn_loading"
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
