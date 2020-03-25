import styled from "styled-components"
import { device } from "../../utils/breakpoints.js"

export const MainColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${props => `calc(100% - 2*${props.theme.mobileGutter}px)`};
  max-width: ${props => `${props.theme.mainMaxWidth}px`};

  @media ${device.desktop} {
    width: ${props => `calc(100% - 2*${props.theme.desktopGutter}px)`};
  }
`
