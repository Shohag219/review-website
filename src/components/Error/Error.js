import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-bg">
      
      <MenuBar></MenuBar>
      <h1 className="text-danger mt-5">Page Not Found</h1>
      <img src="http://skilify.theuxuidesigner.com/images/webp/page404.webp" alt="" />
      <Footer></Footer>
    </div>
  );
};

export default Error;
