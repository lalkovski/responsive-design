/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const SECTIONS_PATH = "src/sections";

const createPages = require('./gatsby/node/createPages')
const createPagesConfig = require('./gatsby/node/createPagesConfig')
const createPostsConfig = require('./gatsby/node/createPostsConfig')
const createCustomPostTypesConfig = require('./gatsby/node/createCPTConfig');

const menuSubItemType = require('./gatsby/node/types/menuSubItemType');

exports.createPages = async ({ graphql, actions, reporter }, options) => {
    const { posts, pages, customPostTypes } = options

    await createPages({ graphql, actions, reporter }, createPagesConfig(pages))
    await createPages({ graphql, actions, reporter }, createPostsConfig(posts))

    if(customPostTypes && customPostTypes.length)
      for(const postType of customPostTypes)
        await createPages({ graphql, actions, reporter }, createCustomPostTypesConfig(postType))
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const types = [menuSubItemType];

  createTypes(types);
}

// Add both built-in theme and local dynamic sections as aliases into webpack to make loading them later easier
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                Sections: path.resolve(__dirname, SECTIONS_PATH),
                LocalSections: path.resolve(process.cwd(), SECTIONS_PATH),
            }
        },
    })
}

