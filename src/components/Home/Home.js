import React from "react";
import About from "../About/About";

import Courses from "../Courses/Courses";

import Footer from "../Footer/Footer";

import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
