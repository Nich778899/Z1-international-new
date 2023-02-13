import { PopularPost } from "./Popular-Post";
import { generalPage } from "./general-page-query";

const { gql } = require("@apollo/client");

export const getPostByTag = gql`

query postByTag($id:ID!) {
  ${generalPage}
      ${PopularPost}
      realestate: category(id: "/category/real-estate", idType: URI) {
    posts(first: 4) {
        nodes {
          title
          slug
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          categories {
        nodes {
          name
        }
      }
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
        
      }
    }
  }
  sponsor: category(id: "/category/sponsor", idType: URI) {
    posts(first: 4) {
      
        nodes {
          title
          slug
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
        
      }
    }
  }
  fb: category(id: "/category/facebook-pages", idType: URI) {
    posts(first: 4) {
        nodes {
          title
          slug
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
        
      }
    }
  }
  video: category(id: "/category/video", idType: URI) {
    posts(first: 4) {
      
        nodes {
          title
          slug
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
        
      }
    }
  } 
  tag(id: $id, idType:SLUG) {
    name
    posts {
      edges {
        node {
          title
          uri
          slug
          featuredImage {
            node {
              sourceUrl
              author {
                node {
                  name
                }
              }
            }
          }
          content
          date
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
        }
      }
    }
  }
}
`