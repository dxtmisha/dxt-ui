import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/Icons - Icon Management"}),`
`,n.jsx(i.h1,{id:"icons-class",children:"Icons Class"}),`
`,n.jsxs(i.p,{children:["A static class for managing the application's icon registry. Provides a mechanism for registering, lazy-loading, and retrieving SVG icons. Icons are stored in the global ",n.jsx(i.code,{children:"window"})," object to be accessible across multiple library instances."]}),`
`,n.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Global Registry"})," — Uses ",n.jsx(i.code,{children:"window.__UI_ICON"})," to store icons, ensuring a single registry even with multiple instances."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lazy Loading"})," — The ",n.jsx(i.code,{children:"addLoad"}),' method registers an icon as "loading"; ',n.jsx(i.code,{children:"get"})," will wait for it to appear."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Flexible Types"})," — An icon can be a string, a ",n.jsx(i.code,{children:"Promise"}),", or a function returning a ",n.jsx(i.code,{children:"Promise"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Automatic URL"})," — Icons prefixed with ",n.jsx(i.code,{children:"@"})," are expanded into a full URL based on the base ",n.jsx(i.code,{children:"url"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsxs(i.p,{children:["The class is static and does not require instantiation. The base URL is configured via ",n.jsx(i.code,{children:"setUrl"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Change the base path to icons
Icons.setUrl('/assets/svg/')
`})}),`
`,n.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(i.h3,{id:"registering-icons",children:"Registering Icons"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"add(index: string, file: IconsItem): void"})," — Registers an icon by name. ",n.jsx(i.code,{children:"file"})," can be a path string, a ",n.jsx(i.code,{children:"Promise"}),", or a factory function."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addLoad(index: string): void"}),' — Marks an icon as "in the process of loading" (',n.jsx(i.code,{children:"--LOAD--"})," marker). ",n.jsx(i.code,{children:"get"})," will wait for it."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addGlobal(index: string, file: string): void"})," — Registers an icon with a global URL (base URL + ",n.jsx(i.code,{children:"file"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addByList(list: Record<string, IconsItem>): void"})," — Bulk-registers icons from an object."]}),`
`]}),`
`,n.jsx(i.h3,{id:"retrieving-icons",children:"Retrieving Icons"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"async get(index: string, url?: string, wait?: number): Promise<string>"}),' — Returns the content or path of an icon by name. If the icon is marked as "loading", waits for it to appear (default timeout: 3 min).']}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"is(index: string): boolean"})," — Checks whether an icon is registered."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getNameList(): string[]"})," — Returns a list of names of all registered icons."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getUrlGlobal(): string"})," — Returns the current base URL for icons."]}),`
`]}),`
`,n.jsx(i.h3,{id:"configuration",children:"Configuration"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setUrl(url: string): void"})," — Changes the base path for icon storage."]}),`
`]}),`
`,n.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(i.h3,{id:"registering-and-using-icons",children:"Registering and Using Icons"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Register as a string
Icons.add('arrow', '<svg>...</svg>')

// Register via a Promise (dynamic import)
Icons.add('user', import('./icons/user.svg'))

// Register via a factory function
Icons.add('star', () => import('./icons/star.svg'))

// Retrieve
const svgContent = await Icons.get('arrow')
`})}),`
`,n.jsx(i.h3,{id:"bulk-registration",children:"Bulk Registration"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,n.jsx(i.h3,{id:"lazy-loading",children:"Lazy Loading"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`// Mark as loading
Icons.addLoad('dynamic-icon')

// Load and register it later
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() will wait until the icon appears in the registry
const svg = await Icons.get('dynamic-icon')
`})})]})}function g(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{g as default};
