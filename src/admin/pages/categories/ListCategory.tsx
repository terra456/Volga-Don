import AdminCategoryItem from '../../Components/CategoryItem';
import { useGetAllCategoriesQuery, usePostCategorieMutation } from '../../../services/postApi';
import { Categorie } from '../../../types';
import { useState } from 'react';

const ListCategory = () => {
  const listCategories = useGetAllCategoriesQuery(undefined);
  const [newValue, setNewValue] = useState<string | undefined>(undefined);
  const [createCategorie] = usePostCategorieMutation();
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Категории</h1>
      <div className="admin-catalog__content">
        {listCategories.isLoading && <p>Loading...</p>}
        {listCategories.data && listCategories.data.map((el: Categorie) => <AdminCategoryItem key={el.id} {...el} />)}
        <div>
          {newValue === undefined && <button onClick={() => setNewValue('')}>add</button>}
          {newValue !== undefined && (
            <>
              <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />

              <button
                className="btn btn__save"
                onClick={() => {
                  createCategorie({ name: newValue });
                  setNewValue(undefined);
                }}
              >
                save
              </button>
              <button className="btn btn__save" onClick={() => setNewValue(undefined)}>
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
