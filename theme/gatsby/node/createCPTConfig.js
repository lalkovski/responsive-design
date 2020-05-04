const path = require('path');

module.exports = (typeName) => {
  const upperName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
  const gqlName = `allWordpressWp${upperName}`;

  return {
    context: ({ node }) => ({ [typeName]: node, slug: node.slug }),
    enabled: true,
    errorMessage: `Unable to create WordPress ${typeName}`,
    nodes: ({ result }) => result.data[gqlName].edges,
    query: `
      query {
        ${gqlName}(sort: { fields: [date] }) {
          edges {
            node {
              id
              wordpress_id
              slug
              title
              content
              date
              modified
              type
              template
              status
              path
              link
            }
          }
        }
      }
    `,
    slugPrefix: `${typeName}/`,
    templatePath:
      path.join(
        process.cwd(),
        `src/templates/${typeName}/${typeName}.template.js`
      ),
  }
}
