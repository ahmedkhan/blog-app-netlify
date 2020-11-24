import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Blogpost from "../component/blogpost";
import { blog } from "../interface";
import Blogdetail from '../component/blogpost'

 
const blogs = () => {
  const data = useStaticQuery(
    graphql`
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
    `
  );
 
  return (
    <div style={{display:"flex", justifyContent: "space-between", margin: "50px 50px"}} >
      {data.allContentfulBlogPost.edges.map((blog: blog) => {
        return (
          <div key = {blog.node.id} style={{display: "inline-block"}}>
              <Blogpost detail={blog.node} 
              />
          </div>
        );
      })}
    </div>
  );
};

export default blogs;
