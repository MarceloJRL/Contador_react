//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { useState1 } from "react";
//import App from "./App";

const App = () => {
  const [number, setNumber] = useState(0);
  const num1 = () => {
    setNumber(number + 1);
  };

  const [number1, setNumber1] = useState(0);
  const num2 = () => {
    setNumber1(number1 + 1);
  };

  console.log(number1);
  console.log(number);
  return (
    <div>
      <h1> Doe, Jane</h1>
      <p>
        Age: <span>{number}</span>{" "}
      </p>
      <p>hair Color: Black</p>
      <br />
      <button onClick={num1}>Birthday button forn Jane Doe</button>
      <br /> <br /> <br />
      <h1> Smith, John</h1>
      <p>
        Age: <span>{number1}</span>{" "}
      </p>
      <p>hair Color: Brown</p>
      <br />
      <button onClick={num2}>Birthday button forn Jane Doe</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
