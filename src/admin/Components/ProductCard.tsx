import { Link } from "react-router-dom";
import { Product } from "../../types";

const AdminProductCard = ({ id, name, description, in_stock, published, category, images }: Product) => {
  return (
    <article className="admin-news-card admin-news-card_type_catalog">
      <img src={images.img1} alt="" className="admin-catalog__img" />
      <p className="admin-catalog-card__text admin-card__text">{name}</p>
      <div className="admin-catalog-card__info admin-card__info">
        <div className="admin-catalog-card__buttons admin-card__buttons">
          {published ? (
            <button className="admin-status admin-status_type_archive">В архиве</button>
          ) : (
            <button className="admin-status admin-status_type_ok">
              На сайте <img src="/assets/images/icons/icon.svg" />
            </button>
          )}
          <Link to={`${id}/edit`} className="admin-btn-change">
            edit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AdminProductCard;
