import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MyProjectsPage.css";
import gsap from "gsap";

const MyProjectsPage = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.from(projectRef.current, {
      x: "100%",
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <Link to="/projects/ASL_project" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="project-container" ref={projectRef}>
        <div className="project-info">
          <div className="project-image">
            <img
              src="src/Components/HomePage/assets/img1_project.jpeg"
              alt="Imagen del proyecto"
            />
          </div>
          <div className="project-description">
            <h2>Detección de lenguaje de señas.</h2>
            <p>
              ¡Descubre nuestro proyecto de detección del lenguaje de señas! Con
              un modelo avanzado de aprendizaje profundo, permite cargar imágenes
              o realizar capturas en vivo para traducir el lenguaje de señas en
              tiempo real. Una interfaz intuitiva garantiza una experiencia fluida
              y accesible para todos, derribando barreras lingüísticas y
              facilitando la comunicación inclusiva.¡Descubre nuestro proyecto de
              detección del lenguaje de señas! Con un modelo avanzado de
              aprendizaje profundo, permite cargar imágenes o realizar capturas en
              vivo para traducir el lenguaje de señas en tiempo real. Una interfaz
              intuitiva garantiza una experiencia fluida y accesible para todos,
              derribando barreras lingüísticas y facilitando la comunicación
              inclusiva.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyProjectsPage;
