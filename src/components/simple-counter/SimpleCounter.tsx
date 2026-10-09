import { useState } from "react";
import "./SimpleCounter.css";

const SimpleCounter = (props: { title?: string; step?: number }) => {
  const [count, setcount] = useState(0);
  const step = props.step ?? 1;

  const handleminus = () => {
    setcount((count) => count - step);
  };
  const handlemore = () => {
    setcount((count) => count + step);
  };
  const tare = () => {
    setcount(0);
  };

  return (
    <div>
      <h2>{props.title ? props.title : "Contador Simples"}</h2>
      <p>Step: {step}</p>
      <p>Contador: {count}</p>
      <button onClick={handleminus}>-</button>
      <button onClick={handlemore}>+</button>
      <button onClick={tare}>Tare</button>
    </div>
  );
};

export default SimpleCounter;
