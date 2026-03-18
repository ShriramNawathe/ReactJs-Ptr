import React from 'react'

function Title1({name,last,age,gmail,contactNo}) {
  return (
    <div style={{background:'orange'}}>
        <p>Title1</p>
        <h1 style={ { color : 'red' , background:'black' } }>Name:{name}</h1>
        <h1 style={ { color : 'red' , background:'black' } }>Last:{last}</h1>
        <h1 style={ { color : 'red' , background:'black' } }>Age:{age}</h1>
        <h1 style={ { color : 'red' , background:'black' } }>Gamil:{gmail}</h1>
        <h1 style={ { color : 'red' , background:'black' } }>Contact:{contactNo}</h1>
    </div>
  )
}

export default Title1