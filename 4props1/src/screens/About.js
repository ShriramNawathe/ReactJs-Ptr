import React from "react";
import Title from "../components/Title";
import Title1 from "../components/Title1";

function About() {
  return (
    <div>
      <Title
        name="Shriram"
        last="Nawathe"
        age="26"
        gmail="s@g"
        contactNo="7558778116"
      />
      <p>///////////////////////////////////////////////////////////////////////////////////////////////////////</p>
      <Title1
        name="Yash"
        last="Dahake"
        age="24"
        gmail="Y@g"
        contactNo="9767989559"
        />
    <p>///////////////////////////////////////////////////////////////////////////////////////////////////////</p>
    <Title1 
         name={"Om"} 
         last={"Mahewar"} 
         age={"24"} 
         gmail={"O@g"} 
         contactNo={4545}/>
    <p>///////////////////////////////////////////////////////////////////////////////////////////////////////</p>
    </div>
  );
}

export default About; 
