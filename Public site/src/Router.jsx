import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./views/HomePage";
import Cuisines from "./views/Cuisines";
import DetailCuisine from "./views/DetailCuisine";
import ByCategories from "./views/ByCategories";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cuisines",
        element: <Cuisines />,
      },
      {
        path: "/cuisines/:id",
        element: <DetailCuisine />,
      },
      {
        path: "/categories",
        element: <ByCategories />,
      },
    ],
  },
]);
