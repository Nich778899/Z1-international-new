import { gql } from "@apollo/client";
import { generalPage } from "./general-page-query";
import {PopularPost} from '../Query/Popular-Post';
export const getPostByCategory = gql`
query PostsByCategory($id: ID! ){
${generalPage}
${PopularPost}
  CategoryPosts: category(id: $id, idType: URI) {
    name
    count
    posts  (first: 10){
      nodes {
        title
        content
        date
        author {
        node {
           name
        }
      }
        uri
        categories {
          edges {
            node {
              id
              name
              slug
              uri
            }
          }
        }
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
    id
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
`