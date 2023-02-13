export const  PopularPost=`
popularPost: posts(where: {orderby: {field: DATE, order: DESC}}, first: 4) {
    nodes {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          title
          altText
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
`