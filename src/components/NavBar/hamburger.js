import React from "react"
import {
  Clickable,
  HamburgerWrapper,
  FirstLine,
  SecondLine,
  ThirdLine,
} from "./style.js"

const Hamburger = ({ isNavShown, toggleShowNav }) => {
  return (
    <Clickable isNavShown={isNavShown} onClick={toggleShowNav}>
      <HamburgerWrapper>
        <FirstLine isNavShown={isNavShown} />
        <SecondLine isNavShown={isNavShown} />
        <ThirdLine isNavShown={isNavShown} />
      </HamburgerWrapper>
    </Clickable>
  )
}

export default Hamburger
