import styled from "styled-components"
// import { device } from '../../utils/breakpoints.js';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border-radius: 2px;
  position: relative;
  pointer-events: none;
`

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  justify-content: space-between;
  border: none;
  pointer-events: all;
  cursor: pointer;

  /*custom*/
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: ${props => (props.isMenuShown ? "0" : "3px")};
  border-bottom-right-radius: ${props => (props.isMenuShown ? "0" : "3px")};
  height: 50px;
  padding: 0 20px;
  background: ${props => props.theme.primaryColor};
  transition: background 80ms;

  svg {
    width: 16px;
    transform: ${props => (props.isMenuShown ? "rotateX(180deg);" : "none")};
    transition: 400ms;

    path {
      stroke: #fff;
    }
  }

  span {
    font-weight: 600;
    color: #fff;
  }

  :hover {
    background: ${props => props.theme.btnHoverColor};
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 10px 15px 35px 0 rgba(0, 0, 0, 0.35);
  z-index: 1;
  width: 100%;
  transform: translateY(100%);
  opacity: ${props => (props.isMenuShown ? 1 : 0)};
  transition: 100ms;
  pointer-events: ${props => (props.isMenuShown ? "all" : "none")};
  overflow: hidden;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`
