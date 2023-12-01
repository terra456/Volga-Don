import { Link } from 'react-router-dom';
import AdminProductCard from '../../../admin/components/ProductCard';
import { useGetAllProductsQuery } from '../../../services/postApi';
import Loader from '../../../components/Loader/Loader';
import addImg from '../../../assets/images/icons/add.svg';

const ListProducts = () => {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
  return (
    <section>
      <h1 className="admin-title admin-catalog__title">Каталог</h1>
      <div className="admin-catalog__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_catalog">
          <img src={addImg} alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новый товар</p>
        </Link>
        {isLoading && <Loader />}
        {error && <p>{error.toString()}</p>}
        {data && data.map((el, i) => <AdminProductCard key={'product' + i} {...el} />)}
      </div>
    </section>
  );
};

export default ListProducts;
