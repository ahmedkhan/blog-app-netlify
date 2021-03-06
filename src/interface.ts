export interface node {
    id: string;
    slug: string;
    title: string;
    updatedAt: string;
    excerpt: {
      excerpt: string;
    },
    featuredImage: {
      fluid: {
        src: string
      }
    },
    body :{
      body : string
    }
  }
  
  
  export  interface blog {    
    node: node
  }

  export interface nodeProps {
    detail: node
  }