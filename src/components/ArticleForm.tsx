import { useForm, SubmitHandler } from 'react-hook-form';
// import { navigate } from 'react-router-dom';
import { setCredentials } from '../store/authSlice';
import { useAddArticleMutation, useLoginMutation } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { ArticleDTO } from '../types';
// import { useLoginMutation, useProtectedMutation } from '../services/authApi';

const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ArticleDTO>();
  const [addArticle, { isLoading }] = useAddArticleMutation();
  // const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataForm = (obj: any) => {
    const formdata = new FormData();
    Object.keys(obj).forEach((el) => {
      if (el === 'image') {
        formdata.append('image', obj[el][0]);
      } else {
        formdata.append(el, obj[el]);
      }
    });
    return formdata;
  };

  const onSubmit: SubmitHandler<ArticleDTO> = (data) => {
    (async () => {
      try {
        const form = dataForm(data);
        const article = await addArticle(form).unwrap();
        console.log(article);
        // navigate('/admin');
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
    <div className="admin-add-news">
      <h1 className="admin-title">Добавить новость</h1>
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-card admin-add-card_type_add-photo">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить фото</p>
          <input type="file" {...register('image')} className="admin-add-card__input-file" name="image" />
        </div>
        <input
          {...register('title', { required: true })}
          className="base-input base-input_type_name admin-add-card__input-name"
          placeholder="Заголовок"
          required
        />
        {errors.title && <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>}
        <textarea
          className="base-input base-input_type_textarea admin-add-card__input-text"
          placeholder="Текст"
          {...register('text', { required: true })}
          required
        />
        {errors.text && <span className="admin-registration__error-message">*Это поле обязательно к заполнению</span>}
        <input type="checkbox" {...register('published')} />
        Опубликовать
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

export default ArticleForm;
