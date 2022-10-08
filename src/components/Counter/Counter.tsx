import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={() => setCounter(counter => counter + 1)}>
        +
      </button>
      <button
        type="button"
        onClick={() =>
          setCounter(counter => (counter - 1 < 0 ? 0 : counter - 1))
        }
      >
        -
      </button>
      <button type="button" onClick={() => setCounter(0)}>
        Delete
      </button>
    </div>
  );
}
