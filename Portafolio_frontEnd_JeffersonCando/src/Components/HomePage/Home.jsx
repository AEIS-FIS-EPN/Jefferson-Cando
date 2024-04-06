import React from "react";
import "./Home.css";
import Projects from "./ProjectsColums";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="row">
          <div className="col-md-6">
            <div className="profile-picture-container">
              <img
                src="src/Components/HomePage/assets/Sin título.jpeg"
                alt="Mi Foto"
                className="profile-picture"
              />
            </div>
            <div className="profile-summary">
              <h1>Jefferson Cando</h1>
              <p className="description-container">
                Soy desarrollador backend y estudiante de ingeniería en
                computación. Especializado en Python, con experiencia en machine
                learning y herramientas como Git y Docker. Apasionado por la IA
                y el aprendizaje automático.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects-column float-end">
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2>Mis proyectos</h2>
              </Link>
              <Projects />
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
