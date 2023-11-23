export type ProductType = {
  id: 0;
  name: string;
  description: string;
  in_stock: true;
  published: true;
  category: {
    id: 0;
    name: string;
  };
  images: {
    id: 0;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    product: 0;
  };
};

type Props = {
  name: string;
  description: string;
  images: {
    img1: string;
  };
};

const ProductCard = ({ name, description, images }: Props) => {
  return (
    <article className="catalog__card card">
      <img className="card__img" src={images.img1} alt={name} />
      <p className="card__title">{name}</p>
      <p className="card__text">{description}</p>
    </article>
  );
};

export default ProductCard;
