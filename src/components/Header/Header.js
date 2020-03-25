import React from "react"

import { NavBar } from "../NavBar"
import { HeaderContainer } from "./style"
import { Link } from "gatsby"

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>
        <Link
          to="/all-components"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#9D1864",
          }}
        >
          link to all-components
        </Link>
      </h1>
    </HeaderContainer>
  )
}

export default Header
