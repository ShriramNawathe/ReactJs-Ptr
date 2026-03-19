
import React from 'react'
import Outerdata from '../Dataset/Outerdata'


function Userlist4() {
  return (
    <div>
        <p>Userlist4. getting Outerdata from other folder outer map in Userlist4</p>
        {/* map on Outerdata variable which contains data as object */}
        {Outerdata.map(({company,city})=>{
            return(
                <div style={{background:'orange'}}>
                    <h1>Company:{company}</h1>
                    <h1>city:{city}</h1>
                </div>
            )
        })}
        <p>..................................................................</p>
    </div>
  )
}

export default Userlist4
