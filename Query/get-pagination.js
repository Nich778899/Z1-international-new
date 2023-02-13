 
const { gql } = require("@apollo/client");

export const Get_Pagination_Page = gql`
query PostsByCategory($category: String ,$offset: Int ) {
    posts (where: { categoryName: $category,offsetPagination: {size: 10, offset: $offset} }){
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
}
`