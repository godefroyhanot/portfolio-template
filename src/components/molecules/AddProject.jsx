import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/actions/projectActions";

const AddProject = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(), // Simple ID unique
      title,
      description,
    };
    dispatch(addProject(newProject));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Titre du projet"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description du projet"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddProject}>Ajouter un projet</button>
    </div>
  );
};

export default AddProject;
