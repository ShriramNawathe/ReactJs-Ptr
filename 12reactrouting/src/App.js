import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../src/screens/Home'
import Aboutus from '../src/screens/Aboutus'
import Links from '../src/screens/Links'
import Registor from '../src/screens/Register'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Aboutus",
    element: <Aboutus/>
  },
  {
    path: "/Links",
    element: <Links/>
  },
  {
    path: "/Registor",
    element: <Registor/>
  },
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />,
    </div>
  );
}

export default App;
