# Styling

Currently, there is no mandatory styling technique required in order to use the theme. It's best practice to use [SCSS/Sass](https://sass-lang.com/) as it would allow you to easily override existing components and auto-renderd pages.

In future versions we intend to add support for [Styled Components](https://styled-components.com/) and other In-JS libraries.

## Styling pages

When the page is rendered it has 3 attributes that allow you easily access it via your CSS query:

- ID
- Class
- Datatype

All page data is fetched as from GraphQL. If you're uncertain about a certain field you can use the [GraphiQL tool](../acf/understanding-acf.md#acf-data-structure-in-graphql) to query the page data.

### ID

Each page is rendered with its WordPress slug as it's ID. The slug is usually the title of the page in a URL friendly manner. E.g. is the page in named `Contact Us` its slug would be `contact-us`.

### Class

The page is rendered with two basic classes to identify it:

- `PAGE_[SLUG]` - E.g. `PAGE_contact-us`.
- `[GraphQL type]` - E.g. `wordpress__PAGE`.

### Datatype

The GraphQL data type is also rendered under a custom attributed called `datatype`. E.g. `datatype="wordpress__PAGE"`.

---

## Styling sections

When the section are rendered they are automatically created under a `<section />` HTML tag. The tag is accompanied by 3 attributes:

- ID
- Class
- Datatype

All section data is fetched as from GraphQL. If you're uncertain about a certain field you can use the [GraphiQL tool](https://www.notion.so/codersclan/Understanding-ACF-c27af56acedd4995ae02608a6f04c5d2#a6a3ee0c74c148818bed7326ab6d1c9b) to query the data.

### ID

Each section is rendered with it's GraphQL unique idenfier as it's ID attribute. You can use the GraphiQL query tool to see what is a certain section's ID. E.g. `id="8802ab7b-3c8d-5988-89ef-2b9360bcff8b"`. 

### Class

For each section the GraphQL type is rendered as it's class. E.g. `WordPressAcf_hero`.

**[How to get a section's GraphQL data type](building-sections.md#graphql-fragment)**

### Datatype

The GraphQL type is also rendered under a custom attributed called `datatype`. E.g. `datatype="WordPressAcf_hero"`.

**[< Previous](fluid-image-component.md)**