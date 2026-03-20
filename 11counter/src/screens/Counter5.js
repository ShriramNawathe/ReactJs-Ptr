import React, { useState } from "react";

function Counter5() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((c) => c + 1);
  };

  const dec = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
        Counter5 when zero Decrease disabled and && use
      <h1>Count: {count}</h1>

      {/* when zero Decrease disabled <button onClick={inc}>Increment</button> */}

      {/* Hide button when count is 10 increment */}
      {count < 10 && (
        <button onClick={inc}>Increment</button>
      )}
      <br/>
      {/* Hide button when count is 0 Decrement*/}
      {count > 0 && (
        <button onClick={dec}>Decrement</button>
      )}
    </div>
  );
}

export default Counter5;