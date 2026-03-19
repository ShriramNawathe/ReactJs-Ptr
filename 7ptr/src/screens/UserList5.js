import React from 'react'
import Outerdata2 from '../Dataset/Outerdata2'
import Usercard1 from '../components/Usercard1'

function UserList5() {
  return (
    <div>
        <p>UserList5. Outerdata2 for data and Usercard.js for props</p>
        {Outerdata2.map(({company,city})=>{
            return(
                //making below as prop in usercard
                // <div style={{background:'grey'}}>
                //     <h1>Company:{copany}</h1>
                //     <h1>City:{city}</h1>
                // </div>

                //usercard props
                <div style={{background:'grey'}}>
                    <Usercard1 company={company} city={city}/>
                </div>
            )
        })}
      <p>.............................................................................................</p>
    </div>
  )
}

export default UserList5
