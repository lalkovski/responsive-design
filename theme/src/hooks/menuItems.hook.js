import { useStaticQuery, graphql } from "gatsby"

export const useMenuItems = () => {
  const { menuItems } = useStaticQuery(
    graphql`
        query {
            menuItems: allWordpressWpApiMenusMenusItems {
                nodes {
                    name
                    slug
                    items {
                        object_id
                        type
                        title
                        target
                        url
                        wordpress_children {
                            object_id
                            type
                            title
                            url
                            target
                            wordpress_children {
                                object_id
                                type
                                title
                                url
                                target
                            }
                        }
                    }
                }
            }
        }
    `
  )
  return menuItems.nodes;
}