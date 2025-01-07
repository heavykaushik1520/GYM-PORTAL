import React from "react";
import { Outlet } from "react-router-dom";
import PublicSite from "./component/publicSite/PublicSite";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      {/* Navbar and other common components */}
      {/* <PublicSite /> */}
      <Navbar/>
      {/* <PublicSite/> */}
      
      {/* Renders child routes */}
      <Outlet />
      {/* <PublicSite/> */}
    </>

  );
}

export default App;
