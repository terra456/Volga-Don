import { Link } from 'react-router-dom';
import AdminUserCard from '../../Components/UserCard';

const ListUsers = () => {
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Сотрудники</h1>
      <div className="admin-users__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_users">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить нового сотрудника</p>
        </Link>
        <AdminUserCard />
        <AdminUserCard />
        <AdminUserCard />
        <AdminUserCard />
      </div>
    </section>
  );
};

export default ListUsers;
