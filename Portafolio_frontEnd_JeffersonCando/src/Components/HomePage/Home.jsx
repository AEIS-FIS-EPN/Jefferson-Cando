import React from "react";
import "./Home.css"; 
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 container text-center">
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
              ¡Hola! Soy desarrollador back end y estudiante de ingeniería en
              computación en la Universidad Escuela Politécnica Nacional.
              Especializado en Python, con experiencia en integración de
              modelos de machine learning y uso de herramientas como Git y
              Docker. Apasionado por la IA y el aprendizaje automático, siempre
              buscando nuevas oportunidades para crecer y contribuir con mi
              pasión y conocimiento.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="projects-column float-end">
            <h2>Mis proyectos</h2>
            {/* Aquí irán tus proyectos */}
            {/* Puedes crear un componente separado para esta columna si lo prefieres */}
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
