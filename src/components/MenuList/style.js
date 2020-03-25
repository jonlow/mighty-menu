import styled from "styled-components"
// import { device } from '../../utils/breakpoints.js'

export const List = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  font-weight: 600;
  color: white;
  position: relative;
  transition: background 100ms;
  padding: 10px 20px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }

  a {
    width: 100%;
    color: ${props => props.theme.linkColor};
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
