import styled from "styled-components"
// import { device } from '../../utils/breakpoints.js';
import { Button } from "../Button/index.js"

export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  opacity: ${props => (props.isPopUpOpen ? 1 : 0)};
  transition: 80ms;
  pointer-events: ${props => (props.isPopUpOpen ? "all" : "none")};
`

export const PopUpBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.2;
`

export const ClosePopUpButton = styled(Button)`
  position: absolute;
  top: 30px;
  right: 30px;
  background: darkorange;

  :hover {
    background: teal;
  }
`

export const PopUpMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  height: 50%;
  width: 50%;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 30px;
`
