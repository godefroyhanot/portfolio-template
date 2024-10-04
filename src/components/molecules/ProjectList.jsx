import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>Aucun projet disponible</p>
      )}
    </div>
  );
};

export default ProjectList;
