import { Link } from 'react-router-dom';
import AdminCategoryCard from '../../Components/CategoryCard';

const ListCategory = () => {
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Категории</h1>
      <div className="admin-catalog__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_catalog">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новый товар</p>
        </Link>
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
      </div>
    </section>
  );
};

export default ListCategory;
