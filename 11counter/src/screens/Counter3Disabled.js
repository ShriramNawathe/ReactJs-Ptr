import React, { useState } from 'react'

function Counter3Disabled() {
   const[count,setCount]=useState(5);
   function inc(params) {
    setCount(count+1);
   }
   const dec=()=>{
    setCount((c)=>c-1);
   }
  return (
    <div>Counter3Disabled
         {count > 0 ? (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={dec}>Decrease</button>
          <button onClick={inc} >Increase</button>
        </div>
      ) : (
         <div>
           <h1>Count: {count}</h1>
           <button onClick={dec} disabled>Decrease</button>
           <button onClick={inc} >Increase</button>
        </div>
      )}
    </div>
  )
}

export default Counter3Disabled