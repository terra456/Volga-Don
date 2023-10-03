import { User } from '../../types';
import { useDeleteUserMutation } from '../../services/userApi';

const AdminUserCard = ({ id, username }: User) => {
  const [deleteUser] = useDeleteUserMutation();
  return (
    <div className="admin-users__card">
      <img src="/assets/images/icons/user.svg" alt="пользователь" className="admin-users__icon" />
      <p className="admin-users__name">{username}</p>
      <button className="admin-btn admin-btn__close admin-btn__close_top" onClick={() => deleteUser(id)}></button>
    </div>
  );
};

export default AdminUserCard;
