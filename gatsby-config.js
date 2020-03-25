const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Avenue`,
    description: `The beginning of something beautiful`,
    author: `@avenue`,
    siteUrl: "https://avenue.design/",
  },
  plugins: [
    `gatsby-plugin-svgr`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        comp: path.join(__dirname, `src/components`),
        components: path.join(__dirname, `src/components`),
        hooks: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, `src/images`),
        icons: path.join(__dirname, `src/images/icons`),
        utils: path.join(__dirname, `src/utils`),
        helpers: path.join(__dirname, `src/utils/helpers`),
        breakpoints: path.join(__dirname, `src/utils/breakpoints`),
        queries: path.join(__dirname, `src/queries`),
        hooks: path.join(__dirname, "src/hooks"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 2000,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `WPGraphQL`,
    //     fieldName: `wpgraphql`,
    //     url: process.env.GATSBY_GRAPHQL_ENDPOINT,
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
