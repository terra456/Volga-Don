import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard/NewsCard';
import ProductCard from '../components/ProductCard/ProductCard';

const Home = () => {
  return (
    <main className="content">
      <section className="main-page">
        <div className="main-page__container">
          <div className="main-page__title-container">
            <img src="../assets/images/icons/logo-vector.svg" />
            <h1 className="main-page__title">Ваш надежный партнер в мире промышленной техники</h1>
          </div>
          <p className="main-page__text">
            Мы специализируемся на продаже, аренде и обслуживании строительно-отделочной техники от ведущих
            отечественных и зарубежных производителей.
          </p>
          <p className="main-page__text">
            Наша цель — стать для Вас надежным партнером, предоставляя конструктивные решения и качественное
            оборудование.
          </p>
          <button className="btn btn_type_main">Продолжить</button>
          <img src="../assets/images/main-image.png" alt="" className="main-page__img"></img>
        </div>
      </section>
      <section className="section about" id="about">
        <h2 className="section__title">О нас</h2>
        <div className="section__container section__container_type_about">
          <img
            src="../assets/images/about.png"
            alt="картинка блока about"
            className="section__img section__img_type_about"
          />
          <div className="about__container">
            <p className="section__text about__description">
              Строительная компания <b>«Волга-Дон-Строй»</b> динамично развивается и результативно работает в
              Волгоградской области и других субъектах Южного Федерального округа.
            </p>
            <h3 className="about__title">Чем мы занимаемся?</h3>
            <div className="about__text-container">
              <div className="about__column">
                <h5 className="about__column-title">Промышленно-гражданское строительство</h5>
                <ul>
                  <li className="about__text">Строительство и ремонт промышленных зданий и сооружений</li>
                  <li className="about__text">Кровельные, фасадные и внутренние отделочные работы любой сложности</li>
                  <li className="about__text">Ремонт наружных и внутренних систем коммуникаций</li>
                </ul>
              </div>
              <div className="about__column">
                <h5 className="about__column-title">Поставка строительного оборудования</h5>
                <ul>
                  <li className="about__text">Поставка строительного оборудования</li>
                  <li className="about__text">Поставки нового и б/у строительного оборудования и техники</li>
                  <li className="about__text">Поставки запасных частей и комплектующих</li>
                  <li className="about__text">Аренда строительного оборудования и техники</li>
                  <li className="about__text">Ремонт и обслуживание</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section reason">
        <h2 className="section__title">Почему мы?</h2>
        <div className="section__container section__container_type_reason">
          <article className="reason__card">
            <img src="../assets/images/icons/reason-1.svg" alt="" className="reason__img" />
            <p className="reason__title">12 лет на рынке</p>
            <p className="reason__text">
              Мы завоевали уважение и доверие, зарекомендовав себя как надежного делового партнера и поставщика
              качественных строительно-ремонтных работ.
            </p>
          </article>

          <article className="reason__card">
            <img src="../assets/images/icons/reason-2.svg" alt="" className="reason__img" />
            <p className="reason__title">Лучшие зарубежные и отечественные производители</p>
            <p className="reason__text">
              Являемся официальным дилером и поставщиком строительного оборудования таких компаний как Mörtel Meister,
              Euromix и других.
            </p>
          </article>

          <article className="reason__card">
            <img src="../assets/images/icons/reason-3.svg" alt="" className="reason__img" />
            <p className="reason__title">Доставка в любую точку страны</p>
            <p className="reason__text">
              Сотрудничаем с крупными транспортными компаниями как ПЭК, Деловые линии, Желдорэкспедиция. Наши товары
              доставляются к покупателю быстро, в целости и сохранности.
            </p>
          </article>

          <article className="reason__card">
            <img src="../assets/images/icons/reason-4.svg" alt="" className="reason__img" />
            <p className="reason__title">Профессиональная поддержка</p>
            <p className="reason__text">
              Наши специалисты помогут подобрать необходимую строительную технику, оборудование, запчасти и
              комплектующие, а также расскажут об особенностях их эксплуатации.
            </p>
          </article>
        </div>
      </section>
      <section className="section news" id="news">
        <h2 className="section__title">Последние новости</h2>
        <div className="section__container section__container_type_news">
          <NewsCard title={'title'} text={'text'} image={'image'} created_at={'created_at'} />
        </div>
      </section>
      <section className="section catalog">
        <h2 className="section__title">Каталог</h2>
        <div className="section__container section__container_type_catalog">
          <ProductCard
            name={'name'}
            description={'description'}
            images={{
              img1: '',
            }}
          />
        </div>
        <Link to={'catalog'} className="btn btn_type_catalog">
          Показать еще
        </Link>
      </section>
      <section className="section sertificates">
        <h2 className="section__title">Сертификаты</h2>
        <div className="section__container section__container_type_sertificates">
          <img src="../assets/images/sertificate1.png" alt="Сертификат1" className="sertificates__img" />
          <img src="../assets/images/sertificate2.png" alt="Сетификат2" className="sertificates__img" />
        </div>
      </section>
      <section className="section questions" id="questions">
        <h2 className="section__title">Остались вопросы?</h2>
        <div className="section__container section__container_type_questions">
          <img src="../assets/images/questions.png" alt="" className="questions__img" />
          <form className="questions__form">
            <p className="questions__form-title">Оставьте заявку, и мы перезвоним в течение 30 минут</p>
            <input
              type="text"
              className="base-input base-input_type_name questions__form-input-name"
              placeholder="Имя"
              required
            />
            <input
              type="text"
              className="base-input base-input_type_surname questions__form-input-surname"
              placeholder="Фамилия"
              required
            />
            <input
              type="tel"
              className="base-input base-input_type_phone questions__form-input-number"
              placeholder="Телефон"
              required
            />
            <button type="submit" className="btn btn_type_questions">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
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
