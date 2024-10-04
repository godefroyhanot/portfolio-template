import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeProject,
  updateProject,
} from "../../redux/actions/projectActions";
import { BgColor } from "../atoms/Containers";
import Button from "../atoms/Buttons/Button";
import { Heading, Paragraph } from "../atoms/Typo";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [image, setImage] = useState(project.image);

  const handleRemove = () => {
    dispatch(removeProject(project.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedProject = {
      id: project.id,
      title,
      description,
      image,
    };
    dispatch(updateProject(updatedProject));
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Convertir en Base64
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <BgColor className="project-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={image}
              alt={title}
              style={{ width: "200px", height: "auto" }}
            />
          )}
          <Button label="Save Projet" onClick={handleSave}></Button>
        </>
      ) : (
        <>
          <Heading level={2}>{project.title}</Heading>
          <Paragraph>{project.description}</Paragraph>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "200px", height: "auto" }}
            />
          )}{" "}
          <div>
            <Button label="Edit Projet" onClick={handleEdit}></Button>
          </div>
        </>
      )}
      <Button label="Delete Projet" onClick={handleRemove}></Button>
    </BgColor>
  );
};

export default ProjectCard;
