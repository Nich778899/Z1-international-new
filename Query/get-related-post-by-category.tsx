const { gql } = require("@apollo/client");

 export const PostByCategorySlug = gql`
 query MyQuery2 {
  category(id: "/category/real-estate/", idType: URI) {
    name
    slug
    posts(last: 25) {
      nodes {
        title
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            slug
            name
            link
          }
        }
      }
    }
  }
 }
`;
