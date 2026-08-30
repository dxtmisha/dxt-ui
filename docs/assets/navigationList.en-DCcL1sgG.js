import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Specialized navigation list component for building sidebars, dropdown menus, and application top bars.`}),`
`,(0,c.jsx)(t.p,{children:`NavigationList extends the core List component, optimized for app navigation. It renders NavigationItem elements and provides hierarchical data support, full keyboard navigation, real-time search with text highlighting, vertical/horizontal axis orientation, and performance-optimized lite rendering mode.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Core list orchestration inherited from List`}),`
`,(0,c.jsx)(t.li,{children:`Renders specialized NavigationItem elements`}),`
`,(0,c.jsx)(t.li,{children:`Full keyboard navigation with arrow keys and shortcuts`}),`
`,(0,c.jsx)(t.li,{children:`Real-time search filtering and match highlighting`}),`
`,(0,c.jsx)(t.li,{children:`Hierarchical tree structure with group headers and sub-menus`}),`
`,(0,c.jsx)(t.li,{children:`Axis orientation support (vertical and horizontal)`}),`
`,(0,c.jsx)(t.li,{children:`Automatic section divider rendering`}),`
`,(0,c.jsx)(t.li,{children:`Performance-optimized lite mode for large dataset lists`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Primary sidebar application navigation`}),`
`,(0,c.jsx)(t.li,{children:`Navigation dropdown menus and section drawers`}),`
`,(0,c.jsx)(t.li,{children:`Fast-access menu panels and view switchers`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<NavigationList
  :list="[
    { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
    { label: 'Analytics', value: 'analytics', icon: 'insights' },
    { label: 'Settings', value: 'settings', icon: 'settings' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};