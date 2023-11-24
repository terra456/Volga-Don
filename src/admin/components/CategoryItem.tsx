import { useState } from 'react';
import { Categorie } from '../../types';
import { useDeleteCategorieMutation, usePatchCategorieMutation } from '../../services/postApi';

const AdminCategoryItem = ({ id, name }: Categorie) => {
  const [value, setValue] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const [updateCategorie] = usePatchCategorieMutation();
  const [deleteCategorie] = useDeleteCategorieMutation();

  return (
    <div className="admin-category__item">
      <input
        type="text"
        value={value}
        disabled={!isEdit}
        className="base-input base-input_type_name admin-category__input"
      />
      {!isEdit && (
        <>
          <button className="admin-btn admin-btn-change" onClick={() => setIsEdit(true)}></button>
          <button className="admin-btn admin-btn__close" onClick={() => deleteCategorie(id)}></button>
        </>
      )}
      {isEdit && (
        <>
          <button
            className="admin-btn admin-btn__save"
            onClick={() => {
              updateCategorie([{ name: value }, id]).then(() => {
                setIsEdit(false);
              });
            }}
          >
            save
          </button>
          <button
            className="admin-btn admin-btn__discard"
            onClick={() => {
              setValue(name);
              setIsEdit(false);
            }}
          >
            discard
          </button>
        </>
      )}
    </div>
  );
};

export default AdminCategoryItem;
