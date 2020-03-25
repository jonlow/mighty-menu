import React from "react"
import { Item } from "./style"
import { Link } from "gatsby"
const ListItem = ({ label, path }) => {
  return (
    <Item>
      <Link to={path}>{label}</Link>
    </Item>
  )
}

export default ListItem
