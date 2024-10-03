import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${({ level, theme }) =>
    level === 1
      ? theme.fontSize.title
      : level === 2
      ? theme.fontSize.subtitle
      : "1.5rem"};
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-bottom: 1rem;
  font-weight: 900;
`;

const Heading = ({ level = 1, children, color }) => {
  const Tag = `h${level}`;
  return (
    <StyledHeading as={Tag} level={level} color={color}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
