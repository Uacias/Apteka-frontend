export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  type: TypProduktu;
  ingredients: string;
  pictureId: string;
}

export type TypProduktu = 'LEK' | 'WITAMINA' | 'SUPLEMENT_DIETETYCZNY';
