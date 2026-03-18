import React from 'react'
import Titlename from '../components/Titlename'
import Unorderedlist from '../components/Unorderedlist'

function About() {
  return (
    // <div>
    //   <h1>This is about page for screens and exported from here and importated in app. js</h1>
    //   <Titlename />
    // </div>
    <div>
      <Titlename />
      <Unorderedlist />
    </div>
  )
}

export default About


//title and unorderedList importing from folder components