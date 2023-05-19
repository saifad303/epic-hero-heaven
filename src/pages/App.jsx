import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const { id } = useParams();
  let flag = 0;

  if (
    location.pathname === "/" ||
    location.pathname === "/toys" ||
    location.pathname === `/toy/${id}` ||
    location.pathname === "/add-toy" ||
    location.pathname === "/my-toys" ||
    location.pathname === "/blogs" ||
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up"
  ) {
    flag = 1;
  }

  return (
    <div>
      {flag && <Header></Header>}
      <Outlet></Outlet>
      {flag && <Footer></Footer>}
    </div>
  );
};

export default App;
