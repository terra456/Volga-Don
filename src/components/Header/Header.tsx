import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__burger" alt="меню-картинка" src="/assets/images/burger.svg" />
        <Link to={'/'}>
          <img className="logotype logotype_type_header" src="/assets/images/logotype.svg" alt="Логотип" />
        </Link>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a className="header__link" href="/#about" id="about-link">
                О нас
              </a>
            </li>
            <li>
              <a className="header__link" href="/#news" id="news-link">
                Новости
              </a>
            </li>
            <li>
              <Link className="header__link" to={`catalog`}>
                Каталог
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__connect">
          <a href="/#questions" className="header__link">
            Cвязаться с нами
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
