import styled from "styled-components"
import { Link } from "gatsby"
// import { FlexCol } from "../FlexGrid/index"

import { device } from "../../utils/breakpoints"

export const MenuItems = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  color: #9cacae;
  letter-spacing: 0;
  line-height: 100%;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  @media ${device.tablet} {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0;
  }

  :hover {
    color: ${props => props.theme.primaryColor};
    transition: 80ms;
  }
`

export const Copyright = styled.p`
  font-size: 12px;
  color: #9cacae;
  letter-spacing: 0;
  /* line-height: 18px; */

  a {
    font-weight: 600;
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    :hover {
      opacity: 0.6;
      transition: 80ms;
    }
  }
`
export const LogoContainer = styled.div`
  margin-top: 30px;

  @media ${device.tablet} {
    margin-left: 3rem;
    margin-top: 0;
  }

  svg {
    height: auto;
    :hover {
      opacity: 0.7;
      transition: 80ms;
    }
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: flex-end;
`
export const Logo = styled.div`
  position: relative;
  a {
    display: flex;
  }

  @media ${device.tablet} {
    :before {
      content: "";
      position: absolute;
      display: block;
      height: 100%;
      width: 1px;
      background-color: #9cacae;
      left: -20%;
    }
  }
  @media ${device.desktop} {
    :before {
      left: -25px;
    }
  }

  svg {
    height: auto;
    :hover {
      opacity: 0.7;
      transition: 80ms;
    }
  }
`
export const SocialAndLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media ${device.desktop} {
    justify-content: flex-end;
  }
`
