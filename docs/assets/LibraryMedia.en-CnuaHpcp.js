import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryMedia - Media Connection Generator`}),`
`,(0,c.jsx)(n.h1,{id:`librarymedia-class`,children:`LibraryMedia Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryMedia`}),` class is responsible for generating connection files for media data (primarily icons) and the main style entry point for the design system project. This ensures that assets are indexed and optimized for use within the library.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icon Connection`}),` — Scans for icons and generates an asynchronous loading mechanism via dynamic imports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Style Integration`}),` — Connects the main project SCSS files to the build tool.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icon Manager Integration`}),` — Automatically registers assets with the global `,(0,c.jsx)(n.code,{children:`Icons`}),` manager from the functional library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Management`}),` — Supports method chaining and clean asset registration through automated code generation.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`LibraryMedia(items)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Triggers the generation of media and style connection files.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make`}),` method generates several files to integrate assets into the library:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-media-connection-mediats`,children:[`1. Media Connection (`,(0,c.jsx)(n.code,{children:`media.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Registers all icons from the `,(0,c.jsx)(n.code,{children:`icons`}),` directory using dynamic imports to optimize performance.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Generated Code Profile:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Name:`}),` `,(0,c.jsx)(n.code,{children:`[Design]MakeIcons`}),` (e.g., `,(0,c.jsx)(n.code,{children:`dxtMakeIcons`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Action:`}),` Adds icon paths to the `,(0,c.jsx)(n.code,{children:`Icons`}),` global registry.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'

// Dynamic imports for each icon
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-style-entry-stylets`,children:[`2. Style Entry (`,(0,c.jsx)(n.code,{children:`style.ts`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Serves as the main SCSS entry point, connecting project-specific styles to the library.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import '../styles/ProjectName/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};