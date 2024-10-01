import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ color }) => color || '#008CBA'};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: ${({ hoverColor }) => hoverColor || '#005f73'}; 
  }
`;

const Hyperlien = ({ href, children, color, hoverColor, target }) => {
  return (
    <StyledLink href={href} color={color} hoverColor={hoverColor} target={target}>
      {children}
    </StyledLink>
  );
};

export default Hyperlien;