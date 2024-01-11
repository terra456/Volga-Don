import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddArticleMutation, useDeleteArticleMutation, useUpdateArticleMutation } from '../../services/postApi';
import { useNavigate } from 'react-router-dom';
import { Article, ArticleDTO } from '../../types';
import { dataForm } from '../../utils/formData';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/variables';
import addImg from '../../assets/images/icons/add.svg';

type Props = {
  preloadData?: Article;
};

const ArticleForm = ({ preloadData }: Props) => {
  const serverUrl = BASE_URL;
  const { id, created_at, image, ...formData } = preloadData || {
    id: undefined,
    title: undefined,
    text: undefined,
    image: undefined,
    published: undefined,
    created_at: undefined,
  };
  const [imageUpload, setImageUpload] = useState('');
  const [serverError, setServerError] = useState('');
  const { register, handleSubmit, watch, setValue, formState, getValues, reset } = useForm<ArticleDTO>({
    defaultValues: {
      ...formData,
    },
  });
  const { errors } = formState;
  const [addArticle, { isLoading, status, error }] = useAddArticleMutation();
  const [updateArticle, updateObj] = useUpdateArticleMutation();
  const [deleteArticle, deleteObj] = useDeleteArticleMutation();
  const navigate = useNavigate();

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

  const postData = async (data: ArticleDTO) => {
    created_at; //fix typescript error
    try {
      const form = dataForm(data);
      await addArticle(form).unwrap();
      //если нужно перейти на осн стр
      // navigate('/admin/news');
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      setError(err);
    }
  };

  const updateData = async (data: ArticleDTO) => {
    try {
      if (id) {
        const form = dataForm(data);
        await updateArticle([form, id.toString()]).unwrap();
        // navigate('/admin/news');
        reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      setError(err);
    }
  };

  const deleteData = async () => {
    try {
      if (id) {
        const article = await deleteArticle(id.toString()).unwrap();
        console.log(article);
        navigate('/admin/news');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      setError(err);
    }
  };

  watch((data, { name }) => {
    if (name === 'image' && data.image !== undefined) {
      console.log(data.image[0]);
      const imgArr = data.image;
      if (imgArr[0] !== undefined) {
        const url = URL.createObjectURL(imgArr[0]);
        setImageUpload(url);
      }
    }
  });

  const onSubmit: SubmitHandler<ArticleDTO> = (data) => {
    if (id) {
      updateData(data);
    } else {
      postData(data);
    }
  };
  return (
    <div>
      <form className="admin-add-card__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-card__photo-conteiner">
          <img
            src={imageUpload ? imageUpload : image?.includes('http') ? image : serverUrl + image}
            alt=""
            className="image"
          />
          <input id="published" type="checkbox" {...register('published')} className="admin-add-card__checbox-hidden" />
          {preloadData && (
            <label htmlFor="published" className="admin-status admin-status_lable">
              {preloadData.published || getValues('published') ? 'На сайте' : 'В архиве'}
            </label>
          )}
          {image || imageUpload ? (
            <label htmlFor="file" className="btn admin-btn__change-foto">
              Заменить фото
            </label>
          ) : (
            <label htmlFor="file" className="admin-add-card admin-add-card_type_img">
              <img src={addImg} alt="Добавить запись" className="admin-add-card__icon" />
              <p className="admin-add-card__text">Добавить фото</p>
            </label>
          )}
          <input
            type="file"
            id="file"
            {...register('image', {
              // required: false,
              // validate: {
              //   lessThan10MB: (files) => files[0]?.size < 1000000 || '*максимально 10mb',
              //   acceptedFormats: (files) =>
              //     ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
              //     '*Выберите картинку в PNG, JPEG или GIF',
              // },
            })}
            className="admin-add-card__input-file"
            name="image"
            accept="image/png, image/jpeg"
          />
          {errors.image && <span className="error-message error-absolute">{errors.image.message}</span>}
        </div>
        <div className="admin-add-card__inputs-container">
          <input
            {...register('title', {
              required: '*Это поле обязательно к заполнению',
              minLength: {
                value: 10,
                message: '*Требуется более развернутое описание',
              },
            })}
            className="base-input base-input_type_name admin-add-card__input-name"
            placeholder="Заголовок"
          />
          {errors.title && <span className="error-message">{errors.title.message}</span>}
          <textarea
            className="base-input base-input_type_textarea admin-add-card__input-text"
            placeholder="Текст"
            {...register('text', { required: true })}
          />
          {errors.text && <span className="error-message">*Это поле обязательно к заполнению</span>}
        </div>
        <div className="admin-add-catalog__buttons-container">
          {!id ? (
            <button
              onClick={() => {
                setValue('published', false);
                handleSubmit(onSubmit);
              }}
              type="submit"
              disabled={isLoading}
              className={`admin-btn admin-btn__type_arrow admin-btn_type_white ${
                isLoading ? 'load' : status === 'fulfilled' ? 'good' : ''
              }`}
            >
              {isLoading ? 'Идет сохранение' : status === 'fulfilled' ? 'Изменения сохранены' : 'Сохранить в архив'}
            </button>
          ) : (
            <button
              onClick={deleteData}
              disabled={isLoading}
              className={`admin-btn admin-btn__type_delete ${
                deleteObj.isLoading ? 'load' : deleteObj.status === 'fulfilled' ? 'good' : ''
              }`}
            >
              Удалить
            </button>
          )}
          {!id ? (
            <button
              onClick={() => {
                setValue('published', true);
                handleSubmit(onSubmit);
              }}
              type="submit"
              disabled={isLoading}
              className={`admin-btn admin-btn__type_arrow ${isLoading ? 'load' : status === 'fulfilled' ? 'good' : ''}`}
            >
              {isLoading
                ? 'Идет сохранение'
                : status === 'fulfilled'
                ? 'Изменения сохранены'
                : 'Сохранить и опубликовать'}
            </button>
          ) : (
            <button
              onClick={() => {
                handleSubmit(onSubmit);
              }}
              type="submit"
              disabled={isLoading}
              className={`admin-btn admin-btn__type_arrow ${
                updateObj.isLoading ? 'load' : updateObj.status === 'fulfilled' ? 'good' : ''
              }`}
            >
              {updateObj.isLoading
                ? 'Идет сохранение'
                : updateObj.status === 'fulfilled'
                ? 'Изменения сохранены'
                : 'Сохранить изменения'}
            </button>
          )}
          <button onClick={() => navigate('/admin')} className="admin-btn admin-btn_type_white admin-btn__type_arrow">
            На главную
          </button>
        </div>
        {serverError && <div className="error-message">{serverError.toString()}</div>}
      </form>
    </div>
  );
};

export default ArticleForm;
