module.exports = {
  siteMetadata: {
    title: `Mathias Grahl`,
    description: `Mathias Grahl, Developer and Designer from Sweden`,
    author: `@grahlie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grahlie`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#412682`,
        theme_color: `#ED6C5E`,
        display: `minimal-ui`,
        icon: `src/images/grahlie.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700", "900"],
            }
          ],
        },
      },
    }
  ],
}
