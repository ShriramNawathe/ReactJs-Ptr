import React from 'react'
import Outerdata3 from '../Dataset/Outerdata3'
import Usercard11 from '../components/Usercard11'

function Userlist55() {
  return (
    <div>
      <p>Userlist55</p>
      {Outerdata3.map(({company,city})=>{
        return(
           <Usercard11 company={company} city={city}/>
        )
      })}
    </div>
  )
}

export default Userlist55
