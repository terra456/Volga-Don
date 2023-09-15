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
  return (
    <article className="news__card">
      <img className="news__img" src={image} alt={title} />
      <div className="news__name-container">
        <p className="news__name">{title}</p>
        <p className="news__date">{created_at}</p>
      </div>
      <p className="news__about">{text}</p>
    </article>
  );
};

export default NewsCard;
