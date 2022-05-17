import styled, { css } from "styled-components";


export const ButtonStyles = styled.button`

  display: block;
  padding: ${props => props.padding};
  border-radius: 30px;
  border: none;
  ${props => props.backgroundColor && css`
    background: ${props.backgroundColor};
    color: ${props.color};
  `}
  font-family: roboto;
  font-size: ${props => props.fontSize};
  cursor: pointer;
  transition: all .2s;
  margin-left: 1rem;

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }

`