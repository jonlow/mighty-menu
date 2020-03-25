import React from "react"
import { FlexBoxCol } from "./style"

//uses a 12 column design system!

//xs: mobile
//sm: tablet, 768px
//md: desktop, 1024px
//lg: large, 1280px

// c1 : [bp, #cols]
// c2 : [bp, #cols]

const FlexCol = props => {
  return <FlexBoxCol {...props} />
}

export default FlexCol
