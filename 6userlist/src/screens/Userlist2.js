import React from 'react'
import Usercard from '../components/Usercard'
import Data from "../Dataset/Data";

function Userlist2() {
  
  return (
    <div>Userlist2
        {Data.map(({fname,age,email})=>{
            return(
               <div>
                 <Usercard fname={fname} age={age} email={email}/>
                <p>------------------------------</p>
               </div>
              )
        })}
    </div>
  )
}

export default Userlist2