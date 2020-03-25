import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${props => `${props.theme.mainMaxWidth}px`};
  height: 500px;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 0 auto;
  margin-bottom: 100px;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`
