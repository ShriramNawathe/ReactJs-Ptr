import React, { useEffect, useState } from "react";

function Counter2decreas() {
  const [count, setCount] = useState();
//   const [count, setCount] = useState(0);

  // function dec(params) {
  //     setCount(count-1)
  // }

  // useEffect(()=>{setCount(0)},[count])//not
  useEffect(() => {
    setCount(10);
  }, []);

  const dec = () => {
    // setCount(count-1);
    setCount((c) => c - 1);
  };

  return (
    <div>
      Counter2decreas
     
      <div>
            <h1>Count--: {count}</h1>
            <button onClick={dec}>Decrease</button>
        </div>
    </div>
  );
}

export default Counter2decreas;
