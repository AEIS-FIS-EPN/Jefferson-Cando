import React from "react";
import Home from "./Components/HomePage/Home";
import ASLProject from "./Components/MyProjectsPage/ASLproject";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/mis_proyectos/ASL_project" element={<ASLProject />} />
    </Routes>
  );
}

export default App;
