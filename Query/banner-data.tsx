const data_banner = `
banner: page(id: "/general/Banner/", idType: URI) {
  title
  children(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
    edges {
      node {
        ... on Page {
          id
          content
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          children(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
            edges {
              node {
                ... on Page {
                  id
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                    }
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
      }
    }
  }
}
`;


  

export default data_banner