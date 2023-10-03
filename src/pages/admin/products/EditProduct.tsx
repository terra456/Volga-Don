import { useParams } from 'react-router-dom';
import ProductForm from '../../../components/admin/ProductForm';
import { useGetProductQuery } from '../../../services/postApi';

const EditProduct = () => {
  const { productId } = useParams();
  const { data } = useGetProductQuery(Number(productId));
  return (
    <section className="admin-form-section">
      <h2 className="admin-title">Редактировать товар</h2>
      {data && <ProductForm preloadData={data} />}
    </section>
  );
};

export default EditProduct;
