import React, { useState } from 'react'

function Usestate2() {
    function handlesubmit(event) {
        event.preventDefault();
        console.log("Submit Clicked");
    }
    //useState email and password
    const [email, setEmail] = useState();
    const [password,setPassword]=useState();

    console.log(email);
    console.log(password);
  return (
    <div>
      <p>Usestate2. email and password</p>
      <form>
        <input type="email" placeholder='Enter' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder='Pass' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handlesubmit}>submit</button>
      </form>
    </div>
  )
}

export default Usestate2
