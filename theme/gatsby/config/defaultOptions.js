module.exports = {
  wordpress: {
    hostingWPCOM: false,
    useACF: true,
    auth: {
      htaccess_sendImmediately: false,
    },
    verboseOutput: true,
  },
  posts: {
    /**
     * Set to true to create individual pages for each WordPress post.
     * The post data can still be queried with GraphQL, but the pages themselves will not be created in Gatsby.
     */
    enabled: false,
    /**
     * The base slug prefix for posts (e.g. set this to "blog/" to show all posts under "blog/" path).
     * WARNING: this will not change any of the links, you'll have to handle that either in the WordPress options or with custom code on Gatsby.
     */
    slugPrefix: ``,
  },
  pages: {
    /**
     * Set to true to create individual pages for each WordPress post.
     * The page data can still be queried with GraphQL, but the pages themselves will not be created in Gatsby.
     */
    enabled: true,
    /**
     * The base slug prefix for pages (e.g. set this to "page/" to show all pages under "page/" path).
     * WARNING: this will not change any of the links, you'll have to handle that either in the WordPress options or with custom code on Gatsby.
     */
    slugPrefix: ``,
    /**
     * Pages that should be excluded from the main dynamic template.
     * Best suited for pages you wish to create a custom template for and should not be rendered with the dynamic section template.
     * NOTE: Add an object containing both the slug of the page you with to replace and the required template.
     */
    customPages: [
      /**
       * Example for a custom page template:
       * {
       *   slug: `example-page`,
       *   template: `src/templates/page/example.template`,
       * }
       */
    ],
  },
  /**
   * A list of all Custom Post Types to fetch from WordPress and render automatically.
   * They each must have a template file associated with them (by name) in the `templates` folder in order for the build to pass.
   * (e.g. `/src/templates/resource/resource.template.js`)
   * NOTE: Name must be in singular (e.g. resource and not resources).
   */
  customPostTypes: [],
}
