import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/13. Icons`}),`
`,(0,c.jsx)(t.h1,{id:`icons`,children:`Icons`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Icons`}),` class is a centralized registry for registering, storing, and lazy-loading icons. It manages asset paths, supports dynamic imports, and synchronizes state across different parts of the application via a global object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

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

// 4. Synchronous retrieval
const fastPath = Icons.getAsync('search') // returns string or empty string
`})}),`
`,(0,c.jsx)(t.h2,{id:`lazy-loading`,children:`Lazy Loading`}),`
`,(0,c.jsxs)(t.p,{children:[`A key feature is the support for `,(0,c.jsx)(t.code,{children:`Promise`}),` and functions, allowing icons to be loaded only when they are actually needed, reducing the initial bundle size.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Registration via dynamic import
Icons.add('user', () => import('./user.svg'))

// Automatic wait for loading when calling get
const iconData = await Icons.get('user')
`})}),`
`,(0,c.jsx)(t.h2,{id:`global-synchronization`,children:`Global Synchronization`}),`
`,(0,c.jsxs)(t.p,{children:[`The tool automatically maintains data relevance in `,(0,c.jsx)(t.code,{children:`window.__UI_ICON`}),`. This allows icons to be registered in one place (e.g., during app initialization) and accessed instantly anywhere in the code.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Adding an icon relative to the global path
Icons.addGlobal('logo', 'logo.svg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};