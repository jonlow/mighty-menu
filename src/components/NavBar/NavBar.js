import React, { useState } from "react"
import {
  LogoWrapper,
  NavBarContainer,
  NavWrapper,
  Nav,
  NavList,
  // SocialLinksWrapper,
  QuickSearchWrapper,
} from "./style"
import NavItem from "./navItem"
import Hamburger from "./hamburger"
import { Icon } from "utils/helpers/getIcon"
import { ReactComponent as Logo } from "../../images/avenue-logo.svg"

const NavBar = () => {
  const [isNavShown, setNavShown] = useState(false)

  const toggleShowNav = () => {
    setNavShown(!isNavShown)
  }

  return (
    <NavBarContainer>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <NavWrapper>
        <Nav isNavShown={isNavShown}>
          <NavList>
            <NavItem label="Portfolio" path="/" />
            <NavItem label="Resources" path="/" />
            <NavItem label="About" path="/" />
            <NavItem label="Inspiration" path="/" />
            <NavItem label="Contact" path="/" />
          </NavList>
        </Nav>
        <QuickSearchWrapper to="/search">
          <Icon name="search" />
        </QuickSearchWrapper>
        {/* 
        <SocialLinksWrapper>Social</SocialLinksWrapper>*/}
        <Hamburger isNavShown={isNavShown} toggleShowNav={toggleShowNav} />
      </NavWrapper>
    </NavBarContainer>
  )
}

export default NavBar
