import { Link } from 'react-router-dom';
import AdminProductCard from '../../Components/ProductCard';

const ListProducts = () => {
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Каталог</h1>
      <div className="admin-catalog__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_catalog">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новый товар</p>
        </Link>
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
    </section>
  );
};

export default ListProducts;
