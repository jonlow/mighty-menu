import React from "react"
import PropTypes from "prop-types"
import { FlexBoxGrid } from "./style"

//Documentation
//https://www.npmjs.com/package/react-styled-flexboxgrid
//https://loicmahieu.github.io/react-styled-flexboxgrid/demo/index.html

// gap
// rowGap => {[ up to 4 b.p ]}

const FlexGrid = props => {
  return <FlexBoxGrid {...props} />
}

export default FlexGrid

FlexGrid.propTypes = {
  gap: PropTypes.array,
  rowGap: PropTypes.array,
}
