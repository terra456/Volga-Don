import ProductCard from '../components/ProductCard/ProductCard';
import { useGetAllProductsQuery } from '../services/getApi';

const Catalog = () => {
  const products = useGetAllProductsQuery(undefined);
  return (
    <section className="section catalog catalog_type_page">
      <h2 className="section__title">Каталог</h2>
      <div className="section__container catalog__container">
        {products.isLoading && 'Loading'}
        {products.error && <p>{products.error.toString()}</p>}
        {products.data && products.data.map((el, i) => <ProductCard key={'product' + i} {...el} />)}
      </div>
    </section>
  );
};

export default Catalog;
