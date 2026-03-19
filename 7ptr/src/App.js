import Basicprops1 from "./screens/Basicprops1";
import Multipleprops2 from '../src/screens/Multipleprops2'
import Userlist3 from "./screens/Userlist3";
import Userlist4 from "./screens/Userlist4";
import UserList5 from "./screens/UserList5";


function App() {
  return (
    <div>
      <Basicprops1 fname="Shriram" last="Nawathe"/>
      <br/>
      <Multipleprops2 fname={"Yashraj"} age={"24"} email={"yash@gmail.com"}/>
      <br/>
      <Userlist3/>
      <br/>
      <Userlist4/>
      <br/>
      <UserList5/>
    </div>
  );
}

export default App;
