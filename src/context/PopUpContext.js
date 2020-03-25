import React, { useState } from "react"

export const PopUpContext = React.createContext()

const PopUpProvider = ({ children }) => {
  const [isPopUpOpen, setPopUpOpen] = useState(false)

  const contextValues = {
    isPopUpOpen,
    setPopUpOpen,
  }

  return (
    <PopUpContext.Provider value={contextValues}>
      {children}
    </PopUpContext.Provider>
  )
}

export default PopUpProvider
