import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UseImgPlaceHolder = () => {
  const { file: logo } = useStaticQuery(
    graphql`
      query imgPlaceHolder {
        file(relativePath: { eq: "Avenue.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 360, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Img loading="eager" fadeIn={false} fluid={logo.childImageSharp.fluid} />
  )
}

export default UseImgPlaceHolder
