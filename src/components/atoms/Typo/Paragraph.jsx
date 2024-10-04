import React from "react";
import styled from "styled-components";

const StyledParagraphTypo = styled.p`
  color: ${({ color, theme }) => color || theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: ${({ theme }) => theme.fontSize.paragraph};
`;

const Paragraph = ({ children, color }) => {
  return <StyledParagraphTypo color={color}>{children}</StyledParagraphTypo>;
};

export default Paragraph;
