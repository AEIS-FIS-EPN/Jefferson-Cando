import React from "react";
import Home from "./Components/HomePage/Home";
import ASLProject from "./Components/MyProjectsPage/ASLproject/ASLproject";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyProjectsPage from "./Components/MyProjectsPage/MyProjects";
import ContactPage from "./Components/ContacPage/ContactPage";
import "./App.css"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <div className="col-md-12 d-flex justify-content-end navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjectsPage />} />
        <Route path="/projects/ASL_project" element={<ASLProject />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
