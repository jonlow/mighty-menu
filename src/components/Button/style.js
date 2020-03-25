import styled from "styled-components"
import { device } from "../../utils/breakpoints.js"
import { Link } from "gatsby"

export const ButtonBtn = styled.button`
  border-radius: 3px;
  display: ${props =>
    props.fullwidth === "true" ? "inline-flex" : "inline-flex"};
  width: ${props => (props.fullwidth === "true" ? "100%" : "auto")};
  transition: background 120ms ease 0s;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-transform: none;
  padding: 0 18px;
  font-size: 14px;
  color: ${props =>
    props.nobackground === "true"
      ? props.theme.btnColor
      : props.theme.btnTextColor};
  background: ${props =>
    props.nobackground === "true" ? "none" : props.theme.btnColor};
  border: ${props =>
    props.nobackground === "true" && `2px solid ${props.theme.btnColor}`};
  font-weight: 600;
  height: 40px;

  @media ${device.tablet} {
    height: 44px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    height: 48px;
    font-size: 18px;
    padding: 0 21px;
  }

  /* :hover {
    background: ${props =>
      props.nobackground === "true" ? "none" : props.theme.btnHoverColor};
  } */
`

export const ButtonLink = styled(Link)`
  border-radius: 3px;
  display: ${props =>
    props.fullwidth === "true" ? "inline-flex" : "inline-flex"};
  width: ${props => (props.fullwidth === "true" ? "100%" : "auto")};
  height: 40px;
  transition: background 120ms ease 0s;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-transform: none;
  padding: 0 18px;
  font-size: 14px;
  color: ${props =>
    props.nobackground === "true"
      ? props.theme.btnColor
      : props.theme.btnTextColor};
  background: ${props =>
    props.nobackground === "true" ? "none" : props.theme.btnColor};
  border: ${props =>
    props.nobackground === "true" && `2px solid ${props.theme.btnColor}`};

  font-weight: 600;

  @media ${device.tablet} {
    height: 44px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    height: 48px;
    font-size: 18px;
    padding: 0 21px;
  }

  /* :hover {
    background: ${props =>
      props.nobackground === "true" ? "none" : props.theme.btnHoverColor};
  } */
`
export const Icon = styled.div`
  width: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: auto;
    /* g,
    path {
      fill: white;
    } */
  }
`

export const Label = styled.span`
  position: relative;
  :after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #abc8e7;
    opacity: 0;
  }
`
