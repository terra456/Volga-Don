import { useParams } from 'react-router-dom';
import ArticleForm from '../../../components/admin/ArticleForm';
import { useGetArticleQuery } from '../../../services/postApi';

const EditNews = () => {
  const { newsId } = useParams();
  const { data, isLoading } = useGetArticleQuery(newsId as string);

  return (
    <>
      <h2>Редактировать новость {newsId}</h2>
      {newsId && (
        <>
          {isLoading && <p>Loading...</p>}
          {data && <ArticleForm preloadData={data} />}
        </>
      )}
    </>
  );
};

export default EditNews;
