import React from 'react'

function Userlist3() {
  let Data=[
    {
      company:"Rashi",
      city:'Pune'
    },
    {
      company:"Gauri",
      city:'nanded'
    }
  ];
  return (
    <div>
      <p>Userlist3. Data and Data map in single file ie Userlist3.js</p>
      <div>
        {Data.map(({company,city})=>{
          //map always return new arraay
          return(
            <div style={{background:"pink"}}>
                <h1>Company:{company}</h1>
                <h1>City:{city}</h1>
            </div>
          )
        })}
      </div>
      <p>...................................................................................</p>
    </div>
  )
}

export default Userlist3
