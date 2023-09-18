const AdminProductCard = () => {
  return (
    <article className="admin-news-card admin-news-card_type_catalog">
      <img src="" alt="" className="admin-catalog__img" />
      <p className="admin-catalog-card__text admin-card__text"></p>
      <div className="admin-catalog-card__info admin-card__info">
        <div className="admin-catalog-card__buttons admin-card__buttons">
          <button className="admin-status admin-status_type_archive">В архиве</button>
          <button className="admin-btn-change"></button>
        </div>
      </div>
    </article>
  );
};

export default AdminProductCard;
