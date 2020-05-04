const path = require('path');

module.exports = (
  {
    actions,
    graphql,
    reporter,
  },
  {
    context,
    enabled,
    errorMessage = `Unable to create pages`,
    nodes,
    query,
    slugPrefix,
    customPages,
    templatePath,
  }
) => {
  if (!enabled) {
    return
  }
  const { createPage } = actions

  return graphql(query)
    .then(result => {
      if (result.errors) {
        reporter.panic(errorMessage, new Error(result.errors))
        throw new Error(result.errors)
      }
      nodes({ result }).forEach(({ node }) => {
        const custom =
          customPages ?
            customPages.find(c => c.slug === node.slug) : null;

        createPage({
          path: `${slugPrefix}${node.slug}`,
          component: require.resolve(
            custom ?
              path.join(process.cwd(), custom.template) :
              templatePath,
          ),
          context: context({ node }),
        })
      })
    })
}