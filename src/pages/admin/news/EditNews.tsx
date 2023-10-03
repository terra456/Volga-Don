import { useParams } from 'react-router-dom';
import ArticleForm from '../../../components/admin/ArticleForm';
import { useGetArticleQuery } from '../../../services/postApi';

const EditNews = () => {
  const { newsId } = useParams();
  const { data, isLoading } = useGetArticleQuery(newsId as string);

  return (
    <section className="admin-form-section">
      <h2 className="admin-title">Редактировать новость {newsId}</h2>
      {newsId && (
        <>
          {isLoading && <p>Loading...</p>}
          {data && <ArticleForm preloadData={data} />}
        </>
      )}
    </section>
  );
};

export default EditNews;
