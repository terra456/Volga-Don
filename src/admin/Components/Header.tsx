import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Header = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('acsessToken');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* <img className="header__burger" alt="меню-картинка" src="../vendor/images/burger.svg"> */}
        <Link to={`/`}>
          {/* <img className="logotype logotype_type_header" src="../vendor/images/logotype.svg" alt="Логотип"> */}
          На сайт
        </Link>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <Link className="header__link" to={`news`}>
                Новости
              </Link>
            </li>
            <li>
              <Link className="header__link" to={`products`}>
                Товары
              </Link>
            </li>
            <li>
              <Link className="header__link" to={`categories`}>
                Категории
              </Link>
            </li>
            <li>
              <Link className="header__link" to={`users`}>
                Пользователи
              </Link>
            </li>
          </ul>
        </nav>
        {user && (
          <div className="header__connect">
            <Link className="header__link" to={`user/edit`}>
              {user.userInfo.username}
            </Link>
            <button className="btn" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
