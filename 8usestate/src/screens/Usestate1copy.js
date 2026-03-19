import React, { useState } from "react";

function Usestate1copy() {
    function handleSubmit(event) {
       event.preventDefault();
        console.log("Submit");
    }

    const [email, setEmail] = useState();
    console.log(email);
  return (
    <div>
      <p>Usestate1copy. email same value in password</p>
      <form>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="email" placeholder="Password" value={email}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>...................................................................................................</p>
    </div>
  );
}

export default Usestate1copy;
