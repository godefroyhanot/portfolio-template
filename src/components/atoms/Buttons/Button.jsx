import React from 'react'
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;`;

const Button = ({ label, onClick, type = 'button', className }) => {
    return (
      <StyledButton type={type} className={`btn ${className}`} onClick={onClick}>
        {label}
      </StyledButton>
    );
  };

export default Button