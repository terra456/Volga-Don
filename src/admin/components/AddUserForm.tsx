import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddUserMutation } from '../../services/userApi';
import { useState } from 'react';

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
    reset,
  } = useForm<RegisterInputs>();
  const [addUser, { isLoading, status }] = useAddUserMutation();
  const [serverError, setServerError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setError = (err: any) => {
    if (typeof err.error === 'string') {
      setServerError(err.error);
    } else if (err.data) {
      for (const key in err.data) {
        if (typeof err.data[key] === 'string') {
          setServerError(err.data[key]);
        } else if (Array.isArray(err.data[key])) {
          setServerError(err.data[key].join(''));
        }
      }
    }
  };

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    (async () => {
      try {
        const user = await addUser(data).unwrap();
        console.log(user);
        reset();
      } catch (err) {
        console.log(err);
        setError(err);
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
      <fieldset className="admin-registration__fieldset">
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
      </fieldset>
      <div className="admin-users__buttons-container">
        <button
          type="submit"
          disabled={isLoading}
          className={`admin-btn admin-btn__type_arrow ${isLoading ? 'load' : status === 'fulfilled' ? 'good' : ''}`}
        >
          Добавить
        </button>
        <Link to={'/admin'} className="admin-btn admin-btn__type_arrow admin-btn_type_white">
          На главную
        </Link>
      </div>
      {serverError && <div className="error-message">{serverError.toString()}</div>}
    </form>
  );
};

export default AddUserForm;
