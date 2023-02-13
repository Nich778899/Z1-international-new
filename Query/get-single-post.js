import { PopularPost } from "./Popular-Post";
import { generalPage } from "./general-page-query";

const { gql } = require("@apollo/client");

export const SinglePost = gql`

  query Post($slug: String!) {
    ${generalPage}
      ${PopularPost}
      realestate: category(id: "/category/real-estate", idType: URI) {
    posts(first: 4) {
        nodes {
          title
          date
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
    postBy(
      slug: $slug
    ) {
      author {
        node {
          name
        }
      }
      date
      slug
      title
      content
      categories {
        edges {
          node {
            name
            slug
            uri
          }
        }
      }
      chanel {
      description
      image {
        sizes
        sourceUrl
      }
      url
    }
    featuredImage {
      node {
        sizes
        sourceUrl
      }
    }
    tags(where: {orderby: TERM_ORDER}) {
      edges {
        node {
          uri
          slug
          name
        }
      }
    }
    }
  }
`;
