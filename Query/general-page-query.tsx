import { Category } from "./Category-menu";

export const generalPage = `
${Category}
general: pageBy(uri: "general") {
  id
  title
  slug
  uri
  children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        id
        uri
        slug
        ... on Page {
          id
          title
          uri
          template {
            ... on Template_ExternalLink {
              templateName
              link {
                link
              }
            }
          }
          children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
            edges {
              node {
                id
                uri
                ... on Page {
                  id
                  slug
                  title
                  uri
                  content
                  children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
                    edges {
                      node {
                        id
                        uri
                        slug template {
                  ... on Template_Icon {
                    templateName
                    custom_icon {
                      iconColor
                      icon
                      backgroundColor
                    }
                    link {
                      link
                    }
                  }
                  ... on Template_ExternalLink {
                    templateName
                    link {
                      link
                    }
                  }
                }
                        ... on Page {
                          id
                          content
                          featuredImage {
                            node {
                              altText
                              sourceUrl
                              sizes
                            }
                          }
                        }
                      }
                    }
                  }
                  featuredImage {
                    node {
                      sizes
                      sourceUrl
                    }
                  }
                }
                template {
                  ... on Template_Icon {
                    templateName
                    custom_icon {
                      iconColor
                      icon
                      backgroundColor
                    }
                    link {
                      link
                    }
                  }
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
