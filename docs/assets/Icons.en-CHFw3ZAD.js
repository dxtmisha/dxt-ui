import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/en/functional-basic/Classes/Icons - Icon Management"}),`
`,n.jsx(e.h1,{id:"icons-class",children:"Icons Class"}),`
`,n.jsxs(e.p,{children:["A static class for managing the application's icon registry. Provides a mechanism for registering, lazy-loading, and retrieving SVG icons. Icons are stored in the global ",n.jsx(e.code,{children:"window"})," object to be accessible across multiple library instances."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global Registry"})," — Uses ",n.jsx(e.code,{children:"window.__UI_ICON"})," to store icons, ensuring a single registry even with multiple instances."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lazy Loading"})," — The ",n.jsx(e.code,{children:"addLoad"}),' method registers an icon as "loading"; ',n.jsx(e.code,{children:"get"})," will wait for it to appear."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible Types"})," — An icon can be a string, a ",n.jsx(e.code,{children:"Promise"}),", or a function returning a ",n.jsx(e.code,{children:"Promise"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic URL"})," — Icons prefixed with ",n.jsx(e.code,{children:"@"})," are expanded into a full URL based on the base ",n.jsx(e.code,{children:"url"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsxs(e.p,{children:["The class is static and does not require instantiation. The base URL is configured via ",n.jsx(e.code,{children:"setUrl"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Change the base path to icons
Icons.setUrl('/assets/svg/')
`})}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(e.h3,{id:"registering-icons",children:"Registering Icons"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"add(index: string, file: IconsItem): void"})," — Registers an icon by name. ",n.jsx(e.code,{children:"file"})," can be a path string, a ",n.jsx(e.code,{children:"Promise"}),", or a factory function."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addLoad(index: string): void"}),' — Marks an icon as "in the process of loading" (',n.jsx(e.code,{children:"--LOAD--"})," marker). ",n.jsx(e.code,{children:"get"})," will wait for it."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addGlobal(index: string, file: string): void"})," — Registers an icon with a global URL (base URL + ",n.jsx(e.code,{children:"file"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addByList(list: Record<string, IconsItem>): void"})," — Bulk-registers icons from an object."]}),`
`]}),`
`,n.jsx(e.h3,{id:"retrieving-icons",children:"Retrieving Icons"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"async get(index: string, url?: string, wait?: number): Promise<string>"}),' — Returns the content or path of an icon by name. If the icon is marked as "loading", waits for it to appear (default timeout: 3 min).']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(index: string): boolean"})," — Checks whether an icon is registered."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getNameList(): string[]"})," — Returns a list of names of all registered icons."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getUrlGlobal(): string"})," — Returns the current base URL for icons."]}),`
`]}),`
`,n.jsx(e.h3,{id:"configuration",children:"Configuration"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setUrl(url: string): void"})," — Changes the base path for icon storage."]}),`
`]}),`
`,n.jsx(e.h2,{id:"loading-system",children:"Loading System"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Icons"})," class supports an asynchronous waiting mechanism. This allows you to request an icon before it is actually loaded or registered in the system."]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Wait Registration"}),": Using the ",n.jsx(e.code,{children:"addLoad(name)"})," method, an icon is marked with a special ",n.jsx(e.code,{children:"--LOAD--"})," marker. This tells the system that the icon will be available later."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Waiting Process"}),": If ",n.jsx(e.code,{children:"get(name)"})," is called for an icon that is in the loading state, the method will not return an error but will instead enter a waiting mode. It will check the registry every 320 ms."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Completion"}),": Once the icon is added via ",n.jsx(e.code,{children:"add(name, ...)"}),", all pending ",n.jsx(e.code,{children:"get"})," calls will automatically resolve and return the icon's content."]}),`
`]}),`
`,n.jsx(e.p,{children:"This mechanism is critical for distributed systems where components might request resources before the media database has finished initializing."}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"registering-and-using-icons",children:"Registering and Using Icons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Register as a string
Icons.add('arrow', '<svg>...</svg>')

// Register via a Promise (dynamic import)
Icons.add('user', import('./icons/user.svg'))

// Register via a factory function
Icons.add('star', () => import('./icons/star.svg'))

// Retrieve
const svgContent = await Icons.get('arrow')
`})}),`
`,n.jsx(e.h3,{id:"bulk-registration",children:"Bulk Registration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,n.jsx(e.h3,{id:"lazy-loading",children:"Lazy Loading"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Mark as loading
Icons.addLoad('dynamic-icon')

// Load and register it later
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() will wait until the icon appears in the registry
const svg = await Icons.get('dynamic-icon')
`})})]})}function g(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{g as default};
