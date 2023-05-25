import React from "react";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
