import React from "react";
import styled from "styled-components";
import { Heading, Hyperlien, Paragraph } from "../Typo";

const ProjectWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const CardRepoGitHub = ({ name, description, url }) => {
  return (
    <ProjectWrapper>
      <Heading level={3}>{name}</Heading>
      <Paragraph>{description || "Aucune description"}</Paragraph>
      <Hyperlien href={url} target="_blank">
        Voir sur GitHub
      </Hyperlien>
    </ProjectWrapper>
  );
};

export default CardRepoGitHub;
