import React from "react";
import { AddProject, ProjectList } from "../molecules";

const Projets = () => {
  return (
    <div className="Projets">
      <h1>Mes projets</h1>
      <AddProject />
      <ProjectList />
    </div>
  );
};

export default Projets;
