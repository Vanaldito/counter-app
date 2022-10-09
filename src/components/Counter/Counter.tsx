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
      <div className="counter__amount">{amount === 0 ? "Zero" : amount}</div>
      <button
        className="counter__increment"
        type="button"
        onClick={() => changeAmount(amount + 1)}
      >
        <span>+</span>
      </button>
      <button
        type="button"
        className="counter__decrement"
        onClick={() => changeAmount(amount - 1 < 0 ? 0 : amount - 1)}
      >
        <span>-</span>
      </button>
      <button className="counter__delete" type="button" onClick={deleteCounter}>
        Delete
      </button>
    </div>
  );
}
