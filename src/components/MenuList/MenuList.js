import React from "react"
import { List } from "./style"
import ListItem from "./ListItem"
import { items } from "./itemsData"
const MenuList = () => {
  return (
    <List>
      {items.map((item, index) => {
        return <ListItem label={item.label} path={item.path} key={index} />
      })}
    </List>
  )
}

export default MenuList
