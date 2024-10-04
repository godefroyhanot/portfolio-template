import React from "react";
import { useDispatch } from "react-redux";
import { removeProject } from "../../redux/actions/projectActions";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProject(project.id));
  };

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={handleRemove}>Supprimer</button>
    </div>
  );
};

export default ProjectCard;
