import styled from "styled-components"
// import { device } from '../../utils/breakpoints.js';

export const CheckboxContainer = styled.div`
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
  border-radius: 3px;
  background: #ddd;
  transition: background 90ms;
  pointer-events: none;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: 100ms;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate3d(-50%, -40%, 0) scale(0.3) rotate(45deg);
  }

  ${CheckboxContainer}:hover & {
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
      transform: translate3d(-50%, -60%, 0) scale(1) rotate(45deg);
    }
  }
`

export const Label = styled.label`
  font-weight: 600;
`
