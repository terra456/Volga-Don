import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUpdateUsernameMutation } from '../../services/userApi';

type RegisterInputs = {
  oldUsername: string;
  username: string;
  password: string;
};

const UpdateUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const [updateUsername, { isLoading }] = useUpdateUsernameMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    (async () => {
      try {
        const user = await updateUsername(data).unwrap();
        console.log(user);
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <div className="admin-registration__container">
      <h1 className="admin-registration__title">Сменить имя пользователя</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="admin-registration__fieldset">
          <input
            type="text"
            {...register('oldUsername', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Старый логин"
          />
          {errors.username && <span className="error-message">*Это поле обязательно к заполнению</span>}
        </fieldset>
        <fieldset className="admin-registration__fieldset">
          <input
            type="text"
            {...register('username', { required: true })}
            className="admin-registration__input admin-registration__input_type_login"
            placeholder="Новый логин"
          />
          {errors.username && <span className="error-message">*Это поле обязательно к заполнению</span>}
        </fieldset>
        <fieldset className="admin-registration__fieldset">
          <input
            type="password"
            className="admin-registration__input admin-registration__input_type_password"
            placeholder="Повторите новый пароль"
            {...register('password', {
              required: true,
              // validate: (value, formValues) => {
              //   return value === formValues.password1;
              // },
            })}
          />
          {errors.password && <span className="error-message">*Это поле обязательно к заполнению</span>}
        </fieldset>
        <button
          type="submit"
          disabled={isLoading}
          className="btn admin-registration__btn admin-registration__btn_loading"
        >
          Сменить имя
        </button>
      </form>
    </div>
  );
};

export default UpdateUsernameForm;
