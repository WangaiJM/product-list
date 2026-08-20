import { createContext } from "react";

export type Images = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: Images[];
};

export type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
