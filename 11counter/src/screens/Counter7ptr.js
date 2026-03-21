import React, { useState } from 'react'

function Counter7ptr() {
    const [count,setCount]=useState(0);
    const Inc=()=>{
        // setCount(count+1);
        setCount(((c)=>c+1));
    }
    const Dec=()=>{
        // setCount(count-1);
        setCount((c)=>c-1);
    }
  return (
    <div>
        Counter7ptr
        <div>
            <h1>Count:{count}</h1>

            {count<10 && (
                <div><button onClick={Inc}>Inc</button></div>
            )}
            {count>-10 &&(
                <div><button onClick={Dec}>Dec</button></div>
            )}
        </div>  
    </div>
  )
}

export default Counter7ptr