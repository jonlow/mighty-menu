import React from "react"
import { GridWrapper } from "./style"

const Grid = props => {
  
  // flow = 'column' || 'row'

  // rows
  // cols
  // gap
  // rowGap
  // colGap => {[ up to 4 b.p ]}
  return <GridWrapper {...props}>{props.children}</GridWrapper>
}

export default Grid
