const glob = require("glob")
const path = require("path")

const getSectionFiles = () => {
  const sectionsPath = "src/sections/**/*.fragment.js";
  const themeSections = glob.sync(path.join(__dirname, `../../${sectionsPath}`));
  const localSections = glob.sync(path.join(process.cwd(), sectionsPath));

  return {theme: themeSections, local: localSections};
}

module.exports.getAvailableSections = () => {
  const sectionFiles = getSectionFiles();

  const sectionMapper = local =>
      section => ({ name: path.basename(section, ".fragment.js"), local });

  // This is in case there are no section files found anywhere - so the GraphQL query doesn't fail.
  if(!sectionFiles.theme.length && !sectionFiles.local.length)
    return [{ name: 'default', local: false }];

  return [
    ...sectionFiles.theme.map(sectionMapper(false)),
    ...sectionFiles.local.map(sectionMapper(true)),
  ]
}

module.exports.getSectionFragments = () => {
  const sectionFiles = getSectionFiles();

  return [...sectionFiles.theme, ...sectionFiles.local].reduce(
    (a, c) => a + ` \n ${require(path.resolve(c))}`, '');
}

module.exports.getPostTemplatePath = () => {
  const templatePath = 'src/templates/post/post.template.js';
  const localTemplatePath = path.join(process.cwd(), templatePath);

  const localTemplate = glob.sync(localTemplatePath);

  if(localTemplate && localTemplate.length)
    return localTemplatePath;

  return path.join(__dirname, `../../${templatePath}`);
}