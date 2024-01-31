/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-remark`, // to transform .md files into HTML
    `gatsby-transformer-sharp`, // to transform images
    `gatsby-plugin-sharp`, // to transform images
    {
      resolve: `gatsby-source-filesystem`, // To get access to the "projects" folder files
      options: {
        name: `projects`, // The unique name for each instance
        path: `${__dirname}/src/projects/`, // Path to the directory
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // To get access to the "images" folder files
      options: {
        name: `images`, // The unique name for each instance
        path: `${__dirname}/src/images/`, // Path to the directory
      },
    },
  ],
  siteMetadata: {
    title: 'Portfolio-Web',
    description: 'Web-portfolio built on gatsby',
    copyright: 'Copyright 2023 Portfolio-Web',
    contact: 'vv@gmail.com',
  },
};
