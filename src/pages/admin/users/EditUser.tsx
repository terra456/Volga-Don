import { Link } from 'react-router-dom';

const EditUser = () => {
  return (
    <>
      <h2>Cменить логин или пароль</h2>
      <div>
        <Link to={`/admin/user/update-name`}>Cменить логин</Link>
        <Link to={`/admin/user/change-password`}>Cменить пароль</Link>
      </div>
    </>
  );
};

export default EditUser;
