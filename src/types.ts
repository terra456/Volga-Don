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

export type ProductDTO = {
  name: string;
  description: string;
  in_stock: true;
  published: true;
  category: number;
  images: File[];
};

export interface AuthResponse {
  access: string;
  refresh: string;
}

export interface RefreshRequest {
  refresh: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
}

export interface UserDTO {
  username: string;
  password1: string;
  password2: string;
}

export type UserPassword = {
  old_password: string;
  password1: string;
  password2: string;
};

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

export type Categorie = {
  id: number;
  name: string;
};

export type CategorieDTO = {
  id?: number;
  name?: string;
};
