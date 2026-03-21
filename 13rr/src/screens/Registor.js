import React from 'react'
import { Link } from 'react-router-dom'

function Registor() {
  return (

    <div>
        <div>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='pass'/>
            <button>Submitform</button>
        </div>
        <hr/>
        <button>Take me to about page. not working</button>
        <br/>
        <br/>
        <Link to="/about">Take me to about page</Link>
        <hr/>
        <Link to="/user-list"><button>take me to userlist3.js</button></Link>
    </div>
  )
}

export default Registor