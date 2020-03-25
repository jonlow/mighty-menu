import React from "react"
import { FlexGrid, FlexRow } from "components/FlexGrid"
import { ExtendedFlexCol } from "./style"

const items = ["I", "AM", "FLEX", "BOX", "GRID", "YUP", "YO", "SUP", "HEY"]

const FlexboxGridEg = () => {
  return (
    <FlexGrid gap={[20, 20, 45, 60]}>
      <FlexRow center="xs">
        {items.map((item, index) => {
          return (
            <ExtendedFlexCol
              key={index}
              xs={12}
              sm={3}
              md={4}
              lg={12}
              c1={[800, 6]}
              c2={[1400, 6]}
            >
              <h2>{item}</h2>
            </ExtendedFlexCol>
          )
        })}
        <ExtendedFlexCol xs={12}>
          <h2>HELLO</h2>
        </ExtendedFlexCol>

        <ExtendedFlexCol xs={3}>
          <h2>yup</h2>
        </ExtendedFlexCol>
      </FlexRow>

      <FlexRow end="xs">
        <ExtendedFlexCol xs={4}>
          <h2>oops</h2>
        </ExtendedFlexCol>
      </FlexRow>
      <FlexRow>
        <ExtendedFlexCol xs>
          <h2>1</h2>
        </ExtendedFlexCol>
        <ExtendedFlexCol xs>
          <h2>2</h2>
        </ExtendedFlexCol>
        <ExtendedFlexCol xs>
          <h2>3</h2>
        </ExtendedFlexCol>
        <ExtendedFlexCol xs>
          <h2>4</h2>
        </ExtendedFlexCol>
        <ExtendedFlexCol xs>
          <h2>5</h2>
        </ExtendedFlexCol>
      </FlexRow>
    </FlexGrid>
  )
}

export default FlexboxGridEg
