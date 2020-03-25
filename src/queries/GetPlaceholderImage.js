import { useStaticQuery, graphql } from "gatsby"

export const GetPlaceholderImage = () => {
  const data = useStaticQuery(
    graphql`
      query placeHolderImg {
        file(relativePath: { eq: "Avenue.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  return data.file.childImageSharp.fluid
}
