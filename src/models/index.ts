export interface useDataModel {
  id: number;
  title: string;
  text: string;
  image: string;
}
export interface categoryDataModel {
  id: number;
  title: string;
  image: string;
  route: string;
}
export interface CardModel {
  id: number;
  title: string;
  text: string;
  icon: React.ReactNode;
}
export interface IProductsModel {
  id: number;
  image: string;
  count: number;
  title: string;
  description: string;
  category: string;
  price: number;
}
