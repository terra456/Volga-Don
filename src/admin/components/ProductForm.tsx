import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetAllCategoriesQuery,
  useUpdateProductMutation,
} from '../../services/postApi';
import { useNavigate } from 'react-router-dom';
import { Product, ProductDTO } from '../../types';
import { dataForm } from '../../utils/formData';
import addImg from '../../assets/images/icons/add.svg';
import { BASE_URL } from '../../utils/variables';

type Props = {
  preloadData?: Product;
};
// type Img = { url: string; name: string };

const ProductForm = ({ preloadData }: Props) => {
  const serverUrl = BASE_URL;
  const { id, images, category, ...formData } = preloadData || {
    id: undefined,
    name: undefined,
    description: undefined,
    in_stock: undefined,
    published: undefined,
  };
  const [imagesUpload, setImagesUpload] = useState<string[]>([]);
  const [serverError, setServerError] = useState('');
  const { register, handleSubmit, watch, setValue, formState, getValues, reset } = useForm<ProductDTO>({
    defaultValues: {
      ...formData,
    },
  });
  const { errors } = formState;
  const [addProduct, { isLoading, status }] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetAllCategoriesQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
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

  const postData = async (data: ProductDTO) => {
    category; //fix ts, but must be added in form
    try {
      const form = dataForm(data);
      await addProduct(form).unwrap();
      // navigate('/admin/products');
      reset();
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const updateData = async (data: ProductDTO) => {
    try {
      if (id) {
        const form = dataForm(data);
        console.log(form);
        const product = await updateProduct([form, id.toString()]).unwrap();
        console.log(product);
        reset();
        // navigate('/admin/products');
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const deleteData = async () => {
    try {
      if (id) {
        const product = await deleteProduct(id.toString()).unwrap();
        console.log(product);
        navigate('/admin/products');
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  watch((data, { name }) => {
    if (name === 'images' && data.images !== undefined) {
      console.log(data.images.length);
      const files = data.images;
      const urls = [];
      for (let i = imagesUpload.length; i < files.length; i++) {
        const file = files[i];
        if (file) {
          urls.push(URL.createObjectURL(file));
        }
      }
      setImagesUpload(urls);
    }
  });

  const onSubmit: SubmitHandler<ProductDTO> = (data) => {
    if (id) {
      updateData(data);
    } else {
      postData(data);
    }
  };
  return (
    <div>
      <form className="admin-add-catalog__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-catalog__add-photo-container">
          {images &&
            (Object.keys(images) as Array<keyof typeof images>)
              .filter((el) => el.includes('img') && images[el])
              .map((el, i) => {
                const url = images[el] as string;
                return (
                  <div className="admin-add-catalog__photo-conteiner">
                    <img
                      key={`imgUpload${i}`}
                      src={url.includes('http') ? url : serverUrl + url}
                      alt=""
                      className="admin-add-catalog__add-photo"
                    />
                    <button className="admin-btn admin-btn__close admin-btn__close_top" onClick={() => {}}></button>
                  </div>
                );
              })}
          {imagesUpload.length > 0 &&
            imagesUpload.map((image, i) => {
              return <img key={`imgUpload${i}`} src={image} alt="" className="admin-add-catalog__add-photo" />;
            })}
          <label htmlFor="file" className="admin-add-card admin-add-card_type_img">
            <img src={addImg} alt="Добавить запись" className="admin-add-card__icon" />
            <p className="admin-add-card__text">Добавить фото</p>
          </label>
          <input
            type="file"
            id="file"
            multiple
            {...register('images', {
              /*
              required: false,
              validate: {
                // lessThan10MB: (files) => files[0]?.size < 300000 || 'Max 30kb',
                // maxCount5: (files) => files.length >= 5 || 'Не более 5 изображений',
                acceptedFormats: (files) =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF',
              },
            */
            })}
            className="admin-add-card__input-file"
            name="images"
            accept="image/png, image/jpeg"
          />
          {errors.images && <span className="error-message error-absolute">{errors.images.message}</span>}
        </div>
        <div className="admin-add-catalog__inputs-container">
          {data && (
            <select
              {...register('category')}
              className="base-input admin-add-card__select"
              value={(preloadData?.category && preloadData.category.id) || 1}
            >
              {data.map((el) => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
          )}
          <input
            {...register('name', {
              required: '*Это поле обязательно к заполнению',
              // pattern: {
              //   value: /d+/,
              //   message: 'This input is number only.',
              // },
              minLength: {
                value: 5,
                message: 'Название не может быть меньше 5 симоволов',
              },
            })}
            className="base-input base-input_type_name admin-add-card__input-name"
            placeholder="Заголовок"
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
          <textarea
            className="base-input base-input_type_textarea admin-add-card__input-text"
            placeholder="Текст"
            {...register('description', { required: true })}
          />
          {errors.description && <span className="error-message">*Это поле обязательно к заполнению</span>}
          <fieldset className="admin-add-card__fieldset">
            <input id="in_stock" type="checkbox" {...register('in_stock')} className="admin-add-card__checbox" />
            <label htmlFor="in_stock" className="admin-add-card__checbox-label">
              In Stock
            </label>
          </fieldset>
          <input id="published" type="checkbox" {...register('published')} className="admin-add-card__checbox-hidden" />
          {preloadData && (
            <label htmlFor="published" className="admin-status admin-status_lable">
              {preloadData.published || getValues('published') ? 'На сайте' : 'В архиве'}
            </label>
          )}
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
              className={`admin-btn admin-btn_type_white admin-btn__type_arrow ${
                isLoading ? 'load' : status === 'fulfilled' ? 'good' : ''
              }`}
            >
              {isLoading ? 'Идет сохранение' : status === 'fulfilled' ? 'Изменения сохранены' : 'Сохранить в архив'}
            </button>
          ) : (
            <button onClick={deleteData} disabled={isLoading} className="btn admin-btn__type_delete">
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
              className={`admin-btn admin-btn__type_arrow ${isLoading ? 'load' : status === 'fulfilled' ? 'good' : ''}`}
            >
              {isLoading ? 'Идет сохранение' : status === 'fulfilled' ? 'Изменения сохранены' : 'Сохранить изменения'}
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

export default ProductForm;
