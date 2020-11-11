const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  plugins: [    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "1va15ba3kqts",
        accessToken: "RYp2Z7nasVvpBGAqLVLVI-eZUG_Xust5MpVyD2ZVJts",
      },
    },
  ],
}