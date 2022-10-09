import { DeleteIcon } from "../Icons";

import "./Counter.css";

interface CounterProps {
  amount: number;
  changeAmount: (newAmount: number) => void;
  deleteCounter: () => void;
}

export default function Counter({
  amount,
  changeAmount,
  deleteCounter,
}: CounterProps) {
  return (
    <div className="counter">
      <div
        className={`counter__amount${
          amount === 0 ? " counter__amount--zero" : ""
        }`}
      >
        {amount === 0 ? "Zero" : amount}
      </div>
      <button
        className="counter__increment"
        type="button"
        onClick={() => changeAmount(amount + 1)}
      >
        <span>+</span>
      </button>
      <button
        type="button"
        className={`counter__decrement${
          amount === 0 ? " counter__decrement--disabled" : ""
        }`}
        onClick={() => changeAmount(amount - 1 < 0 ? 0 : amount - 1)}
      >
        <span>-</span>
      </button>
      <button className="counter__delete" type="button" onClick={deleteCounter}>
        <DeleteIcon />
      </button>
    </div>
  );
}
