import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
