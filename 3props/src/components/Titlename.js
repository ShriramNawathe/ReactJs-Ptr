import React from 'react'


function Titlename(props) {
  return (
    //2components
    // <div>
    //   <h1>component Titlename is imported in screens about js</h1>
    // </div>
    //3props
    //child component
    <div>
      <h1 style={ { color: 'red'}}> {props.name}</h1>
    </div>
  )
} 
 
export default Titlename