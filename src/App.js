import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollTop from "./components/scrollTop";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Place from "./components/pages/Place";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";
import Destinations from "./components/pages/Destinations";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Home />
        <Place />
        <Destinations />
        <Contact />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
