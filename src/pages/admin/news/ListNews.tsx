import { Link } from 'react-router-dom';
import AdminNewsCard from '../../../components/admin/NewsCard';
import { useGetAllArticlesQuery } from '../../../services/postApi';

const ListNews = () => {
  const news = useGetAllArticlesQuery(undefined);
  return (
    <section>
      <h1 className="admin-title admin-news__title">Новости</h1>
      <div className="admin-news__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_news">
          <img src="/assets/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новую запись</p>
        </Link>
        {news.isLoading && 'Loading'}
        {news.error && <p>{news.error.toString()}</p>}
        {news.data && news.data.map((el, i) => <AdminNewsCard key={'article' + i} {...el} />)}
      </div>
    </section>
  );
};

export default ListNews;
