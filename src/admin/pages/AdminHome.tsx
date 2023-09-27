import { Link } from 'react-router-dom';
import AdminNewsCard from '../Components/NewsCard';
import AdminProductCard from '../Components/ProductCard';
import AdminUserCard from '../Components/UserCard';
import { useGetAllArticlesQuery, useGetAllProductsQuery } from '../../services/postApi';

const AdminHome = () => {
  const products = useGetAllProductsQuery(undefined);
  const news = useGetAllArticlesQuery(undefined);

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
            {news && news.data?.slice(3).map((el) => <AdminNewsCard key={el.id} {...el} />)}
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
            {products && products.data?.slice(3).map((el) => <AdminProductCard key={el.id} {...el} />)}
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

export default AdminHome;
