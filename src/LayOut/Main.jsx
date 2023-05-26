import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
  const locations = useLocation()
  console.log(locations)
  const noHeaderFooter = locations.pathname.includes('login')||locations.pathname.includes('signup')
  return (
    <div>
     {noHeaderFooter|| <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter||<Footer></Footer>}
    </div>
  );
};

export default Main;
