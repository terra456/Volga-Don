import { NavLink } from 'react-router-dom';
import { Article } from '../../types';

const AdminNewsCard = ({ id, title, text, image, published, created_at }: Article) => {
  return (
    <article className="admin-news-card">
      <img src={image} alt="" className="admin-news-card__img" />
      <p className="admin-news-card__text admin-card__text">{title}</p>
      <div className="admin-news-card__info admin-card__info">
        <div className="admin-news-card__buttons admin-card__buttons">
          {published ? (
            <button className="admin-status admin-status_type_archive">
              В архиве <img src="/assets/images/icons/minus.svg" />
            </button>
          ) : (
            <button className="admin-status admin-status_type_archive">
              На сайте <img src="/assets/images/icons/icon.svg" />
            </button>
          )}
          <NavLink to={`${id}/edit`}>
            <span className="admin-btn-change">Edit</span>
          </NavLink>
        </div>
        <p className="admin-news-card__date"></p>
      </div>
    </article>
  );
};

export default AdminNewsCard;
