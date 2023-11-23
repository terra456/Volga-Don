export type NewsType = {
  id: number;
  title: string;
  text: string;
  image: string;
  published: true;
  created_at: string;
};

export type Props = {
  title: string;
  text: string;
  image: string;
  created_at: string;
};

const NewsCard = ({ title, text, image, created_at }: Props) => {
  const date = new Date(created_at);
  return (
    <article className="news__card card">
      <img className="news__img card__img" src={image} alt={title} />
      <div className="news__name-container">
        <p className="news__name card__title">{title}</p>
        <p className="news__date card__text">
          {date.toLocaleDateString('ru-RU', { year: '2-digit', month: 'numeric', day: 'numeric' })}
        </p>
      </div>
      <p className="news__about card__text">{text}</p>
    </article>
  );
};

export default NewsCard;
