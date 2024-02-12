import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout(){
  return(
  
    <div>
    <SideNavbar/>
    <Outlet/>
    </div>
    
  
  )
}