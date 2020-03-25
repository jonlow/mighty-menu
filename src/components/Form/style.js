import styled from "styled-components"
import { device } from "../../utils/breakpoints.js"

export const FormWrap = styled.form`
  width: 100%;
  margin: 0 auto;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  color: black;
  @media ${device.desktop} {
    font-size: 20px;
  }
`

export const FloatingLabel = styled(Label)`
  position: absolute;
  top: ${props => (props.fieldActive ? "14px" : props.area ? "30px" : "50%")};
  left: ${props => (props.icon ? "54px" : "15px")};
  transition: 140ms;
  transform: ${props =>
    props.fieldActive ? "translate3d(2px, -3px, 0)" : "translate3d(0,-50%,0)"};
  font-size: ${props => (props.fieldActive ? "12px" : "16px")};
  opacity: ${props => (props.fieldActive ? "0.5" : 1)};
  @media ${device.desktop} {
    top: ${props => (props.fieldActive ? "17px" : props.area ? "40px" : "50%")};
    left: ${props => (props.icon ? "60px" : "20px")};
    font-size: ${props => (props.fieldActive ? "14px" : "20px")};
  }
`
export const ErrorMessage = styled.p`
  position: absolute;
  color: red;
  left: 0;
  bottom: -20px;
  font-size: 11px;

  @media ${device.desktop} {
    font-size: 16px;
    bottom: -24px;
  }
`
