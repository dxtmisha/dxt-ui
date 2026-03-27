import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Icons`}),`
`,(0,c.jsx)(n.h1,{id:`icons`,children:`Icons`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Icons`}),` class is a centralized registry for registering, storing, and lazy-loading icons. It manages asset paths, supports dynamic imports, and synchronizes state across different parts of the application via a global object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// 1. Setting the base path (default is /icons/)
Icons.setUrl('/assets/icons/')

// 2. Registering icons
Icons.add('home', 'home-icon.svg')
Icons.addByList({
  'search': 'search.svg',
  'close': 'close.svg'
})

// 3. Checking and retrieving
if (Icons.is('home')) {
  const path = await Icons.get('home')
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`lazy-loading`,children:`Lazy Loading`}),`
`,(0,c.jsxs)(n.p,{children:[`A key feature is the support for `,(0,c.jsx)(n.code,{children:`Promise`}),` and functions, allowing icons to be loaded only when they are actually needed, reducing the initial bundle size.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Registration via dynamic import
Icons.add('user', () => import('./user.svg'))

// Automatic wait for loading when calling get
const iconData = await Icons.get('user')
`})}),`
`,(0,c.jsx)(n.h2,{id:`global-synchronization`,children:`Global Synchronization`}),`
`,(0,c.jsxs)(n.p,{children:[`The tool automatically maintains data relevance in `,(0,c.jsx)(n.code,{children:`window.__UI_ICON`}),`. This allows icons to be registered in one place (e.g., during app initialization) and accessed instantly anywhere in the code.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Adding an icon relative to the global path
Icons.addGlobal('logo', 'logo.svg')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};