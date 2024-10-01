import React from 'react';
import styled from 'styled-components';

const StyledWidget = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: ${({ color }) => color || '#333'};

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#4CAF50'};
  }
`;

const Widget = ({ icon, onClick, color, hoverColor }) => {
  return (
    <StyledWidget onClick={onClick} color={color} hoverColor={hoverColor}>
      {icon}
    </StyledWidget>
  );
};

export default Widget;