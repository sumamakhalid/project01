import React from "react";
import ReactDom from "react-dom"
import Header from "./Header";
import './css/style.css'
import ProfessionalSummary from "./ProfessionalSummary";
import Experience from "./Experience";
import experiences from "./js/data.js"
import Footer from "./Footer";
import Contact from "./Contact.jsx";

ReactDom.reander(
    <>
    <Header/>
    <ProfessionalSummary/>
    <Experience experience={experiences}></Experience>
    <Contact/>
      <Footer/>
    </>,
    document.getElementById("root")
);