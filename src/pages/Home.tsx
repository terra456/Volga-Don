import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard/NewsCard';
import ProductCard from '../components/ProductCard/ProductCard';
import FirstStaticSections from '../components/HomeSections/FirstStaticSections';
import sert1 from '../../assets/images/sertificate1.png';
import sert2 from '../../assets/images/sertificate2.png';
import QuestionFormSection from '../components/HomeSections/QuestionFormSection';
// import { useEffect, useState } from 'react';
import { useGetAllArticlesQuery, useGetAllProductsQuery } from '../services/getApi';

const Home = () => {
  const news = useGetAllArticlesQuery(0);
  const products = useGetAllProductsQuery(0);
  // const [news, setNews] = useState<Article[]>([]);
  // const [newsLoader, setNewsLoader] = useState(false);
  // const [newsError, setNewsError] = useState('');
  // const [products, setProducts] = useState<Product[]>([]);
  // const [productsLoader, setProductsLoader] = useState(false);
  // const [productsError, setProductsError] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setNewsLoader(true);
  //     fetch('http://cv08121-django-53po4.tw1.ru/articles/', { mode: 'cors' })
  //       .then(async (res) => {
  //         if (res.ok) {
  //           const data: Article[] = await res.json();
  //           setNews(data);
  //           console.log(data);
  //         }
  //       })
  //       .catch((e) => {
  //         setNewsError(e.message);
  //       })
  //       .finally(() => setNewsLoader(false));
  //   };

  //   const fetchProducts = async () => {
  //     setProductsLoader(true);
  //     fetch('http://cv08121-django-53po4.tw1.ru/products/', { mode: 'cors' })
  //       .then(async (res) => {
  //         if (res.ok) {
  //           const data: Product[] = await res.json();
  //           setProducts(data);
  //           console.log(data);
  //         }
  //       })
  //       .catch((e) => {
  //         setProductsError(e.message);
  //       })
  //       .finally(() => setProductsLoader(false));
  //   };

  //   fetchData();
  //   fetchProducts();
  // }, []);

  return (
    <main className="content">
      <FirstStaticSections />

      <section className="section news" id="news">
        <h2 className="section__title">Последние новости</h2>
        <div className="section__container section__container_type_news">
          {news.isLoading && 'Loading'}
          {news.error && <p>{news.error.toString()}</p>}
          {news.data && news.data.slice(0, 3).map((el, i) => <NewsCard key={'article' + i} {...el} />)}
        </div>
      </section>

      <section className="section catalog">
        <h2 className="section__title">Каталог</h2>
        <div className="section__container section__container_type_catalog">
          {products.isLoading && 'Loading'}
          {products.error && <p>{products.error.toString()}</p>}
          {products.data && products.data.slice(0, 3).map((el, i) => <ProductCard key={'product' + i} {...el} />)}
        </div>
        <Link to={'catalog'} className="btn btn_type_catalog">
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
        <div className="section__container section__container_type_contacts">
          <div className="contact">
            <p className="contact__link">+7 (123) 456-7890</p>
            <p className="contact__link">info@volgograd-industry.ru</p>
            <p className="contact__link">г. Волгоград, ул. Ленина, д. 123, офис 456</p>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7697c06b0da4192192a6bd63b9b8aff9e4ca9562023f6113470adb20af381b37&amp;source=constructor"
            width="100%"
            height="200"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
