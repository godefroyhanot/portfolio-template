import React from "react";
import { styled } from "styled-components";
const StyledParagraphTypo = styled.p``;

const Paragraph = ({ children }) => {
  return <StyledParagraphTypo>{children}</StyledParagraphTypo>;
};

export default Paragraph;
