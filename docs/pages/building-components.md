# Building Components

As specified before, the AirFleet Theme Plugin ships with the ability to dynamically build pages based on ACF data. All it needs are the sections to render in each page.

In order to build sections within our Gatsby site we will need to first create components for the sections to use. Building components is not mandatory, you can build all components within the sections themselves, but that is considered bad practice.

**Example**

> Under the `src/examples/components` folder you can find an example component for your reference.

## **Folder structure**

Each component should be built with the following structure:

```
src
|__components
   |__myComponent
	    |__myComponent.js
	    |__myComponent.fragment.js
	    |__index.js
```

- `[COMPONENT_NAME].js` (*e.g.* `title.js`)
The main component file - should hold the React Component logic.
- `[COMPONENT_NAME].fragment.js` (*e.g.* `title.fragment.js`)
The fragment file specifying the GraphQL query scheme for the component. This will tell Gatsby how to retrieve the needed data for the component from the GraphQL data tree ([read more about the ACF data in GraphQL](../acf/understanding-acf.md#acf-data-structure-in-graphql)).
- `index.js`
Usually contains one line to export the main React file (for better readability within `import` statements in other files). 
Example: `export { default } from './myComponent.js'`

## GraphQL fragment

Each component should have a function that return a string containing the partial GraphQL data scheme for the specific component.

> The fragment should be placed inside a `*.fragment.js` file.

**Example:**

```jsx
// title.fragment.js
const titleFragment = () => `
    title {
      title
    }
`

module.exports = titleFragment;
```

> [Use the GraphiQL query tool](../acf/understanding-acf.md#acf-data-structure-in-graphql) to better inspect the live data you receive from your connected WordPress site.

## React component

The React Component is essentially what will be imported and rendered by the section and should be the visual representation of your component. It should receive the required data in order to function as either `props` or `children`. 

> While using [prop-types](https://www.npmjs.com/package/prop-types) is not mandatory, it is best practice to annotate each component with its expected properties and their types.

**Example:**

```jsx
// title.js

import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, size }) => {
  const Header = `h${size}`;
  return <Header>{title}</Header>
}

Title.propTypes = {
  title: PropTypes.string.isRequired, // This can also be the children prop
  size: PropTypes.number,

Title.defaultProps = {
  size: 1,
}

export default Title;
```

**[< Previous](../acf/understanding-acf.md)** | **[Next: Building Sections >](building-sections.md)**