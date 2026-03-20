import React, { useState } from 'react'

function Counter4() {
  const [count, setCount] = useState(10);

  const inc = () => {
    setCount((c) => c + 1);
  };

  const dec = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
        0-10 range bound
      <h1>Count: {count}</h1>
      <button onClick={dec} disabled={count === 0}>Decrease</button>
      <button onClick={inc} disabled={count === 10}>Increase</button>
    </div>
  );
}

export default Counter4;