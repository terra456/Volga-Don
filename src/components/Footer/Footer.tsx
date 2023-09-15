const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="./index.html">
          <div className="logotype logotype_type_footer"></div>
        </a>
        <nav className="footer__nav footer__nav_type_main">
          <ul className="footer__list">
            <li>
              <a href="./about.html" className="footer__link">
                О нас
              </a>
            </li>
            <li>
              <a className="footer__link">Новости</a>
            </li>
            <li>
              <a href="./catalog.html" className="footer__link">
                Каталог
              </a>
            </li>
          </ul>
        </nav>
        <div className="contact footer__contact footer__contact_type_main">
          <p className="contact__link">+7 (123) 456-7890</p>
          <p className="contact__link">info@volgograd-industry.ru</p>
          <p className="contact__link">г. Волгоград, ул. Ленина, д. 123, офис 456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
