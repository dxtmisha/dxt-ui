import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Vertical navigation rail component designed for primary navigation sidebars, application drawer rails, and mini navigation bars.`}),`
`,(0,c.jsx)(t.p,{children:`NavigationRail displays vertical navigation options for applications. It supports keyboard navigation, item focus, selection tracking, hierarchical menus, dividers, custom item attributes, and full accessibility ARIA roles.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Compact vertical layout for sidebars and navigation rails`}),`
`,(0,c.jsx)(t.li,{children:`Hierarchical dataset rendering with group and menu items`}),`
`,(0,c.jsx)(t.li,{children:`Keyboard navigation (arrows, Enter, Space) and focus management`}),`
`,(0,c.jsxs)(t.li,{children:[`Selection state tracking (`,(0,c.jsx)(t.code,{children:`v-model:selected`}),` or `,(0,c.jsx)(t.code,{children:`selected`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Section dividers and custom item attributes`}),`
`,(0,c.jsx)(t.li,{children:`Built-in accessibility with ARIA attributes`}),`
`,(0,c.jsxs)(t.li,{children:[`Support for external control mode (`,(0,c.jsx)(t.code,{children:`control`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Primary sidebar navigation in desktop web applications`}),`
`,(0,c.jsx)(t.li,{children:`Compact icon/label navigation rail in responsive layouts`}),`
`,(0,c.jsx)(t.li,{children:`Multi-level settings or workspace navigation panels`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<NavigationRail
  v-model:selected="selected"
  :list="[
    { label: 'Home', value: 'home', icon: 'home' },
    { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
    { label: 'Settings', value: 'settings', icon: 'settings' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};