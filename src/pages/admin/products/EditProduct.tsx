import { useParams } from 'react-router-dom';
import ProductForm from '../../../components/admin/ProductForm';
import { useGetProductQuery } from '../../../services/postApi';

const EditProduct = () => {
  const { productId } = useParams();
  const { data } = useGetProductQuery(Number(productId));
  return (
    <>
      <h2>Редактировать товар</h2>
      {data && <ProductForm preloadData={data} />}
    </>
  );
};

export default EditProduct;
