import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./screens/About";
import Registor from "./screens/Registor";
import Userlist3 from "./screens/Userlist3";
import Userlist4 from "./screens/Userlist4";
import Navi from "./screens/Navi";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World App.js</div>
  },
  {
  path: "/about",
  element: <About/>
},

  {
    path: "/registor",
    element: <Registor/>
  },
  {
    path:"/user-list",
    element: <Userlist3/>
  },
  {
    path:"/user4",
    element:<Userlist4/>
  },
  {
    path:"/navi",
    element: <Navi/>
  }

  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;