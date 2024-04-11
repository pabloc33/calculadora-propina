import { Dispatch } from "react";
import { MenuT } from "../types/types";
import { orderActions } from "../reducers/order-reducer";

type Props = {
  item: MenuT;
  dispatch: Dispatch<orderActions>;
};

export const MenuItem = ({ item, dispatch }: Props) => {
  return (
    <>
      <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        onClick={() =>
          dispatch({
            type: "add-item",
            payload: { item },
          })
        }
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
};
