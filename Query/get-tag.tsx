const { gql } = require("@apollo/client");
export const GetTagePage = gql`
query MyQuery2 {
tags {
    edges {
      node {
        name
        slug
        tagId
        uri
      }
    }
  }
}
`