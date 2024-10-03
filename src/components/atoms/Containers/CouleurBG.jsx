import React from 'react';
import styled from 'styled-components';

const StyledCouleurBG = styled.div`
  background-color: ${({ color }) => color || '#FFF'};

`;

const CouleurBG = ({ color, children }) => {
  return <StyledCouleurBG color={color}>{children}</StyledCouleurBG>;
};

export default CouleurBG;