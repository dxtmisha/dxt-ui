import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryExport - Export Generator`}),`
`,(0,c.jsx)(n.h1,{id:`libraryexport-class`,children:`LibraryExport Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` class is responsible for aggregating and generating a unified export file for the library. It scans designated directories for TypeScript and Vue files, creating a single entry point that simplifies library imports.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Export Generation`}),` — creates a comprehensive entry point for all exportable components and utilities.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart File Identification`}),` — automatically handles exports for `,(0,c.jsx)(n.code,{children:`.ts`}),` files (using `,(0,c.jsx)(n.code,{children:`export *`}),`) and `,(0,c.jsx)(n.code,{children:`.vue`}),` files (using `,(0,c.jsx)(n.code,{children:`import`}),` then `,(0,c.jsx)(n.code,{children:`export const`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Style Integration`}),` — automatically includes global CSS or SCSS styles if they exist.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Filtering`}),` — excludes test files (`,(0,c.jsx)(n.code,{children:`.test.`}),`) and files marked with the `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),` flag.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize and run the export generator using the `,(0,c.jsx)(n.code,{children:`make`}),` method.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`generation`,children:`Generation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — the main entry point that triggers the file discovery and generation process.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example-of-generated-output`,children:`Example of Generated Output`}),`
`,(0,c.jsx)(n.p,{children:`The generated file aggregate imports and exports like this:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};