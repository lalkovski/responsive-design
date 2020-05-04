# Fluid Image Component

The AirFleet Theme Plugin ships with support for local image files through [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) library. It is done through a component called `fluidImage`. The theme automatically detects image files on the WordPress side and creates a local version in the Gatsby site to allow usage of smart image loading and responsiveness provided by the [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) library.

**Example**

The `fluidImage` component ships with both a React component, and a fragment file. In the following example we will show how to use both within a section.

```jsx
// src/sections/example/example.fragment.js

const fluidImageFragment = require('../../../src/components/fluidImage/fluidImage.fragment');

module.exports = `
    ... on WordPressAcf_example {

        illustration { # --> example of a containing field name, could also be icon or anything else.
           ${fluidImageFragment()}
        }
				
		# other fields to retrieve
    }
`
```

```jsx
// src/sections/example/example.js

import React from 'react';
import PropTypes from 'prop-types';

import FluidImage from "../../theme/src/components/fluidImage";

... // --> other imports

const Example = ({ illustration, ...props }) => {
  return (
    <>
      ...

      {illustration.image && <FluidImage {...illustration.image} />}
			
      ...		
    </>
  )
}

Example.propTypes = {
  illustration: PropTypes.shape({
    image: PropTypes.object
  }),

  ... // --> other props definition
}

export default Example;
```

**[< Previous](existing-components.md)** | **[Next: Styling >](styling.md)**