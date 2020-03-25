import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "breakpoints"
const navItemHorizontalSpacing = "20px"

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  height: auto;

  > svg,
  > img {
    height: 40px;
    display: block;
  }
`

export const NavWrapper = styled.div`
  display: flex;
`

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  bottom: 0;
  transform: translateY(100%);
  left: 0;
  margin: 0;
  background: #fff;
  width: 100%;
  opacity: ${props => (props.isNavShown ? "1" : "0")};
  pointer-events: ${props => (props.isNavShown ? "all" : "none")};
  z-index: 2;

  @media (min-width: 768px) {
    opacity: 1;
    position: relative;
    bottom: auto;
    background: none;
    transform: none;
    justify-content: flex-end;
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const NavListItem = styled.li`
  width: 100%;
  a {
    display: block;
    text-align: center;
    padding: 10px ${navItemHorizontalSpacing};
    font-weight: 600;
    color: ${props => props.theme.linkColor};

    @media ${device.tablet} {
      pointer-events: all;
    }
  }

  span {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      opacity: 0;
      height: 2px;
      width: 100%;
      bottom: -6px;
      transition: 200ms;
      background: ${props => props.theme.linkColor};
    }
  }

  :hover {
    span::before {
      opacity: 1;
      bottom: -3px;
    }
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
`

export const QuickSearchWrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 ${navItemHorizontalSpacing};
  max-height: 60px;
  height: 100%;
  opacity: 1;
  transition: 110ms;

  :hover {
    opacity: 0.7;
  }
  svg {
    height: 20px;
  }
`

export const Clickable = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const HamburgerWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 16px;
  position: relative;

  cursor: pointer;
`

export const FirstLine = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  transition: 0.4s ease-out;
  background: black;
  position: absolute;
  transform: ${props =>
    props.isNavShown
      ? "translate3d(0, 6px, 0) rotate(45deg)"
      : "translate3d(0, 0, 0) rotate(0deg)"};
`

export const SecondLine = styled(FirstLine)`
  transition: 0.1s ease-out;
  opacity: ${props => (props.isNavShown ? 0 : 1)};
  top: 8px;
`

export const ThirdLine = styled(FirstLine)`
  transform: ${props =>
    props.isNavShown
      ? "translate3d(0, 6px, 0) rotate(-45deg)"
      : "translate3d(0, 16px, 0) rotate(0deg)"};
  display: block;
`
