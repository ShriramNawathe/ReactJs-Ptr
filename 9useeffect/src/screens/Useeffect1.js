import React, { useEffect, useState } from "react";

function Useeffect1() {
  function handlebtn(event) {
    event.preventDefault();
    console.log("Submit Clicked");
  }

  //useState
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email);
  console.log(password);

  //useeffect
  const [age,setAge]=useState();
  // setAge(13);//Too many re-renders
  // useEffect(()=>{},[])
  useEffect(()=>{
    setAge(13);
    console.log("Age:",age);//},[age]) then it will print in console
  // },[])
  },[age])

  return (
    <div>
      <p>Useeffect1</p>
      <p>
        .................................................................................
      </p>
      <form>
        <h1>{age}</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={function name(params) {
            setEmail(params.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handlebtn}>Submit</button>
      </form>
    </div>
  );
}

export default Useeffect1;
