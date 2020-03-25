import React, { useContext, useEffect } from "react"
import { PopUpContext } from "../../context/PopUpContext"
import {
  PopUpContainer,
  PopUpBackground,
  ClosePopUpButton,
  PopUpMain,
} from "./style"

const PopUp = () => {
  const { isPopUpOpen, setPopUpOpen } = useContext(PopUpContext)

  const closePopUp = () => {
    setPopUpOpen(false)
  }

  const escHandler = event => {
    if (event.keyCode === 27 && isPopUpOpen) {
      setPopUpOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escHandler)

    return function cleanup() {
      window.removeEventListener("keydown", escHandler)
    }
  })

  return (
    <PopUpContainer isPopUpOpen={isPopUpOpen}>
      <PopUpBackground />
      <ClosePopUpButton label="close pop up" onClick={closePopUp} />
      <PopUpMain>
        <h3 style={{ marginBottom: "20px" }}>I'm a pop up yo.</h3>
        <p style={{ marginBottom: "15px" }}>
          top right button is a good example of an extended button.
        </p>
        <p>ESC key also closes this bad boy.</p>
      </PopUpMain>
    </PopUpContainer>
  )
}

export default PopUp
