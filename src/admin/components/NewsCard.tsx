import { Link } from 'react-router-dom';
import { Article } from '../../types';

const AdminNewsCard = ({ id, title, image, published, created_at }: Article) => {
  const date = new Date(created_at);
  return (
    <article className="admin-news-card">
      <img src={image} alt="" className="admin-news-card__img" />
      <p className="admin-news-card__text admin-card__text">{title}</p>
      <div className="admin-news-card__info admin-card__info">
        <div className="admin-news-card__buttons admin-card__buttons">
          {published ? (
            <button className="admin-status admin-status_type_ok">На сайте</button>
          ) : (
            <button className="admin-status admin-status_type_archive">В архиве</button>
          )}
          <Link to={`/admin/news/${id}/edit`} relative="path" className="admin-btn-change" />
        </div>
        <p className="admin-news-card__date">
          {date.toLocaleDateString('ru-RU', { year: '2-digit', month: 'numeric', day: 'numeric' })}
        </p>
      </div>
    </article>
  );
};

export default AdminNewsCard;
