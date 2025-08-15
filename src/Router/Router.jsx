import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "@/Pages/Home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="text-3xl text-center my-10">404</h1>,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
