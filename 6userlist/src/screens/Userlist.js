import React from 'react'

function Userlist() {
    let Data=[
        {
            fname:"Shri",
            age:26
        },
        {
            fname:"Om",
            age:24
        },
        {
            fname:"Yash",
            age:25
        }
    ]
  return (
    <div>
        Userlist
        <br/>
        {Data.map(({fname,age})=>{
            return(
                <div>
                    <h1>Fname:{fname}</h1>
                    <h1>Age:{age}</h1>
                    <p>.........................................</p>
                </div>
            )
        })}
    </div>
  )
}
export default Userlist