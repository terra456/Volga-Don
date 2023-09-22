export type Article = {
  id: number;
  title: string;
  text: string;
  image: string;
  published: boolean;
  created_at: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  in_stock: true;
  published: true;
  category: {
    id: number;
    name: string;
  };
  images: {
    id: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    product: number;
  };
};

export interface UserResponse {
  access: string;
  refresh: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  first_name: string;
  last_name: string;
}

export type ArticleDTO = {
  title: string;
  text: string;
  image: File[];
  published: boolean;
};

export type ArticleEditDTO = {
  id: number;
  title?: string;
  text?: string;
  image?: File[];
  published?: boolean;
};
