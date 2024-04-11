import { MenuT, OrderItem } from "../types/types";

export type orderActions =
  | { type: "add-item"; payload: { item: MenuT } }
  | { type: "remove-item"; payload: { id: MenuT["id"] } }
  | { type: "add-tip"; payload: { value: number } }
  | { type: "place-order" };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (state: OrderState, action: orderActions) => {
  if (action.type === "add-item") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let updatedOrder: OrderItem[] = [];
    if (itemExist) {
      updatedOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    }

    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === "remove-item") {
    return {
      ...state,
      order: state.order.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === "add-tip") {
    const tip = action.payload.value;

    return {
      ...state,
      tip,
    };
  }

  if (action.type === "place-order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }

  return state;
};
