import { Link } from 'react-router-dom';
import AdminNewsCard from '../../../components/Admin/AdminNewsCard';

const ListNews = () => {
  return (
    <section>
      <h1 className="admin-title admin-news__title">Новости</h1>
      <div className="admin-news__content">
        <Link to={'add'} className="admin-add-card admin-add-card_type_news">
          <img src="../vendor/images/icons/add.svg" alt="Добавить запись" className="admin-add-card__icon" />
          <p className="admin-add-card__text">Добавить новую запись</p>
        </Link>
        <AdminNewsCard />
        <AdminNewsCard />
        <AdminNewsCard />
        <AdminNewsCard />
      </div>
    </section>
  );
};

export default ListNews;
