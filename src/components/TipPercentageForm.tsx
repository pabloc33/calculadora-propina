import { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/db";

type Props = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export const TipPercentageForm = ({ setTip, tip }: Props) => {
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
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
