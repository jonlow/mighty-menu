import React from "react"
import { MainColumnWrapper } from "./style"
const MainColumn = ({ children, className }) => {
  return <MainColumnWrapper className={className}>{children}</MainColumnWrapper>
}

export default MainColumn
