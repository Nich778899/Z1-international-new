import { gql } from "@apollo/client";

const getPostByCategoryID = gql`
    query PostsByCategory($id: ID!){
        category(id: $id, idType:SLUG) {
            id
            name
            posts {
                nodes {
                content
                title
                uri
                date
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
                      sourceUrl
                    }
                  }
            }
            }
        }
       
    }
`
export default getPostByCategoryID