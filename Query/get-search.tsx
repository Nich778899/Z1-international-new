import { gql } from "@apollo/client";
import { generalPage } from "./general-page-query";
import { PopularPost } from "./Popular-Post";

export const get_search = gql`
query Search($title: String) {
  ${generalPage}
${PopularPost}
   Search: posts(where: { search: $title }) {
      edges {
        node {
          id
          title
          slug
          uri
          featuredImage {
            node {
              id
              altText
              sourceUrl
            }
          }
          content
          author {
            node {
              name
            }
          }
          date
        }
      }
    }
    realestate: category(id: "/category/real-estate", idType: URI) {
    posts(first: 4) {
     
        nodes {
          title
          slug
          date
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
 
  }

    `;