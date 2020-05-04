const { getSectionFragments } = require('../helpers/utils');
const pageDetailsFragment = require('../../src/components/pageDetails/pageDetails.fragment');

module.exports = ({ enabled, slugPrefix, customPages }) => {
  return {
    context: ({ node }) => ({ page: node }),
    enabled,
    errorMessage: `Unable to create WordPress pages`,
    nodes: ({ result }) => result.data.allWordpressPage.edges,
    query: `
      query GetAllPages{
        allWordpressPage(sort: { fields: [date] }) {
          edges {
            node {
              slug
              ${pageDetailsFragment()}
              children {
                __typename
                id
                ${getSectionFragments()}
              }
            }
          }
        }
      }
    `,
    slugPrefix,
    customPages,
    templatePath: `../../src/templates/page/page.template`,
  }
}
