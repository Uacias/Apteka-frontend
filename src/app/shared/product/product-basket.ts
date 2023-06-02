import { productType } from './product';

export interface IProductBasket {
  id: number;
  name: string;
  price: number;
  description: string;
  type: productType;
  ingredients: string;
  pictureId: number;
  quantity: number;
  totalPrice: number;
}
