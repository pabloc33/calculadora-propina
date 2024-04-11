import { useState } from "react";
import { MenuT, OrderItem } from "../types/types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuT) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuT["id"]) => {
    // const updateOrder = order.filter((orderItem) => orderItem.id !== id);
    // setOrder(updateOrder);

    //otra solución
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    //* Properties
    order,
    tip,
    setTip,
    //*Methods
    addItem,
    removeItem,
    placeOrder,
  };
};
