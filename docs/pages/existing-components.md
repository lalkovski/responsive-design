# Existing Components

The AirFleet Theme Plugin ships with a few basic components.

| Name         | Path                           | Included components  | Included files                |
| ------------ | ------------------------------ | -------------------- | ----------------------------- |
| Author       | `src/components/author`        |                      | `Fragment`                    |
| Category     | `src/components/category`      |                      | `Fragment`                    |
| Page Details | `src/components/pageDetails`   | Author               | `Fragment`, `React Component` |
| Post Details | `src/components/postDetails`   | Author, Category     | `Fragment`, `React Component` |
| Main         | `src/components/layout/main`   |                      | `Fragment`, `React Component` |
| Header       | `src/components/layout/header` |                      | `Fragment`, `React Component` |
| Footer       | `src/components/layout/footer` |                      | `Fragment`, `React Component` |
| Layout       | `src/components/layout/layout` | Header, Footer, Main | `Fragment`, `React Component` |
| Fluid Image  | `src/components/fluidImage`    |                      | `Fragment`, `React Component` |

> _Please note not all existing items have React Components. This is because some are only used to fetch data through GraphQL within other components or sections._

You can take a look at the source code for each of these items under the `theme` folder in your project.

## Overriding Existing Components

Gatsby introduces **shadowing** in themes, meaning they allow users to replace existing files under the `src` folder within the theme with their own version.

In order for you to _"shadow"_ an existing file, you need to create a new file with the same name under a specific folder structure in your project. Gatsby will automatically replace your version of the file with the original one.

For example, if you'd like to replace the default `Header` that is rendered by the `Layout` component, simply create the following file: `src/@codersclan/gatsby-theme-airfleet/components/layout/header.js` and insert your own implementation of the original header. Gatsby will favor your local version over the original when building the project.

> **[You can read more about shadowing in Gatsby's Documentation](https://www.gatsbyjs.org/docs/themes/shadowing/)**

**[< Previous](building-sections.md)** | **[Next: Fluid Image Component >](fluid-image-component.md)**