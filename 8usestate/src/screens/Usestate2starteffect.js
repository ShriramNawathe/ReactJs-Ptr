import React, { useEffect, useState } from 'react'

function Usestate2starteffect() {
    function handlesubmit(event) {
            event.preventDefault();
            console.log("Submit Clicked");
        }
        //useState email and password
        const [email, setEmail] = useState();
        const [password,setPassword]=useState();
        //useEffect
        const [age,setAge]=useState();
        // const [age,setAge]=useState(13);
        //A refer above 
        // setAge(13);//Too many re-renders
        //syntax
        //useEffect(()=>{},[])
        //A refer
        useEffect(()=>{
            setAge(13);
            console.log(age);
            //undefined bcz of [] empty dependency array [age]. it will give value in console
            //[age] console 13 printed
            //or A refer use then it will show 13 in console ie useState(13);
        },[])
    
        
        // console.log(email);
        // console.log(password);

  return (
    <div>
        <p>Usestate2starteffect</p>
        <form>
        <h1>{age}</h1>    
        <input type="email" placeholder='Enter' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder='Pass' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handlesubmit}>submit</button>
      </form>
      
    </div>
  )
}

export default Usestate2starteffect

