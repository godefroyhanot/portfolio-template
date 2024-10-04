import React from "react";
import { AddProject, ProjectList } from "../molecules";
import { Heading, Paragraph, Hyperlien } from "../atoms/Typo";
import { BgColor } from "../atoms/Containers";

const Projets = () => {
  return (
    <BgColor className="Projets">
      <Heading>Mes projets</Heading>
      <AddProject />
      <ProjectList />
    </BgColor>
  );
};

export default Projets;
