const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  plugins: [    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
} 