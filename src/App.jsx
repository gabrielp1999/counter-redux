import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  increment,
  decrement,
  asyncDecrement,
  asyncIncrement,
} from "./store/Stock.store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.stock.counter);
  const [addNumber, setAddNumber] = useState(1);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment(addNumber))}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement(addNumber))}>
          Decrement
        </button>

        <button onClick={() => dispatch(asyncIncrement(addNumber))}>
          Increment Async
        </button>

        <button onClick={() => dispatch(asyncDecrement(addNumber))}>
          Decrement Async
        </button>
      </div>
      <input
        placeholder="Digite um Número"
        type="number"
        value={addNumber}
        onChange={(e) => setAddNumber(Number(e.target.value))}
      />
    </div>
  );
}

export default App;
