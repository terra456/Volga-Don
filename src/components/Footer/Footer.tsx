import { Link } from 'react-router-dom';
import logo from '../../assets/images/logotype-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container section__container">
        <Link to={'/'} className="footer__logotype-link">
          <img className="logotype footer__logotype" src={logo} alt="Логотип" />
        </Link>
        <nav className="footer__nav">
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
        <div className="contact footer__contact">
          <p className="contact__link section__text">+7 (123) 456-7890</p>
          <p className="contact__link section__text">info@volgograd-industry.ru</p>
          <p className="contact__link section__text">г.&nbsp;Волгоград, ул.&nbsp;Ленина, д.&nbsp;123, офис&nbsp;456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
