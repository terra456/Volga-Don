const AdminNewsCard = () => {
  return (
    <article className="admin-news-card">
      <img src="./assets/images/news2.png" alt="" className="admin-news-card__img" />
      <p className="admin-news-card__text admin-card__text"></p>
      <div className="admin-news-card__info admin-card__info">
        <div className="admin-news-card__buttons admin-card__buttons">
          <button className="admin-status admin-status_type_archive">
            В архиве <img src="./assets/images/icons/minus.svg" />
          </button>
          <button className="admin-btn-change"></button>
        </div>
        <p className="admin-news-card__date"></p>
      </div>
    </article>
  );
};

export default AdminNewsCard;
