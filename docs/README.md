# Using the AirFleet Theme

The AirFleet Theme Plugin supports automatic [ACF](https://www.advancedcustomfields.com/) data fetching and dynamic section building for pages. For every page built on WP the theme creates a visual representation automatically, given that the ACF scheme was built according to the recommended data structure.

> **This means that there's no need to build pages within Gatsby, just the required sections and components (assuming they don't already exist), and the theme will build them for you automagically.**

**Where can I access created pages?**

After building the project (or running `yarn develop`) the theme fetches all the pages on WordPress and creates them in the front-end using its dynamic template. Once created you can view a page under `[localhost:8000/[PAGE_SLUG]](http://localhost:8000/[PAGE_SLUG])` (meaning their WordPress provided slug). 

> The default `index.js` file in the `src/pages` has an example that renders a list of all created pages. 

**What does any of this mean?**

Go ahead and get started below in order to better understand what is the ACF data structure, how do we work with the Gatsby GraphQL, how to build page sections and much more.

## **Getting Started**

- [Understanding ACF](acf/understanding-acf.md)

- [Building Components](pages/building-components.md)

- [Building Sections](pages/building-sections.md)

- [Existing Components](pages/existing-components.md)

- [Fluid Image Component](pages/fluid-image-component.md)

- [Styling](pages/styling.md)


**[Next: Understanding ACF >](acf/understanding-acf.md)**