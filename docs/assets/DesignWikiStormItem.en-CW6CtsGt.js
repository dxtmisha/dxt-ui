import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/DesignWikiStormItem - Component IDE Metadata Resolver"}),`
`,e.jsx(t.h1,{id:"designwikistormitem-class",children:"DesignWikiStormItem Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DesignWikiStormItem"})," class is a granular resolver responsible for extracting, analyzing, and formatting metadata for a single UI component. It acts as the bridge between internal Storybook-oriented documentation and the ",e.jsx(t.code,{children:"web-types.json"})," format, ensuring that every property and description is correctly mapped for IDE IntelliSense."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Storeybook-to-WebTypes Mapping"})," — Automatically converts ",e.jsx(t.code,{children:"WikiStorybook"})," objects into JetBrains-compatible tag definitions."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dynamic Module Resolution"}),' — Calculates the correct module paths for components to support "Jump to Definition" in IDEs.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Context-Aware Documentation"})," — Preserves and formats component descriptions, property types, and default values."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"AST-Like Data Retrieval"})," — Programmatically imports and parses ",e.jsx(t.code,{children:"wikiData.ts"})," files to retrieve live component metadata."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Attribute Synthesis"})," — Iteratively builds attribute lists by resolving complex types into human-readable IDE strings."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(t.p,{children:"Initialize the resolver by providing the project context, the structural path, and the component's library metadata."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"project: string"})," — The name of the project (e.g., ",e.jsx(t.code,{children:"'@dxtmisha/ui'"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"path: string[]"})," — Segments of the file system path leading to the component folder."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"data: LibraryData"})," — Core metadata of the component (name, alias, directory)."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"information-acquisition",children:"Information Acquisition"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"get(): WebTypesTagItem | undefined"})," — Returns the consolidated tag definition containing the name, description, source, and attributes."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getAttribute(item: WikiStorybookProp): WebTypesAttributeItem"})," — Transforms a single Storybook property into a Web-Types attribute definition."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getAttributes(): WebTypesAttributes"})," — Compiles the full list of attributes for the component."]}),`
`]}),`
`,e.jsx(t.h3,{id:"control",children:"Control"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"init(): Promise<this>"})," — Asynchronously initializes the internal ",e.jsx(t.code,{children:"WikiStorybook"})," instance by loading the component's documentation data."]}),`
`]}),`
`,e.jsx(t.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(t.h3,{id:"the-metadata-extraction-flow",children:"The Metadata Extraction Flow"}),`
`,e.jsx(t.p,{children:"When the resolver is initialized and queried, it follows a structured data pipeline:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Wiki Data Loading (",e.jsx(t.code,{children:"initWiki"}),")"]}),": It resolves the file path to the component's ",e.jsx(t.code,{children:"wikiData.ts"})," and performs a dynamic import to fetch live metadata (props, defaults, design tokens)."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Tag Synthesis (",e.jsx(t.code,{children:"get"}),")"]}),": It constructs the IDE tag name by combining the design system alias with the internal component name."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Source Mapping"}),": It defines the ",e.jsx(t.code,{children:"module"})," and ",e.jsx(t.code,{children:"symbol"})," properties, allowing IDEs to link the metadata back to the actual source code."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Attribute Compilation (",e.jsx(t.code,{children:"getAttributes"}),")"]}),": It traverses every property defined in the wiki, resolving its documentation comment, TypeScript type, and default value into a standardized JSON structure."]}),`
`]}),`
`,e.jsx(t.h3,{id:"role-in-the-ide-engine",children:"Role in the IDE Engine"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"DesignWikiStormItem"}),' is the "workhorse" of the metadata generation suite. While ',e.jsx(t.code,{children:"DesignWikiStorm"})," manages the overall file structure, this class handles the complexity of individual component analysis, ensuring that specialized UI logic is accurately represented in a format that development tools can understand."]})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
