import { Dispatch } from "react";
import { tipOptions } from "../data/db";
import { orderActions } from "../reducers/order-reducer";

type Props = {
  tip: number;
  dispatch: Dispatch<orderActions>;
};

export const TipPercentageForm = ({ dispatch, tip }: Props) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
