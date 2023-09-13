import React from "react";
// import Header from "../component/header";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Navbar from "../component/Navbar/Navbar";

const BaseLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
