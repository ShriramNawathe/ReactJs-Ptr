import React, { useEffect, useState } from 'react'

function Useeffect() {
    function increaseAge(params) {
        params.preventDefault();
        setAge(age+1);//age icreasing
        console.log("btn");
    }
    
    // const [age,setAge]=useState();
    // useEffect(()=>{
    //         setAge(13);// or method above
    //         console.log("Age:",age);//
    // //  },[])//[] empty means age undefined //when keep empty bowser age increasing but console undefined
    // },[age])//it updates age only once and store in age bcoz os setAge(13) use her useState(13)
        
        
        // age icr in both browser and console
        const [age,setAge]=useState(13);//ie setAge(13) best method to define age as variable in useEffect
        useEffect(()=>{
            console.log("Age afte btn clicked:",age);//
        // },[])//age icersing but not printing on console
        },[age])//age icersing and printing on console

  return (
    <div>
      <h1>Age :{age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default Useeffect
