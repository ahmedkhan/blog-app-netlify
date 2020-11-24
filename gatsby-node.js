const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
     allContentfulBlogPost {
    edges {
      node {
        title
        updatedAt(formatString: "DD MMMM YYYY")
        slug
        id
        featuredImage {
          fluid {
            src
          }
        }
        excerpt {
          excerpt
        }
        body {
          json
        }
      }
    }
  }
 }
 `);

   console.log(response)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        data: edge
      },
    })
  })
}

