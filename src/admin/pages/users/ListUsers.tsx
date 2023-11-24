import { Link } from 'react-router-dom';
import AdminUserCard from '../../../admin/components/UserCard';
import { useGetAllUsersQuery } from '../../../services/userApi';
import Loader from '../../../components/Loader/Loader';

const ListUsers = () => {
  const users = useGetAllUsersQuery(undefined);
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Сотрудники</h1>
      <div className="admin-users__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_users">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить нового сотрудника</p>
        </Link>
        {users.isLoading && <Loader />}
        {users.data && users.data.map((el, i) => <AdminUserCard key={i + 'user'} {...el} />)}
      </div>
    </section>
  );
};

export default ListUsers;
