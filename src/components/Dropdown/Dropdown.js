import React, { useState } from "react"
import { DropdownContainer, DropdownButton, DropdownMenu } from "./style.js"
import { ReactComponent as DownArrow } from "./down-arrow.svg"

const Dropdown = ({ children, label }) => {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const toggleOpen = () => {
    setIsMenuShown(!isMenuShown)
  }

  return (
    <DropdownContainer isMenuShown={isMenuShown}>
      <DropdownButton isMenuShown={isMenuShown} onClick={toggleOpen}>
        <span>{label}</span>
        <DownArrow />
      </DropdownButton>

      <DropdownMenu isMenuShown={isMenuShown}>{children}</DropdownMenu>
    </DropdownContainer>
  )
}

export default Dropdown
