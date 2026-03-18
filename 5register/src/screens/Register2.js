import React from "react";

function Register2() {
  function sbtFun(sbtt) {
    sbtFun.preventDefault();
    console.log("Conditonal Rendering if your clicking that means you match condition");
  }



  var age = 26;
  var email = "s@g";

  return (
    <div>
      Register2conditional rendering
      <br />
      <br />
      {age >=18 && email==="s@g"? (
        <div>
          <input type="email"  placeholder="Enter Email"/>
          <br/>
          <br/>
          <button onClick={sbtFun}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>Your under age</h1>
          <h1>or Your email not matches</h1>
          console.log("condition not matching");
        </div>
      )}
    </div>
  );
}

export default Register2;
