import mainImage from '../../assets/images/main-image.png';
import logoVector from '../../assets/images/icons/logo-vector.svg';
import aboutImg from '../../assets/images/about.png';
import reasonFirst from '../../assets/images/icons/reason-1.svg';
import reasonSecond from '../../assets/images/icons/reason-2.svg';
import reasonThird from '../../assets/images/icons/reason-3.svg';
import reasonFouth from '../../assets/images/icons/reason-4.svg';

const FirstStaticSections = () => {
  return (
    <>
      <section className="main-page">
        <div className="main-page__container">
          <div className="main-page__title-container">
            <img src={logoVector} />
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
          <img src={mainImage} alt="main-image" className="main-page__img"></img>
        </div>
      </section>
      <section className="section about" id="about">
        <h2 className="section__title">О нас</h2>
        <div className="section__container section__container_type_about">
          <img src={aboutImg} alt="картинка блока about" className="section__img section__img_type_about" />
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
            <img src={reasonFirst} alt="reason 1" className="reason__img" />
            <p className="reason__title">12 лет на рынке</p>
            <p className="reason__text">
              Мы завоевали уважение и доверие, зарекомендовав себя как надежного делового партнера и поставщика
              качественных строительно-ремонтных работ.
            </p>
          </article>

          <article className="reason__card">
            <img src={reasonSecond} alt="reason 2" className="reason__img" />
            <p className="reason__title">Лучшие зарубежные и отечественные производители</p>
            <p className="reason__text">
              Являемся официальным дилером и поставщиком строительного оборудования таких компаний как Mörtel Meister,
              Euromix и других.
            </p>
          </article>

          <article className="reason__card">
            <img src={reasonThird} alt="reason 3" className="reason__img" />
            <p className="reason__title">Доставка в любую точку страны</p>
            <p className="reason__text">
              Сотрудничаем с крупными транспортными компаниями как ПЭК, Деловые линии, Желдорэкспедиция. Наши товары
              доставляются к покупателю быстро, в целости и сохранности.
            </p>
          </article>

          <article className="reason__card">
            <img src={reasonFouth} alt="reason 4" className="reason__img" />
            <p className="reason__title">Профессиональная поддержка</p>
            <p className="reason__text">
              Наши специалисты помогут подобрать необходимую строительную технику, оборудование, запчасти и
              комплектующие, а также расскажут об особенностях их эксплуатации.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default FirstStaticSections;
