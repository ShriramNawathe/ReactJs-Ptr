import React from 'react'
import '../screens/M.css'
function Multipleprops2({fname,age,email}) {
  return (
    <div>
        Multipleprops2
        <p>Single line use multiple props</p>
        <h1 style={{color:'red', background:'black'}}>Name:{fname} age:{age} email={email}</h1>
        <br/>
        <br/>
        <div className='css'>
        <p>Sepertaed line use multiple props</p>
            <h1 id='id'>Name:{fname}</h1>
            <h3 id='id'>Age:{age}</h3>
            <h3 id='id'>Email:{email}</h3>
        </div>
        <p>..................................................................................................................</p>
    </div>
  )
}

export default Multipleprops2
