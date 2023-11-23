import { Link } from 'react-router-dom';
import logo from '../../assets/images/logotype.svg';
import { MouseEvent, useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', toggleMenuMode);
    } else {
      document.removeEventListener('click', toggleMenuMode);
    }
  }, [isMenuOpen]);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
    console.log(isMenuOpen);
  }

  function menuButtonHandler(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    toggleMenuMode();
  }

  return (
    <header className="header section">
      <div className="header__container section__container">
        <button className={isMenuOpen ? 'header__burger-btn' : 'header__burger-btn active'} onClick={menuButtonHandler}>
          <img className="header__logotype_burger" src={logo} alt="Логотип" />
        </button>
        <Link to={'/'} className="header__logotype-link">
          <img className="header__logotype" src={logo} alt="Логотип" />
        </Link>
        <nav className={isMenuOpen ? 'header__nav active' : 'header__nav'}>
          <ul className="nav__list">
            <li>
              <a className="nav__link" href="/#about" id="about-link">
                О&nbsp;нас
              </a>
            </li>
            <li>
              <a className="nav__link" href="/#news" id="news-link">
                Новости
              </a>
            </li>
            <li>
              <Link className="nav__link" to={`catalog`}>
                Каталог
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btn btn_arrow header__btn-arrow">
          <a href="/#questions" className="nav__link">
            Cвязаться с нами
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
