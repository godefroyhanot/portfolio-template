import React from "react";
import { styled } from "styled-components";
const StyledParagraphTypo = styled.p`
  color: ${({ color }) => color || '#008CBA'};
`;

const Paragraph = ({ children ,color}) => {
  return <StyledParagraphTypo color={color}>{children}</StyledParagraphTypo>;
};

export default Paragraph;
