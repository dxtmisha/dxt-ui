import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/LibraryMedia - Media Connection Generator"}),`
`,e.jsx(n.h1,{id:"librarymedia-class",children:"LibraryMedia Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryMedia"})," class is responsible for generating connection files for media data (primarily icons) and the main style entry point for the design system project. This ensures that assets are indexed and optimized for use within the library."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Connection"})," — Scans for icons and generates an asynchronous loading mechanism via dynamic imports."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Integration"})," — Connects the main project SCSS files to the build tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Manager Integration"})," — Automatically registers assets with the global ",e.jsx(n.code,{children:"Icons"})," manager from the functional library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Management"})," — Supports method chaining and clean asset registration through automated code generation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"LibraryMedia(items)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: LibraryItems"})," — an object for working with the list of components and managing file writes."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Triggers the generation of media and style connection files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"generated-files-structure",children:"Generated Files Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make"})," method generates several files to integrate assets into the library:"]}),`
`,e.jsxs(n.h3,{id:"1-media-connection-mediats",children:["1. Media Connection (",e.jsx(n.code,{children:"media.ts"}),")"]}),`
`,e.jsxs(n.p,{children:["Registers all icons from the ",e.jsx(n.code,{children:"icons"})," directory using dynamic imports to optimize performance."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generated Code Profile:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name:"})," ",e.jsx(n.code,{children:"[Design]MakeIcons"})," (e.g., ",e.jsx(n.code,{children:"dxtMakeIcons"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Adds icon paths to the ",e.jsx(n.code,{children:"Icons"})," global registry."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'

// Dynamic imports for each icon
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,e.jsxs(n.h3,{id:"2-style-entry-stylets",children:["2. Style Entry (",e.jsx(n.code,{children:"style.ts"}),")"]}),`
`,e.jsx(n.p,{children:"Serves as the main SCSS entry point, connecting project-specific styles to the library."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import '../styles/ProjectName/main.scss'
`})})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
