export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  type: productType;
  ingredients: string;
  pictureId: number;
}

export enum productType {
  HEALTHWELLNESS = 'Zdrowie i uroda',
  VITAMINS = 'Witaminy',
  SUPPLEMENTS = 'Suplementy dietetyczne',
  BEAUTY = 'Pielęgnacja ciała',
  PHARMACY = 'Apteka',
}
