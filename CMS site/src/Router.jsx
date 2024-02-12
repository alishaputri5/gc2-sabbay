import { redirect, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./views/LoginPage";
import CMSHomePage from "./views/CMSHomePage";
import RegisterPage from "./views/RegisterPage";
import AddCuisine from "./views/AddCuisine";
import EditCuisinePage from "./views/EditCuisinePage";
import CategoryList from "./views/CategoryPage";
import UploadImage from "./views/UploadImage";
import AddCategoryPage from "./views/AddCategoryPage";

const url = "https://phase2-aio.vercel.app"

export const router = createBrowserRouter([
  {
    loader: () => {
      const access_token = localStorage.getItem("access_token")
      if(access_token){
        throw redirect("/")
      }
      return null;
    },
    path: "/login",
    element: <LoginPage url={url}/>
  },
  {
    element: <RootLayout/>,
    loader: () => {
      const access_token = localStorage.access_token
      if(access_token){
        return null;
      }
      throw redirect("/login")
    },
    children: [
      {
        path: "/",
        element: <CMSHomePage url={url} />,
      },
      {
        path: "/addCuisine",
        element: <AddCuisine url={url}/>
      },
      {
        path: "/edit/:id",
        element: <EditCuisinePage url={url}/>
      },
      {
        path: "/category",
        element: <CategoryList url={url}/>
      },
      {
        path: "/register",
        element: <RegisterPage url={url}/>
      },
      {
        path: "/upload/:id",
        element: <UploadImage url={url}/>
      },
      {
        path: "/addCategory",
        element: <AddCategoryPage url={url}/>
      }
    
    ]
  }
])





