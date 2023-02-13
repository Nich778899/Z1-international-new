
export const Category = `
menuItems(where: {id: 0, location: HCMS_MENU_HEADER}) {
    edges {
      node {
        id
        uri
        label  
      }
    }
  }
  
`