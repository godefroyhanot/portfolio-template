import React from "react";
import styled from "styled-components";

const StyledBgColor = styled.div`
  background-color: ${({ color, theme }) =>
    color || theme.colors.backgroundLight};
`;

const BgColor = ({ color, children }) => {
  return <StyledBgColor color={color}>{children}</StyledBgColor>;
};

export default BgColor;
