import { useState } from 'react';
import AdminCategoryItem from '../../../admin/components/CategoryItem';
import { useGetAllCategoriesQuery, usePostCategorieMutation } from '../../../services/postApi';
import { Categorie } from '../../../types';
import Loader from '../../../components/Loader/Loader';

const ListCategory = () => {
  const listCategories = useGetAllCategoriesQuery(undefined);
  const [newValue, setNewValue] = useState<string | undefined>(undefined);
  const [createCategorie] = usePostCategorieMutation();
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Категории</h1>
      <div className="admin-catalog__content">
        {listCategories.isLoading && <Loader />}
        {listCategories.data && listCategories.data.map((el: Categorie) => <AdminCategoryItem key={el.id} {...el} />)}
        <div className="admin-category__item">
          {newValue === undefined && (
            <button onClick={() => setNewValue('')} className="admin-btn">
              add
            </button>
          )}
          {newValue !== undefined && (
            <>
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="base-input base-input_type_name admin-category__input"
              />

              <button
                className="admin-btn admin-btn__save"
                onClick={() => {
                  createCategorie({ name: newValue });
                  setNewValue(undefined);
                }}
              >
                save
              </button>
              <button className="admin-btn admin-btn__discard" onClick={() => setNewValue(undefined)}>
                discard
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListCategory;
