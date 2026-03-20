import React, { useEffect, useState } from 'react'

function Useeffect2main() {
  function sbtForm(event) {
    event.preventDefault();
    console.log("form Sbt clicked");
  }
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  // console.log(email);
  // console.log(password);


  const[age,setAge]=useState(13);//default age is 13
  function increaseAge(params) {
    params.preventDefault();
    setAge(age+1);
  }
  useEffect(()=>{
    console.log("after increaseAge clicked age++ :",age);
  },[age])
  return (
    <div>
        <p>..............................................................................</p>
        <p>Useeffect2main. default age is 13 increaseAge then only use form via conditional rendeering</p>
        <p>useEffect conditional rendering when default age 13 is increased to 18</p>
        {/* {?():else()}; */}
        {/* conditional rendeering */}
        <form>
          {age>=18?(<div>
            <h1>Default age:{age}</h1>
            <br/>
            <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" placeholder='pass' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button onClick={sbtForm}>Submit Form</button>
          </div>):(<h1>Your under age and cannot access form</h1>)}
        </form>
        <br/>
        <br/>
        <button onClick={increaseAge}>increaseAge</button>
      
    </div>
  )
}

export default Useeffect2main
