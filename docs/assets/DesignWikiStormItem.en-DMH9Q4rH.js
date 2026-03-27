import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignWikiStormItem - Component IDE Metadata Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`designwikistormitem-class`,children:`DesignWikiStormItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` class is a granular resolver responsible for extracting, analyzing, and formatting metadata for a single UI component. It acts as the bridge between internal Storybook-oriented documentation and the `,(0,c.jsx)(n.code,{children:`web-types.json`}),` format, ensuring that every property and description is correctly mapped for IDE IntelliSense.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Storeybook-to-WebTypes Mapping`}),` — Automatically converts `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),` objects into JetBrains-compatible tag definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Module Resolution`}),` — Calculates the correct module paths for components to support "Jump to Definition" in IDEs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Context-Aware Documentation`}),` — Preserves and formats component descriptions, property types, and default values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AST-Like Data Retrieval`}),` — Programmatically imports and parses `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` files to retrieve live component metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Attribute Synthesis`}),` — Iteratively builds attribute lists by resolving complex types into human-readable IDE strings.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize the resolver by providing the project context, the structural path, and the component's library metadata.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`project: string`}),` — The name of the project (e.g., `,(0,c.jsx)(n.code,{children:`'@dxtmisha/ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[]`}),` — Segments of the file system path leading to the component folder.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: LibraryData`}),` — Core metadata of the component (name, alias, directory).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information-acquisition`,children:`Information Acquisition`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): WebTypesTagItem | undefined`}),` — Returns the consolidated tag definition containing the name, description, source, and attributes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttribute(item: WikiStorybookProp): WebTypesAttributeItem`}),` — Transforms a single Storybook property into a Web-Types attribute definition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttributes(): WebTypesAttributes`}),` — Compiles the full list of attributes for the component.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Promise<this>`}),` — Asynchronously initializes the internal `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),` instance by loading the component's documentation data.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-metadata-extraction-flow`,children:`The Metadata Extraction Flow`}),`
`,(0,c.jsx)(n.p,{children:`When the resolver is initialized and queried, it follows a structured data pipeline:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Wiki Data Loading (`,(0,c.jsx)(n.code,{children:`initWiki`}),`)`]}),`: It resolves the file path to the component's `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` and performs a dynamic import to fetch live metadata (props, defaults, design tokens).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Tag Synthesis (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: It constructs the IDE tag name by combining the design system alias with the internal component name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Source Mapping`}),`: It defines the `,(0,c.jsx)(n.code,{children:`module`}),` and `,(0,c.jsx)(n.code,{children:`symbol`}),` properties, allowing IDEs to link the metadata back to the actual source code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Attribute Compilation (`,(0,c.jsx)(n.code,{children:`getAttributes`}),`)`]}),`: It traverses every property defined in the wiki, resolving its documentation comment, TypeScript type, and default value into a standardized JSON structure.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`role-in-the-ide-engine`,children:`Role in the IDE Engine`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` is the "workhorse" of the metadata generation suite. While `,(0,c.jsx)(n.code,{children:`DesignWikiStorm`}),` manages the overall file structure, this class handles the complexity of individual component analysis, ensuring that specialized UI logic is accurately represented in a format that development tools can understand.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};