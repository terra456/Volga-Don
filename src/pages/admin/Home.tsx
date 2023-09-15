import { Link } from 'react-router-dom';
import AdminNewsCard from '../../components/Admin/AdminNewsCard';
import AdminProductCard from '../../components/Admin/AdminProductCard';
import AdminUserCard from '../../components/Admin/AdminUserCard';

const Home = () => {
  return (
    <main>
      <h1 className="admin-title">Добро пожаловать!</h1>
      <div className="admin-main-block">
        <div className="admin-main-block__header">
          <p className="admin-main-block__title">Новости</p>
          <Link to={'admin/news'} className="admin-btn__link">
            Показать все
          </Link>
        </div>
        <section className="admin-main-block__content">
          <div className="admin-main-block__content-news admin-main-block__content-container">
            <AdminNewsCard />
            <AdminNewsCard />
            <AdminNewsCard />
          </div>
          <Link to={'news/add'} className="admin-add-card admin-add-card_type_news">
            <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
            <p className="admin-add-card__text">Добавить новую запись</p>
          </Link>
        </section>
      </div>
      <div className="admin-main-block">
        <div className="admin-main-block__header">
          <p className="admin-main-block__title">Каталог</p>
          <Link to={'products'} className="admin-btn__link">
            Показать все
          </Link>
        </div>
        <section className="admin-main-block__content">
          <div className="admin-main-block__content-catalog admin-main-block__content-container">
            <AdminProductCard />
            <AdminProductCard />
            <AdminProductCard />
          </div>
          <Link to={'products/add'} className="admin-add-card admin-add-card_type_catalog">
            <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
            <p className="admin-add-card__text">Добавить новый товар</p>
          </Link>
        </section>
      </div>
      <div className="admin-main-block">
        <div className="admin-main-block__header">
          <p className="admin-main-block__title">Сотрудники</p>
          <Link to={'users'} className="admin-btn__link">
            Показать все
          </Link>
        </div>
        <section className="admin-main-block__content">
          <div className="admin-users">
            <AdminUserCard />
          </div>
          <Link to={'products/add'} className="admin-add-card admin-add-card_type_users">
            <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
            <p className="admin-add-card__text">Добавить нового сотрудника</p>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
