module.exports = {
  siteMetadata: {
    title: `RedDress`,
    description: `Recreating the natural wound healing environment`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
   

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `phiro.000webhostapp.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    
   
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9B507E`,
        theme_color: `#9B507E`,
        display: `minimal-ui`,
        icon: `src/images/Redress-Icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values

          wordpress__PAGE: {
            title: node => node.title,
            path: node => node.slug,
            excerpt: node => node.excerpt,
          },


         

        },
      },
    },

 
  ],
}