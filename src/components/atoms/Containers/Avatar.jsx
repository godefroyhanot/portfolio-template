import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: ${({ size }) => size || '50px'};
  height: ${({ size }) => size || '50px'};
  border-radius: 50%;
  object-fit: cover;
`;

const Avatar = ({ src, alt, size }) => {
  return <StyledAvatar src={src} alt={alt} size={size} />;
};

export default Avatar;