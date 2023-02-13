const { gql } = require("@apollo/client");

export const getPostsSlug = gql  `
query postsSlug {
    all_posts: posts(where: {orderby: {field: DATE, order: DESC }}, first: 10000) {
    nodes {
      slug
      uri
    }
  }
}

`