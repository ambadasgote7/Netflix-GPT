import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";

/* Root layout */
const AppLayout = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,   // ✅ ONLY HERE
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "browse",
        element: <Browse />
      }
    ]
  }
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
