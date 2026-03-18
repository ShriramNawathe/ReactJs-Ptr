import React from 'react'
import T from './T.css'

function Title(props) {
  return (
    <div class="div">
        <p>Title</p>
        <h1 id="id1">Name:{props.name}</h1>
        <h1 id="id1">Last:{props.last}</h1>
        <h1 id="id1">Age:{props.age}</h1>
        <h1 id="id1">Gmail:{props.gmail}</h1>
        <h1 id="id1">Contact No:{props.contactNo}</h1>
    </div>
  )
}

export default Title