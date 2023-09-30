import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddArticleMutation, useDeleteArticleMutation, useUpdateArticleMutation } from '../../services/postApi';
import { useNavigate } from 'react-router-dom';
import { Article, ArticleDTO } from '../../types';
import { dataForm } from '../../utils/formData';
import { useState } from 'react';

type Props = {
  preloadData?: Article;
};

const ArticleForm = ({ preloadData }: Props) => {
  const serverUrl = 'http://cv08121-django-53po4.tw1.ru';
  const { id, created_at, image, ...formData } = preloadData || {
    id: undefined,
    title: undefined,
    text: undefined,
    image: undefined,
    published: undefined,
    created_at: undefined,
  };
  const [imageUpload, setImageUpload] = useState('');
  const { register, handleSubmit, watch, setValue, formState } = useForm<ArticleDTO>({
    defaultValues: {
      ...formData,
    },
  });
  const { errors } = formState;
  const [addArticle, { isLoading }] = useAddArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const [deleteArticle] = useDeleteArticleMutation();
  const navigate = useNavigate();

  const postData = async (data: ArticleDTO) => {
    created_at; //fix typescript error
    try {
      const form = dataForm(data);
      await addArticle(form).unwrap();
      navigate('/admin/news');
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (data: ArticleDTO) => {
    try {
      if (id) {
        const form = dataForm(data);
        await updateArticle([form, id.toString()]).unwrap();
        navigate('/admin/news');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async () => {
    try {
      if (id) {
        const article = await deleteArticle(id.toString()).unwrap();
        console.log(article);
        navigate('/admin/news');
      }
    } catch (err) {
      console.log(err);
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
    <div className="admin-add-news">
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-card admin-add-card_type_add-photo">
          <img
            src={imageUpload ? imageUpload : image?.includes('http') ? image : serverUrl + image}
            alt=""
            className="image"
          />
          {preloadData && preloadData.published && (
            <label htmlFor="published" className="">
              На сайте
            </label>
          )}
          {image || imageUpload ? (
            <label htmlFor="file" className="btn btn_type_change-foto">
              Заменить фото
            </label>
          ) : (
            <label htmlFor="file">
              <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
              <p className="admin-add-card__text">Добавить фото</p>
            </label>
          )}
          <input
            type="file"
            id="file"
            {...register('image', {
              validate: {
                lessThan10MB: (files) => files[0]?.size < 30000 || 'Max 30kb',
                acceptedFormats: (files) =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF',
              },
            })}
            className="admin-add-card__input-file"
            name="image"
            accept="image/png, image/jpeg"
          />
          {errors.image && <span className="error-message">{errors.image.message}</span>}
        </div>
        <input
          {...register('title', {
            required: 'This is required.',
            // pattern: {
            //   value: /d+/,
            //   message: 'This input is number only.',
            // },
            minLength: {
              value: 10,
              message: 'This input exceed maxLength.',
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
        <input id="published" type="checkbox" {...register('published')} />
        <div className="admin-users__buttons-container">
          {!id ? (
            <button
              onClick={() => {
                setValue('published', false);
                handleSubmit(onSubmit);
              }}
              type="submit"
              disabled={isLoading}
              className="btn btn_type_white add-news__btn_type_archive"
            >
              Сохранить в архив
            </button>
          ) : (
            <button onClick={deleteData} disabled={isLoading} className="btn btn_type_white add-news__btn_type_archive">
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
              className="btn add-news__btn_type_post"
            >
              Сохранить и опубликовать
            </button>
          ) : (
            <button
              onClick={() => {
                handleSubmit(onSubmit);
              }}
              type="submit"
              disabled={isLoading}
              className="btn add-news__btn_type_post"
            >
              Сохранить изменения
            </button>
          )}
          <button onClick={() => navigate('/admin')} className="btn btn_type_white add-news__btn_type_exit">
            На главную
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
