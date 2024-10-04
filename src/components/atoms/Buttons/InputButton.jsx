import React from 'react';
import styled from 'styled-components';

const StyledInputButton = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const InputButton = ({ type = 'text', placeholder, value, onChange }) => {
  return <StyledInputButton type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputButton;