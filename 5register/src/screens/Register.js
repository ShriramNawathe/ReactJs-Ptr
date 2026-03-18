import React from 'react'

function Register() {
    function sbt(sbtt) {
       sbtt.preventDefault();
       console.log("button cliked");
    }
      
  return (
    <div>Register
      <br/>
      <br/>
      <input type="email" placeholder="userName" />
      <br/>
      <button onClick={sbt}>Submit</button>
    </div>
  )
}

export default Register