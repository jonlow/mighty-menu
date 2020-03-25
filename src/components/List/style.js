import styled from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-direction: ${props =>
    props.direction === "horizontal" ? "row" : "column"};
  /* margin-bottom: 30px; */

  @media only screen and (min-width: 400px) {
    margin-bottom: 0;
  }
`
export const Item = styled.li`
  list-style-type: none;
  margin-right: 30px;

  :last-child {
    margin-right: 0;
  }
`
