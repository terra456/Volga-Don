import { useParams } from 'react-router-dom';
import ArticleForm from '../../../admin/components/ArticleForm';
import { useGetArticleQuery } from '../../../services/postApi';
import Loader from '../../../components/Loader/Loader';

const EditNews = () => {
  const { newsId } = useParams();
  const { data, isLoading } = useGetArticleQuery(newsId as string);

  return (
    <section className="admin-form-section">
      <h2 className="admin-title">Редактировать новость {newsId}</h2>
      {newsId && (
        <>
          {isLoading && <Loader />}
          {data && <ArticleForm preloadData={data} />}
        </>
      )}
    </section>
  );
};

export default EditNews;
