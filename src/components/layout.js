import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import theme from "../utils/theme.js"
import { ThemeProvider } from "styled-components"
import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-wrapper">
        <Header search />
        <main>{children}</main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
