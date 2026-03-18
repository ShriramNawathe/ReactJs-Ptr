import React from 'react'
import Titlename from '../components/Titlename'
import Pan from '../components/Pan'
import Pan2 from '../components/Pan2'
import Pan3 from '../components/Pan3'
// import Unorderedlist from '../components/Unorderedlist'


function About() {
  return (
    //myapp
    // <div>
    //   <h1>This is about page for screens and exported from here and importated in app. js</h1>
    //   <Titlename />
    // </div>
    //2components
    // <div>
    //   <Titlename />
    //   <Unorderedlist />
    // </div>
    //3props
    //parent component
    <div>
      <Titlename name="props" />
      <Titlename name="props is used to pass data from one component to another component" />
      <Titlename name="props is used to pass data from parent component to child component" />
      <br/>
      <p>new prop....................................................................................................................</p>
      <Pan name="Shriram" age="25" gmail="s@g" />
      <p>new prop....................................................................................................................</p>
      <Pan2 name="Yash"/>
      <Pan2 age="25"/>
      <Pan2 gmail="y@g"/>
      <p>new prop....................................................................................................................</p>
      <Pan3 name="om" age="26" gmail="o@g"/>

    </div>
  )
}

export default About


//title and unorderedList importing from folder components