import React, { useState, useMemo } from "react";

function Usememo1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo: runs only when count changes
  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {double}</h3>

      <button onClick={() => setCount(count + 1)}>+</button>

      <hr />

      <input
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Usememo1;