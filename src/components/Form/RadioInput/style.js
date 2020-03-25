import styled from "styled-components"
// import { device } from '../../utils/breakpoints.js';

export const RadioInputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
  align-items: baseline;
  padding-left: 40px;
`

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background: #ddd;
  transition: background 90ms;
  pointer-events: none;
  border-radius: 50%;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: 100ms;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    transform: translate3d(-50%, -50%, 0) scale(0.3);
  }

  ${RadioInputContainer}:hover & {
    background: #ccc;
  }
`

export const Input = styled.input`
  opacity: 0;
  height: 0;
  width: 0;

  /* make input clickable region reach the entire container div */
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  /* show checkmark pseudo when input is checked */
  :checked ~ span.checkmark {
    background: ${props => props.theme.primaryColor};
    ::after {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
  }
`

export const Label = styled.label`
  font-weight: 600;
`
