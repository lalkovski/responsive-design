const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

module.exports = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    wordpress__wp_media: {
      localFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.source_url;

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}