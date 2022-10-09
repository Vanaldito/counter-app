import { useState } from "react";
import { Counter } from "./components";

import { CounterInfo } from "./models";

import "./App.css";

export default function App() {
  const [counterInfo, setCounterInfo] = useState<CounterInfo>([
    { amount: 0 },
    { amount: 0 },
    { amount: 0 },
  ]);

  function changeAmount(counterIndex: number) {
    return (newAmount: number) => {
      setCounterInfo(counterInfo => {
        const newCounterInfo = [...counterInfo];

        newCounterInfo[counterIndex].amount = newAmount;

        return newCounterInfo;
      });
    };
  }

  function deleteCounter(counterIndex: number) {
    return () => {
      setCounterInfo(counterInfo => [
        ...counterInfo.slice(0, counterIndex),
        ...counterInfo.slice(counterIndex + 1),
      ]);
    };
  }

  return (
    <div>
      {counterInfo.map((info, index) => (
        <Counter
          key={index}
          amount={info.amount}
          changeAmount={changeAmount(index)}
          deleteCounter={deleteCounter(index)}
        />
      ))}
    </div>
  );
}
