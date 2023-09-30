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

type Props = {
  preloadData?: Product;
};
// type Img = { url: string; name: string };

const ProductForm = ({ preloadData }: Props) => {
  const serverUrl = 'http://cv08121-django-53po4.tw1.ru';
  const { id, images, category, ...formData } = preloadData || {
    id: undefined,
    name: undefined,
    description: undefined,
    in_stock: undefined,
    published: undefined,
  };
  const [imagesUpload, setImagesUpload] = useState<string[]>([]);
  const { register, handleSubmit, watch, setValue, formState } = useForm<ProductDTO>({
    defaultValues: {
      ...formData,
    },
  });
  const { errors } = formState;
  const [addProduct, { isLoading }] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetAllCategoriesQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

  const postData = async (data: ProductDTO) => {
    category; //fix ts, but must be added in form
    try {
      const form = dataForm(data);
      await addProduct(form).unwrap();
      navigate('/admin/products');
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (data: ProductDTO) => {
    try {
      if (id) {
        const form = dataForm(data);
        console.log(form);
        const product = await updateProduct([form, id.toString()]).unwrap();
        console.log(product);
        navigate('/admin/products');
      }
    } catch (err) {
      console.log(err);
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
    }
  };

  watch((data, { name }) => {
    if (name === 'images' && data.images !== undefined) {
      console.log(data.images.length);
      const files = data.images;
      for (let i = imagesUpload.length; i < files.length; i++) {
        const file = files[i];
        if (file) {
          setImagesUpload((prev) => [...prev, URL.createObjectURL(file)]);
        }
      }
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
    <div className="admin-add-news">
      <form className="admin-registration__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-card admin-add-card_type_add-photo">
          {images &&
            (Object.keys(images) as Array<keyof typeof images>)
              .filter((el) => el.includes('img') && images[el])
              .map((el, i) => {
                const url = images[el] as string;
                return (
                  <img
                    key={`imgUpload${i}`}
                    src={url.includes('http') ? url : serverUrl + url}
                    alt=""
                    className="image"
                  />
                );
              })}
          {imagesUpload.length &&
            imagesUpload.map((image, i) => {
              return <img key={`imgUpload${i}`} src={image} alt="" className="image" />;
            })}
          {preloadData && preloadData.published && (
            <label htmlFor="published" className="">
              На сайте
            </label>
          )}
          {images || imagesUpload ? (
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
            multiple
            {...register('images', {
              validate: {
                lessThan10MB: (files) => files[0]?.size < 300000 || 'Max 30kb',
                acceptedFormats: (files) =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF',
              },
            })}
            className="admin-add-card__input-file"
            name="images"
            accept="image/png, image/jpeg"
          />
          {errors.images && <span className="error-message">{errors.images.message}</span>}
        </div>
        {data && (
          <select {...register('category')}>
            {data.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
        )}
        <input
          {...register('name', {
            required: 'This is required.',
            // pattern: {
            //   value: /d+/,
            //   message: 'This input is number only.',
            // },
            minLength: {
              value: 5,
              message: 'This input exceed minLength 5',
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
        <input id="in_stock" type="checkbox" {...register('in_stock')} />
        <label htmlFor="in_stock">In Stock</label>
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

export default ProductForm;
