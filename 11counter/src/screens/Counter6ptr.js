import React, { useState } from 'react'

function Counter6ptr() {
    const[count,setCount]=useState(0);
    function incP(event) {
        event.preventDefault();
        setCount(count+1);
        console.log("Inc click");
    }
   const deC=()=>{
    setCount((c)=>c-1)
   }
  return (
    <div>counter6ptr
        <div>
            <h1>Count:{count}</h1>
            {/* <div><button onClick={incP}>Inc</button></div>
            <div><button onClick={deC}>Dec</button></div> */}

            {count<10 &&(
                <div>
                    <button onClick={incP}>Inc</button>
                </div>
            )}
            {count>-10 &&(
                <div>
                    <button onClick={deC}>Dec</button>
                </div>
            )}
           
    
        </div>

    </div>
  )
}

export default Counter6ptr