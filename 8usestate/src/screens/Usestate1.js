import React, { useState } from "react";

function Usestate1() {

  function handleSubmit(event) {
    event.preventDefault();
    //once you click button react reloads page automatically, autoreload stop
    console.log("submit clicked");
  }
  //get exact values when we type in input email, setEmail updates and store in variable email
     const [email, setEmail] = useState();
  // const [password,setPassword]=useState();


console.log(email);
  return (
    <div>
      <p>Usestate1 Email react usestate and html value onChange</p>
      <p>............................................................</p>
      <br />
      <form>
        <input 
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}//understand via chatgpt
        />
        <br />
        {/* <input type="email" placeholder="Enter Password" value={email}/>  */} 
        {/* get exact values when we type in input email, setEmail updates and store in variable email */}
        <input type="email" placeholder="Enter Password" />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
       <p>.............................................................................................</p>
    </div>
  );
}

export default Usestate1;
