import React from 'react'
// import Data from '../Dataset/Data'

function Usercard({fname,age,email}) {
  return (
    <div>
        <h1>Name:{fname}</h1>
        <h1>Age:{age}</h1>
        <h1>Email:{email}</h1>
    </div>
  )
}

export default Usercard