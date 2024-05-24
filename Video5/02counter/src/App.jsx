import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  // let count = 5;
  const handleIncreaseCount = () => {
    console.log("countIncreased", count);
    // count = count + 1;
    setCount(count + 1);
    if (count >= 20) {
      setCount(20);
    }
  };
  const handleDecreaseCount = () => {
    console.log("count decreased", count);
    // count = count - 1;
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };
  console.log(count);
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button
        id="increase_button"
        className="counter_button"
        onClick={handleIncreaseCount}
      >
        increase count ⬆️
      </button>
      <button
        id="decrease_button"
        className="counter_button"
        onClick={handleDecreaseCount}
      >
        decrease count ⬇️
      </button>
    </>
  );
}

export default App;
