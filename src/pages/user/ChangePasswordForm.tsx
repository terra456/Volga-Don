import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../services/userApi';

type RegisterInputs = {
  username: string;
  old_password: string;
  password1: string;
  password2: string;
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    (async () => {
      try {
        const user = await changePassword(data).unwrap();
        console.log(user);
        navigate('/');
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
    <div className="admin-form-section">
      <h1 className="admin-title">Изменить пароль</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="admin-registration__fieldset">
          <input
            type="text"
            {...register('username', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Имя пользователя"
          />
          {errors.old_password && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
        </fieldset>
        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            {...register('old_password', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Старый пароль"
            required
          />
          {errors.old_password && (
            <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>
          )}
        </fieldset>

        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
            placeholder="Новый пароль"
            {...register('password1', { required: true })}
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
            placeholder="Повторите новый пароль"
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
          Сменить пароль
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
