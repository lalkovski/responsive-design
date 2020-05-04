import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component'

import { useSiteMetadata } from "../../hooks/siteMetadata.hook"

const ACF_PREFIX = "WordPressAcf_";

// In order for Loadable Component to use webpack's code splitting abilities (and allow full dynamic import),
// we need to specify a folder for webpack to look for section files.
// We've created aliases in Webback for both available section folders (theme and local) to easily access them through React.
const Loadable = ({ name, local, ...rest }) => {
  const ThemeSection = loadable(() => import(`Sections/${name}/index.js`));
  const LocalSection = loadable(() => import(`LocalSections/${name}/index.js`));

  if(local)
    return <LocalSection {...rest} />;

  return <ThemeSection {...rest} />
}

const DynamicSection = props => {
  const { availableSections } = useSiteMetadata();

  const name = props.__typename.replace(ACF_PREFIX, '');
  const sectionData = availableSections.find(s => s.name === name);

  if(!sectionData) return null; // No section available, no need to return anything

  return <Loadable {...sectionData} {...props} />
}

const SectionsLoader = ({ sections }) => {
  return (
      <>
        {
          sections.map(section =>
            <section
              id={section.id}
              className={section.__typename}
              datatype={section.__typename}
              key={section.id}
            >
              <DynamicSection {...section} />
            </section>
          )
        }
      </>
  )
};

SectionsLoader.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        __typename: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
}

export default SectionsLoader;

