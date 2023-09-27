import { useState } from 'react';
import { Categorie } from '../../types';
import { useDeleteCategorieMutation, usePatchCategorieMutation } from '../../services/postApi';

const AdminCategoryItem = ({ id, name }: Categorie) => {
  const [value, setValue] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const [updateCategorie] = usePatchCategorieMutation();
  const [deleteCategorie] = useDeleteCategorieMutation();

  return (
    <div className="admin-users">
      <input type="text" value={value} disabled={!isEdit} />
      {!isEdit && (
        <>
          <button className="btn btn__edit" onClick={() => setIsEdit(true)}>
            edit
          </button>
          <button className="btn btn__save" onClick={() => deleteCategorie(id)}>
            delite
          </button>
        </>
      )}
      {isEdit && (
        <>
          <button
            className="btn btn__save"
            onClick={() => {
              updateCategorie([{ name: value }, id]).then(() => {
                setIsEdit(false);
              });
            }}
          >
            save
          </button>
          <button
            className="btn btn__save"
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
