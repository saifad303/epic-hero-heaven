import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import App from "./pages/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AllToys from "./pages/AllToys.jsx";
import ToyDetail from "./pages/ToyDetail.jsx";
import AddToy from "./pages/AddToy.jsx";
import MyToys from "./pages/MyToys.jsx";
import Blogs from "./pages/Blogs.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/toys", element: <AllToys></AllToys> },
      { path: "/toy/:id", element: <ToyDetail></ToyDetail> },
      { path: "/add-toy", element: <AddToy></AddToy> },
      { path: "/my-toys", element: <MyToys></MyToys> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/sign-in", element: <SignIn></SignIn> },
      { path: "/sign-up", element: <SignUp></SignUp> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
