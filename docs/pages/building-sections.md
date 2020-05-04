# Building Sections

Sections are essentially the most important part of building pages. The theme dynamically fetches them and builds them into the page, so we don't need to take care of the page layout ourselves.

**The sections file structure is important as the theme expects a certain template in order to fetch and build the sections.**

> **Important Note: the `src/sections` folder must exist within the project in order for the build to work (even if it's empty)**

**Example**

> Under the `src/examples/sections` folder you can find an example section for your reference.

## Folder structure

Each section must be built with the following structure (similar to the component):

```
src
|__sections
   |__mySection
	    |__mySection.js
	    |__mySection.fragment.js
	    |__index.js
```

- `[SECTION_NAME].js` (*e.g.* `hero.js`)
The main section file - should hold the React Component logic for the section.
- `[SECTION_NAME].fragment.js` (*e.g.* `hero.fragment.js`)
The fragment file specifying the GraphQL query scheme for the section. This will tell Gatsby how to retrieve the needed data for the section from the GraphQL data tree ([read more about the ACF data in GraphQL](../acf/understanding-acf.md#acf-data-structure-in-graphql)). This will usually include other components queries in it.
- `index.js`
Usually contains one line to export the main React file (for better readability within `import` statements in other files). 
Example: `export { default } from './mySection.js'`

## Naming your section

Unlike the component, the name of your section (including the folder and files) is highly important. **It must match the last part of the GraphQL data type for that section.**

For example if you have a hero section defined in the GraphQL as `WordPressAcf_hero` the **name of the section** **must** **be** `hero` ([Read how to get the GraphQL data type name](../acf/understanding-acf.md#acf-data-structure-in-graphql)).

## GraphQL fragment

Each section should have a function that return a string containing the inline GraphQL fragment for the specific component.

Unlike components that only specify a partial subset of the query, in a section's query we will be using [GraphQL's inline fragments](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content) abilities to fetch the ACF flexible content data.  **It is important to know the name of the data type for the section in the GraphQL scheme ([Use the GraphiQL tool to get that](../acf/understanding-acf.md#acf-data-structure-in-graphql)).** 

> The fragment **must** be placed inside a `*.fragment.js` file.

**Example:**

```jsx
// hero.fragment.js
const titleFragment = require('../../components/title/title.fragment');

module.exports = `
    ... on WordPressAcf_hero { // <- Note the name of the field type in GraphQL

        ${titleFragment()} // <- The title component fragment

        ...
        // add more component fragments based on desired data
        ...

    }
`
```

> **Important Note:** unlike the component's fragment, the section's fragment does not export a ***function*** but a ***string***.


## React component

The React Component is essentially what will be imported and rendered dynamically by the page. It should be the compilation of all the section's components and a visual representation of your section's data. It should receive the required data in order to function through `props`. 

> While using [prop-types](https://www.npmjs.com/package/prop-types) is not mandatory, it is best practice to annotate each section with its expected properties and their types.

**Example:**

```jsx
// hero.js

import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/title';

const Hero = ({ title }) => {
  return (
    <>
      <Title {...title} />
    </>
  )
}

Hero.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string,
  }),
}

export default Hero;
```

**[< Previous](building-components.md)** | **[Next: Existing Components >](existing-components.md)**