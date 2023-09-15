import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <img className="header__burger" alt="меню-картинка" src="../vendor/images/burger.svg"> */}
        <a href="./index.html">
          {/* <img className="logotype logotype_type_header" src="../vendor/images/logotype.svg" alt="Логотип"> */}
          Home
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a className="header__link" href="#about" id="about-link">
                О нас
              </a>
            </li>
            <li>
              <a className="header__link" href="#news" id="news-link">
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
          <a href="" className="header__link">
            Cвязаться с нами
          </a>
          {/* <img src="../vendor/images/arrow.svg" alt="" className="header__connect-arrow"> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
