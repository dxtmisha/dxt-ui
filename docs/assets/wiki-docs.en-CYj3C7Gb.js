import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Documentation Generation (Wiki & IDE)`}),`
`,(0,c.jsx)(t.h1,{id:`forming-public-documentation-and-ide-support`,children:`Forming Public Documentation and IDE Support`}),`
`,(0,c.jsx)(t.p,{children:`Writing and maintaining documentation manually (Storybook, MDX, IDE tooltips) for a design system containing thousands of components and their states is a monumental task that often leads to a disconnect between code and docs.`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` package automates this process entirely by generating materials directly from component metadata.`]}),`
`,(0,c.jsx)(t.h2,{id:`ide-integration-designwikistorm`,children:`IDE Integration (DesignWikiStorm)`}),`
`,(0,c.jsxs)(t.p,{children:[`To ensure the best developer experience when using the DXT UI library in editors like IntelliJ IDEA or WebStorm, the scripts package generates a `,(0,c.jsx)(t.code,{children:`web-types.json`}),` file.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`What DesignWikiStorm does:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Analysis:`}),` The class scans the entire component library.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Metadata Extraction:`}),` It extracts all available HTML tags, props, events (emits), slots, and CSS modifiers from the abstract logic and `,(0,c.jsx)(t.code,{children:`properties.json`}),` files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Formatting:`}),` The script formats this data into the standard Web-Types schema.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result:`}),` A developer importing DXT UI into their project instantly receives IntelliSense (code autocomplete, prop type hints, and hover documentation) directly in their editor, without needing to open a browser.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`interactive-documentation-designwiki`,children:`Interactive Documentation (DesignWiki)`}),`
`,(0,c.jsx)(t.p,{children:`In addition to IDE support, the scripts automate the creation of user documentation for Storybook and internal Wikis.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Generation Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` class, along with `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`, takes the component configuration and automatically generates `,(0,c.jsx)(t.code,{children:`.stories.ts`}),` (interactive examples) and `,(0,c.jsx)(t.code,{children:`.mdx`}),` (text instructions) files.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The documentation always reflects the actual state of the code because it is built from the exact same `,(0,c.jsx)(t.code,{children:`properties.json`}),` used to generate the components. Prop tables, available values, and design tokens are updated automatically.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`main-commands`,children:`Main Commands`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-wiki-storm`})}),` — scans all components and builds the `,(0,c.jsx)(t.code,{children:`web-types.json`}),` file to support autocomplete in JetBrains IDEs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-component-wiki`})}),` — triggers the generation of Storybook components and MDX files for the visual component catalog.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};