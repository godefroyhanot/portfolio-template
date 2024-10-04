import React from "react";
import { useDispatch } from "react-redux";
import { removeProject } from "../../redux/actions/projectActions";
import { Heading, Paragraph } from "../atoms/Typo";
import Button from "../atoms/Buttons/Button";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProject(project.id));
  };

  return (
    <div className="project-card">
      <Heading level={2}>{project.title}</Heading>
      <Paragraph>{project.description}</Paragraph>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "200px", height: "auto" }}
        />
      )}
      <Button label="Supprimer" onClick={handleRemove}></Button>
    </div>
  );
};

export default ProjectCard;
