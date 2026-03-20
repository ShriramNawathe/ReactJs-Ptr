import React, { useEffect, useState } from "react";
import wall from "./wall.jpg";
import "./Useeffect3CR.css";
function Useeffect3CR() {
  function IncreaseAge(event) {
    event.preventDefault();
    setAge(age + 1);
    console.log("btn clicking age++");
  }

  const [age, setAge] = useState(13);
  useEffect(() => {
    console.log("age storing using Useeffect :", age);
  }, [age]);

  return (
    <div>
      <p>
        ....................................................................
      </p>
      <p>Useeffect3 Conditional Rendering ptr</p>
      {/* {?():()} */}
      <h1>Default age:{age}</h1>
      {/* CR */}
      {age >= 18 ? (
        <div>
          <img src={wall} alt="HanumanJi" />
        </div>
      ) : (
        <div>
          <h1>Conditional Rendering your under 18. when your age at 18 you will see components</h1>
        </div>
      )}
      {/*  */}
      <br />
      <button onClick={IncreaseAge}>IncreaseAge</button>
    </div>
  );
}

export default Useeffect3CR;
