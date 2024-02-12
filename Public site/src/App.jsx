import { router } from "./Router";
import {RouterProvider} from "react-router-dom"
// import Navbar from "./components/Navbar";
// import Cuisines from "./views/Cuisines";
// import HomePage from "./views/HomePage";

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
