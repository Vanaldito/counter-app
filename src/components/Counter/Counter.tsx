import { useState } from "react";

import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <div className="counter__amount">{counter}</div>
      <button
        className="counter__increment"
        type="button"
        onClick={() => setCounter(counter => counter + 1)}
      >
        <span>+</span>
      </button>
      <button
        type="button"
        className="counter__decrement"
        onClick={() =>
          setCounter(counter => (counter - 1 < 0 ? 0 : counter - 1))
        }
      >
        <span>-</span>
      </button>
      <button
        className="counter__delete"
        type="button"
        onClick={() => setCounter(0)}
      >
        Delete
      </button>
    </div>
  );
}
