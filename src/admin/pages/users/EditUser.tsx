import { Link } from 'react-router-dom';

const EditUser = () => {
  return (
    <section className="admin-form-section">
      <h2 className="admin-title">Cменить логин или пароль</h2>
      <div className="admin-users__buttons-container_column">
        <Link to={`/admin/user/update-name`} className="btn admin-btn__link admin-btn__link_arrow">
          Cменить логин
        </Link>
        <Link to={`/admin/user/change-password`} className="btn admin-btn__link admin-btn__link_arrow">
          Cменить пароль
        </Link>
      </div>
    </section>
  );
};

export default EditUser;
