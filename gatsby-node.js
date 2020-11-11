const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProject12ABlogWebsite {
        edges {
          node {
            slug
            updatedAt
            title
            featuredImage {
              fluid {
                src
              }
            }
            bodyText {
              json
            }

            excerpt {
              excerpt
            }
          }
        }
      }
    }
   `);

   console.log(response)
  response.data.allContentfulProject12ABlogWebsite.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        data: edge
      },
    })
  })
}

