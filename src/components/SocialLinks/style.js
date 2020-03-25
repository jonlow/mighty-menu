import styled from "styled-components"

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  a {
    margin-bottom: 6px;
    :hover {
      opacity: 0.6;
      transition: 70ms;
    }

    svg {
      display: block;
      height: 20px;
      width: 20px;
      g,
      path {
        fill: #9e1164;
      }

      :hover {
        opacity: 0.6;
        transition: 70ms;
      }
    }
  }
`
