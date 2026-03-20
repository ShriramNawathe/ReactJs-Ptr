import React, { useState } from 'react'

function Counter1increase() {
    const [count,setCount]=useState(0);
    console.log(count);//0

    // function increaseValue(params) {
    //     params.preventDefault();
    //     setCount(count+1);
    //     console.log("btn");
    // }
    //no need to add auto reload off
    const increaseValue=()=>{
        // setCount((c)=>(c+1));
        setCount(count+1);
       
    }

  return (
    <div>Counter1increase
        <div>
            <h1>Count++:{count}</h1>
            <button onClick={increaseValue}>Increase</button>
        </div>
    </div>
  )
}

export default Counter1increase