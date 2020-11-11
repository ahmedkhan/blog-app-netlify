import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Blogpost from "../component/blogpost";
import { node, blog } from "../interface";

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
    <div>
      {data.allContentfulProject12ABlogWebsite.edges.map((blog: blog) => {
        return (
          <div key = {blog.node.id}>
            <Blogpost detail={blog.node} />
          </div>
        );
      })}
    </div>
  );
};

export default blogs;
