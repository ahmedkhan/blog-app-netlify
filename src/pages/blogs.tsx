import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Blogpost from "../component/blogpost";
import { blog } from "../interface";
import Blogdetail from '../component/blogpost'


const blogs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProject12ABlogWebsite {
          edges {
            node {
              title
              updatedAt
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
            }
          }
        }
      }
    `
  );

  return (
    <div style={{display:"flex", justifyContent: "space-between", margin: "50px 50px"}} >
      {data.allContentfulProject12ABlogWebsite.edges.map((blog: blog) => {
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
