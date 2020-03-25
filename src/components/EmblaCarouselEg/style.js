import styled from "styled-components"
import { device } from "breakpoints"

export const Item = styled.div`
  width: 100%;
  height: 100%;
  background: grey;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
    color: white;
  }
`
