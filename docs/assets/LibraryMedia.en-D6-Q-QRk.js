import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryMedia - Media Connection Generator`}),`
`,(0,c.jsx)(t.h1,{id:`librarymedia-class`,children:`LibraryMedia Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryMedia`}),` class is responsible for generating connection files for media data (primarily icons) and the main style entry point for the design system project. This ensures that assets are indexed and optimized for use within the library.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icon Connection`}),` — Scans for icons and generates an asynchronous loading mechanism via dynamic imports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Integration`}),` — Connects the main project SCSS files to the build tool.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icon Manager Integration`}),` — Automatically registers assets with the global `,(0,c.jsx)(t.code,{children:`Icons`}),` manager from the functional library.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lifecycle Management`}),` — Supports method chaining and clean asset registration through automated code generation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`LibraryMedia(items)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — an object for working with the list of components and managing file writes.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Triggers the generation of media and style connection files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`make`}),` method generates several files to integrate assets into the library:`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-media-connection-mediats`,children:[`1. Media Connection (`,(0,c.jsx)(t.code,{children:`media.ts`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Registers all icons from the `,(0,c.jsx)(t.code,{children:`icons`}),` directory using dynamic imports to optimize performance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Generated Code Profile:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Name:`}),` `,(0,c.jsx)(t.code,{children:`[Design]MakeIcons`}),` (e.g., `,(0,c.jsx)(t.code,{children:`dxtMakeIcons`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Action:`}),` Adds icon paths to the `,(0,c.jsx)(t.code,{children:`Icons`}),` global registry.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'

// Dynamic imports for each icon
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-style-entry-stylets`,children:[`2. Style Entry (`,(0,c.jsx)(t.code,{children:`style.ts`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Serves as the main SCSS entry point, connecting project-specific styles to the library.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example Structure:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import '../styles/ProjectName/main.scss'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};