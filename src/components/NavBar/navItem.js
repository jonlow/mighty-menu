import React from "react"
import { NavListItem } from "./style"
import { Link } from "gatsby"

const NavBar = ({ label, path }) => {
  return (
    <NavListItem>
      <Link to={path}>
        <span>{label}</span>
      </Link>
    </NavListItem>
  )
}

export default NavBar
