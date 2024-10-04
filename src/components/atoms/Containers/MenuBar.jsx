import React from "react";
import { styled } from "styled-components";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: ${({ color, theme }) =>
    color || theme.colors.backgroundDark};
  color: ${({ color, theme }) => color || theme.colors.secondary};
`;

const MenuBar = ({ children }) => {
  return <StyledMenuBar>{children}</StyledMenuBar>;
};

export default MenuBar;
