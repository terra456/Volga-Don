import { Link } from 'react-router-dom';
import { User } from '../../types';
import { useDeleteUserMutation } from '../../services/userApi';
// import '../../assets/images/icons/user.svg';

const AdminUserCard = ({ id, username }: User) => {
  const [deleteUser] = useDeleteUserMutation();
  return (
    <div className="admin-users__card">
      <img src="/assets/images/icons/user.svg" alt="пользователь" className="admin-users__icon" />
      <p className="admin-users__name">{username}</p>
      {/* <svg className="admin-users__close" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" />
                        <rect width="36" height="36" fill="currentColor" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C12.47 8 8 12.47 8 18C8 23.53 12.47 28 18 28C23.53 28 28 23.53 28 18C28 12.47 23.53 8 18 8ZM18 26C13.59 26 10 22.41 10 18C10 13.59 13.59 10 18 10C22.41 10 26 13.59 26 18C26 22.41 22.41 26 18 26ZM18 16.59L21.59 13L23 14.41L19.41 18L23 21.59L21.59 23L18 19.41L14.41 23L13 21.59L16.59 18L13 14.41L14.41 13L18 16.59Z" fill="black" />
                    </svg> */}
      <button onClick={() => deleteUser(id)}>Удалить</button>
    </div>
  );
};

export default AdminUserCard;
