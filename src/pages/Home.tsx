import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard/NewsCard';
import ProductCard from '../components/ProductCard/ProductCard';
import FirstStaticSections from '../components/HomeSections/FirstStaticSections';
import sert1 from '../../assets/images/sertificate1.png';
import sert2 from '../../assets/images/sertificate2.png';
import QuestionFormSection from '../components/HomeSections/QuestionFormSection';
import { useGetAllArticlesQuery, useGetAllProductsQuery } from '../services/getApi';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const news = useGetAllArticlesQuery(undefined);
  const products = useGetAllProductsQuery(undefined);

  return (
    <main className="content">
      <FirstStaticSections />

      <section className="section news" id="news">
        <h2 className="section__title">Последние новости</h2>
        <div className="section__container section__container_type_news">
          {news.isLoading && <Loader />}
          {news.error && <p>{JSON.stringify(products.error)}</p>}
          {news.data &&
            news.data
              .filter((el) => el.published)
              .slice(0, 3)
              .map((el, i) => <NewsCard key={'article' + i} {...el} />)}
        </div>
      </section>

      <section className="section catalog">
        <h2 className="section__title">Каталог</h2>
        <div className="section__container section__container_type_catalog">
          {products.isLoading && <Loader />}
          {products.error && <p>{JSON.stringify(products.error)}</p>}
          {products.data &&
            products.data
              .filter((el) => el.published)
              .slice(0, 4)
              .map((el, i) => <ProductCard key={'product' + i} {...el} />)}
        </div>
        <Link to={'catalog'} className="btn btn_type_catalog btn_arrow">
          Показать еще
        </Link>
      </section>

      <section className="section sertificates">
        <h2 className="section__title">Сертификаты</h2>
        <div className="section__container section__container_type_sertificates">
          <img src={sert1} alt="Сертификат1" className="sertificates__img" />
          <img src={sert2} alt="Сетификат2" className="sertificates__img" />
        </div>
      </section>

      <QuestionFormSection />

      <section className="section contacts">
        <h2 className="section__title">Контакты</h2>
        <div className="section__container">
          <div className="contact">
            <p className="contact__link">+7&nbsp;(123)&nbsp;456-7890</p>
            <p className="contact__link">info@volgograd-industry.ru</p>
            <p className="contact__link">г.&nbsp;Волгоград, ул.&nbsp;Ленина, д.&nbsp;123, офис&nbsp;456</p>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7697c06b0da4192192a6bd63b9b8aff9e4ca9562023f6113470adb20af381b37&amp;source=constructor"
            width="100%"
            height="300"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
