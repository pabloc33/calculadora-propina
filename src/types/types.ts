export type MenuT = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = MenuT & {
  quantity: number;
};

export type tipOptionsT = {
  id: string;
  value: number;
  label: string;
};
