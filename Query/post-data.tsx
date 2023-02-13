const all_post = `
all_posts: posts(where: {orderby: {field: DATE, order: DESC }}, first: 10000) {
    nodes {
      title
      content
      date
      slug
      uri
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
 

`;


  

export default all_post