import React from "react";

function Register2() {
  function sbtFun(sbtt) {
    sbtt.preventDefault();
    console.log("Conditonal Rendering if your clicking that means you match condition");
  }

  var age = 26;
  // var age = 10;// Your under age or Your email not matches
  var email = "s@g";
  // var email = "sss@g"; //Your under age or Your email not matches

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
        </div>
      )}
    </div>
  );
}

export default Register2;
