import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9em;
`;

const ProjectLink = styled.a`
  color: #4CAF50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ name, description, url }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectDescription>{description || 'Aucune description'}</ProjectDescription>
      <ProjectLink href={url} target="_blank">
        Voir sur GitHub
      </ProjectLink>
    </ProjectWrapper>
  );
};

export default ProjectCard;
