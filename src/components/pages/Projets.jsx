import React from "react";
import { Heading, Paragraph, Hyperlien } from "../atoms/Typo";

import ListRepoGitHub from "../molecules/ListRepoGitHub";
import { BgColor } from "../atoms/Containers";

const Projets = () => {
  return (
    <BgColor>
      <ListRepoGitHub />
    </BgColor>
  );
};

export default Projets;
