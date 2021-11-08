/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: process.env.GATSBY_APP_TITLE,
    author: "Yash Khatri(yashkk3640@gmail.com)",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_APP_API_KEY,
          authDomain: process.env.GATSBY_APP_AUTH_DOMAIN,
          projectId: process.env.GATSBY_APP_PROJECT_ID,
          storageBucket: process.env.GATSBY_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_APP_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_APP_ID,
          measurementId: process.env.GATSBY_APP_MEASUREMENT_ID,
        },
      },
    },
  ],
};
