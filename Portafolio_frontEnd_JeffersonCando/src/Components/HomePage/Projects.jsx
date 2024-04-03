import React from 'react';
import { Link } from 'react-router-dom';
import "./Projects.css"

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-box">
        <Link to="/mis_proyectos/ASL_project">
          <img src="src/Components/HomePage/assets/img1_project.jpeg" alt="Proyecto 1" className="project-image" />
        </Link>
        <div className="project-description">
          <p>
            El proyecto se trata de un modelo que hace detección de ASL, es decir Alphabet Signal Language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
