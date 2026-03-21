import React, { useMemo, useState } from 'react'

const expensiveCalculation=(num)=>{
  console.log("Calculating...........");
  for (let i=0;i<1000000000;i++){
    num=num+1;
  }
  return num;

  // api call and in longer complicate calculation takes time . so other components also takes time to complte for that un wanted delay removal over other components we use uesMemo
}


function Usememo() {
  const[todos,setTodos]=useState([]);
  const addTodos=()=>{
    // setTodos((t)=>t+1);
    // setTodos((t)=>[...t,"Adding todos after button click into the useState([]) array. Useing spread operator///// this is string"]);
   setTodos((t)=>[...t,"Todo TTasks"])
  }

  const[count,setCount]=useState(0);
  const Inc=()=>{
    setCount(count+1);
  }

  // it takes delay through out code 2-3sec
  // const calculation=expensiveCalculation(count);
  //after this line throughout code all code takes 2-3 sec delay both adding todo and in counter as well
  const calculation=useMemo(()=>expensiveCalculation(count),[count])
  // memoization - we are storing it as cache in calculation variable
  return (
    <div>
        <p>Usememo</p>
        <p>....................................................................1</p>
        <div>
          <div>
            <h1>Todo list</h1>
            {/* {todos} //here what happen is todo after 1 todo after another todo like all todos in same line */}
            {/* adding todo in seperate elements */}
            {todos.map((todo,index)=>{
              return (
                <p key={index}>{todo}</p>
              )
            })}
            <br/>
            <button onClick={addTodos}>AddTodos</button>
          </div>
        </div>
        <hr/>
        <div>
          <h1>Count:{count}</h1>
          <br/>
          <button onClick={Inc}>+</button>
          <br/>
          {/* till here code run smooth afte this takes delay for 2-3sec */}
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
    </div>
  )
}

export default Usememo