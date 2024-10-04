import React from "react";
import ListRepoGitHub from "../molecules/ListRepoGitHub";
import { BgColor } from "../atoms/Containers";

const Github = () => {
  return (
    <BgColor>
      <ListRepoGitHub />
    </BgColor>
  );
};

export default Github;
