import React from 'react';
import styled from 'styled-components';

const StyledCouleurBG = styled.body`
background-color : ${({ color }) => color || '#FFF'};
`;

const CouleurBG = ({ color }) => {
  return <StyledCouleurBG color={color} />;
};

export default CouleurBG;