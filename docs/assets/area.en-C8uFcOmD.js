import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A component for dynamic content switching based on the area context.`}),`
`,(0,c.jsx)(t.p,{children:`Area acts as a smart slot switcher. It retrieves the current area value from the injection context or uses a default value. The component then renders the slot whose name matches the current area value. If no matching slot is found, the default slot is displayed.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic slot selection based on the injected area value`}),`
`,(0,c.jsxs)(t.li,{children:[`Ability to specify a default area via the `,(0,c.jsx)(t.code,{children:`areaDefault`}),` property`]}),`
`,(0,c.jsx)(t.li,{children:`Support for nested areas and context inheritance`}),`
`,(0,c.jsx)(t.li,{children:`Seamless integration into complex layouts (e.g., Window)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Creating dynamic headers and footers`}),`
`,(0,c.jsx)(t.li,{children:`Adapting content based on the component's placement`}),`
`,(0,c.jsx)(t.li,{children:`Organizing complex layouts with dynamic content zones`}),`
`,(0,c.jsx)(t.li,{children:`Implementing extension slots in base components`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Area area-default="header">
  <template #header>
    Header Content
  </template>
  <template #footer>
    Footer Content
  </template>
  <template #default>
    Default Content
  </template>
</Area>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Area is an essential tool for creating flexible and extensible interfaces, allowing components to react to their environment.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};