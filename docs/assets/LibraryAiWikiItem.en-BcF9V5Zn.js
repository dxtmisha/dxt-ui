import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryAiWikiItem - AI Wiki Component Handler`}),`
`,(0,c.jsx)(t.h1,{id:`libraryaiwikiitem-class`,children:`LibraryAiWikiItem Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryAiWikiItem`}),` class is a wrapper around component data, specifically designed to handle AI Wiki-related operations for a single component. It provides methods to check for the existence of AI Wiki files, generate component codes, and create import strings.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Status Checking`}),`: Determines if a component has an associated AI Wiki implementation file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Import Generation`}),`: Creates correct TypeScript import strings for the AI Wiki component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Management`}),`: Handles the resolution of paths to the component's AI Wiki file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize `,(0,c.jsx)(t.code,{children:`LibraryAiWikiItem`}),` by providing a `,(0,c.jsx)(t.code,{children:`LibraryData`}),` object.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: LibraryData`}),` — An object containing component metadata (name, design, directory, etc.).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`state`,children:`State`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isAiWiki(): boolean`}),` — Checks if the corresponding `,(0,c.jsx)(t.code,{children:`*AiWiki.vue`}),` file exists in the component's directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode(): string`}),` — Returns the full code identifier of the component (e.g., `,(0,c.jsx)(t.code,{children:`DxtButton`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentFileNameAiWiki(): string`}),` — Returns the expected filename for the AI Wiki implementation (e.g., `,(0,c.jsx)(t.code,{children:`DxtButtonAiWiki.vue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImport(): string`}),` — Generates a TypeScript import string for the AI Wiki component.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};