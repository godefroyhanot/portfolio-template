import React from "react";
import { styled } from "styled-components";

const StyledMenu = styled.div``;
const Menu = ({ ...props }) => {
  return <StyledMenu {...props}></StyledMenu>;
};

export default Menu;
