import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputChange] = useState("");
  return (
    <div>
      <h3 data-testid="cnt">{counter}</h3>
      <button data-testid="btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <hr />
      <input
        data-testid="input"
        type="text"
        defaultValue="10"
        onChange={(e) => {
          setInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Counter;
