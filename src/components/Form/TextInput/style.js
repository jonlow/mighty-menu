import styled from "styled-components"
import { device } from "utils/breakpoints.js"

export const TextInputContainer = styled.div`
  display: flex;
  margin-bottom: ${props => (props.type === "hidden" ? "0" : "25px")};
  position: relative;
  flex-direction: column;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);

  @media ${device.desktop} {
    margin-bottom: ${props => (props.type === "hidden" ? "0" : "28px")};
  }

  svg {
    position: absolute;
    top: ${props => (props.area ? "18px" : "50%")};
    left: 17px;
    width: 24px;
    transform: ${props => (props.area ? null : "translateY(-50%);")};

    @media ${device.desktop} {
      top: ${props => (props.area ? "26px" : "50%")};
      left: 20px;
    }
    path {
      transition: 100ms;
      fill: ${props =>
        props.fieldActive ? props.theme.primaryColor : "#d3d2ce"};
    }
  }
`

export const Input = styled.input`
  display: block;
  outline: none;
  width: 100%;
  border-radius: 2px;
  padding: ${props =>
    props.icon
      ? "23px 15px 3px 54px"
      : props.floatingLabel
      ? "23px 15px 3px 15px"
      : "5px 15px 5px 15px"};
  height: 64px;
  /* border: ${props => `1px solid ${props.theme.primaryColor}`}; */
  border:none;
  border-radius: 4px;
  font-size: 16px;

  @media ${device.desktop} {
    height: 72px;
    padding: ${props =>
      props.icon
        ? "21px 20px 3px 60px"
        : props.floatingLabel
        ? "21px 20px 3px 20px"
        : " 5px 20px 5px 20px"};
    font-size: 20px;
  }
`

export const Area = styled.textarea`
  display: block;
  outline: none;
  width: 100%;
  border-radius: 2px;
  padding: ${props =>
    props.icon
      ? "26px 15px 3px 54px"
      : props.floatingLabel
      ? "26px 15px 3px 15px"
      : "5px 15px 5px 15px"};
  height: 120px;
  /* border: ${props => `1px solid ${props.theme.primaryColor}`}; */
  border:none;

  border-radius: 5px;
  resize: none;
  font-size: 16px;

  @media ${device.desktop} {
    height: 200px;
    padding: ${props =>
      props.icon
        ? "30px 20px 3px 60px"
        : props.floatingLabel
        ? "30px 20px 3px 20px"
        : " 5px 20px 5px 20px"};
    font-size: 20px;
  }
`
