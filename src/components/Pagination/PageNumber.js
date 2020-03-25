import React, { useEffect, useState } from "react"

import { Number, ListItem } from "./style.js"

const PageNumber = ({ pageNumber, currentPage, pagination }) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (pageNumber === parseInt(currentPage)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [currentPage, pageNumber])

  return (
    <ListItem>
      <Number active={active} onClick={() => pagination(pageNumber)}>
        {pageNumber}
      </Number>
    </ListItem>
  )
}

export default PageNumber
