import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${({ level }) => (level === 1 ? '2.5rem' : level === 2 ? '2rem' : '1.5rem')};
  color: ${({ color }) => color || '#333'};
  margin-bottom: 1rem;
`;

const Heading = ({ level = 1, children, color }) => {
  const Tag = `h${level}`; 
  return <StyledHeading as={Tag} level={level} color={color}>{children}</StyledHeading>;
};

export default Heading;