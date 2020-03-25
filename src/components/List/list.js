import React from "react"
import { Container, Item } from "./style"

const List = props => {
  let NewItems = props.children.map((item, index) => {
    return (
      <Item direction={props.direction} key={index}>
        {item}
      </Item>
    )
  })

  return <Container direction={props.direction}>{NewItems}</Container>
}

export default List
