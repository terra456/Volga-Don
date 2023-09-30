import { Link } from 'react-router-dom';
import AdminNewsCard from '../../components/admin/NewsCard';
import AdminProductCard from '../../components/admin/ProductCard';
import AdminUserCard from '../../components/admin/UserCard';
import { useGetAllArticlesQuery, useGetAllProductsQuery } from '../../services/postApi';
import { useGetAllUsersQuery } from '../../services/userApi';

const AdminHome = () => {
  const products = useGetAllProductsQuery(undefined);
  const news = useGetAllArticlesQuery(undefined);
  const users = useGetAllUsersQuery(undefined);

  return (
    <main>
      <h1 className="admin-title">Добро пожаловать!</h1>
      <div className="admin-main-block">
        <div className="admin-main-block__header">
          <p className="admin-main-block__title">Новости</p>
          <Link to={'news'} className="admin-btn__link">
            Показать все
          </Link>
        </div>
        <section className="admin-main-block__content">
          <div className="admin-main-block__content-news admin-main-block__content-container">
            {news.isLoading && <p>Loading...</p>}
            {news.data && news.data.slice(0, 3).map((el) => <AdminNewsCard key={el.id} {...el} />)}
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
            {products.isLoading && <p>Loading...</p>}
            {products.data && products.data.slice(0, 5).map((el) => <AdminProductCard key={el.id} {...el} />)}
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
          <div className="admin-users__content">
            {users.isLoading && <p>Loading...</p>}
            {users.data && users.data.slice(0, 5).map((el, i) => <AdminUserCard key={i + 'user'} {...el} />)}
          </div>
          <Link to={'users/add'} className="admin-add-card admin-add-card_type_users">
            <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
            <p className="admin-add-card__text">Добавить нового сотрудника</p>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default AdminHome;