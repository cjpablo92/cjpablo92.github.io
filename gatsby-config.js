/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Juan Pablo Calvo`,
    author: `Juan Pablo Calvo`,
    firstName: `Juan Pablo`,
    lastName: `Calvo`,
    description: `Juan Pablo's personal site`,
    occupation: `Technical Leader`,
    keywords: [`Juan Pablo`, `Calvo`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Coding Monkey`,
      `Jedi Master`,
      `Tech Lover`
    ],
    readingList: [
      {
        title: `Clean Code: A Handbook of Agile Software Craftsmanship`,
        author: `Robert C. Martin`,
        link: `https://www.goodreads.com/book/show/3735293-clean-code`,
      },
      {
        title: `Software Architecture in Practice`,
        author: `Len Bass, Paul Clements, Rick Kazman`,
        link: `https://www.goodreads.com/book/show/70143.Software_Architecture_in_Practice`,
      },
      {
        title: `Pro Git`,
        author: `Scott Chacon`,
        link: `https://www.goodreads.com/book/show/6518085-pro-git`,
      },
    ],
    showsList: [
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juan Pablo's Personal Site`,
        short_name: `J.Calvo`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
