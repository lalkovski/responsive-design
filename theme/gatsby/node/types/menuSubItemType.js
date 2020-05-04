const typeDefs = `
    type wordpress__wp_api_menus_menus_items implements Node {
      name: String
      slug: String
      items: [MenuSubItems]
    }
    type MenuSubItems {
      object_id: Int
      type: String
      title: String
      url: String
      target: String
      wordpress_children: [MenuSubItems]
    }
  `

module.exports = typeDefs;