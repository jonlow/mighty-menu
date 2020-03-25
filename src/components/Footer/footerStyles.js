import styled from "styled-components"
import { device } from "breakpoints"

export const Container = styled.div`
  margin: 0 auto 120px auto;
  padding: 0 20px;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.large} {
    padding: 0 0;
  }
`
