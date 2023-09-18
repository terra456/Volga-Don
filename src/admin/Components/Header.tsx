import { Link } from 'react-router-dom';

const Header = () => {
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
        <div className="header__connect">
          <span>Войти</span>
          <span>Выйти</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
