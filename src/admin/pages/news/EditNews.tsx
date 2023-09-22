import { useParams } from 'react-router-dom';
import ArticleForm from '../../../components/ArticleForm';
import { useEffect } from 'react';
import { useGetArticleQuery } from '../../../services/postApi';

const EditNews = () => {
  const { newsId } = useParams();
  const { data } = useGetArticleQuery(newsId);
  useEffect(() => {
    console.log(newsId);
  }, []);

  return (
    <>
      <h2>Редактировать новость {newsId}</h2>
      {newsId ? <>{data && <ArticleForm preloadData={data} />}</> : <ArticleForm preloadData={undefined} />}
    </>
  );
};

export default EditNews;
