import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/LibraryAiWikiItem - AI Wiki Component Handler`}),`
`,(0,c.jsx)(n.h1,{id:`libraryaiwikiitem-class`,children:`LibraryAiWikiItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),` class is a wrapper around component data, specifically designed to handle AI Wiki-related operations for a single component. It provides methods to check for the existence of AI Wiki files, generate component codes, and create import strings.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Status Checking`}),`: Determines if a component has an associated AI Wiki implementation file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Import Generation`}),`: Creates correct TypeScript import strings for the AI Wiki component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Management`}),`: Handles the resolution of paths to the component's AI Wiki file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),` by providing a `,(0,c.jsx)(n.code,{children:`LibraryData`}),` object.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: LibraryData`}),` — An object containing component metadata (name, design, directory, etc.).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

const componentData = {
  name: 'button',
  design: 'dxt',
  alias: 'dxt.button',
  codeFull: 'DxtButton',
  dir: 'DxtButton'
}

const aiItem = new LibraryAiWikiItem(componentData)

// Check status
if (aiItem.isAiWiki()) {
  const importStr = aiItem.getImport()
  // "import DxtButton from '../../components/DxtButton/DxtButtonAiWiki.vue'"
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`state`,children:`State`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isAiWiki(): boolean`}),` — Checks if the corresponding `,(0,c.jsx)(n.code,{children:`*AiWiki.vue`}),` file exists in the component's directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — Returns the full code identifier of the component (e.g., `,(0,c.jsx)(n.code,{children:`DxtButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentFileNameAiWiki(): string`}),` — Returns the expected filename for the AI Wiki implementation (e.g., `,(0,c.jsx)(n.code,{children:`DxtButtonAiWiki.vue`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImport(): string`}),` — Generates a TypeScript import string for the AI Wiki component.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};