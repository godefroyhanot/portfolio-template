import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/actions/projectActions";

const AddProject = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title,
      description,
      image,
    };
    dispatch(addProject(newProject));
    setTitle("");
    setDescription("");
    setImage(null);
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
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
      />
      <button onClick={handleAddProject}>Ajouter un projet</button>
    </div>
  );
};

export default AddProject;
