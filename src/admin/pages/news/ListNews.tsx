import { Link } from 'react-router-dom';
import AdminNewsCard from '../../../admin/components/NewsCard';
import { useGetAllArticlesQuery } from '../../../services/postApi';
import addImg from '../../../assets/images/icons/add.svg';
import Loader from '../../../components/Loader/Loader';

const ListNews = () => {
  const news = useGetAllArticlesQuery(undefined);
  return (
    <section>
      <h1 className="admin-title admin-news__title">Новости</h1>
      <div className="admin-news__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_news">
          <img src={addImg} alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новую запись</p>
        </Link>
        {news.isLoading && <Loader />}
        {news.error && <p>{news.error.toString()}</p>}
        {news.data && news.data.map((el, i) => <AdminNewsCard key={'article' + i} {...el} />)}
      </div>
    </section>
  );
};

export default ListNews;
