import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A component for managing content rendering exclusively on the client side.`}),`
`,(0,c.jsx)(t.p,{children:`ClientOnly is an essential tool for ensuring compatibility with Server-Side Rendering (SSR) and Static Site Generation (SSG). It prevents code that depends on browser APIs (such as window or document) from executing on the server side, thereby avoiding hydration mismatch errors.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Deferred rendering until the component is mounted in the browser`}),`
`,(0,c.jsx)(t.li,{children:`Prevention of hydration mismatch errors`}),`
`,(0,c.jsx)(t.li,{children:`Ability to force enable/disable via the clientOnly property`}),`
`,(0,c.jsx)(t.li,{children:`Easy integration of any third-party libraries that do not support SSR`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Interactive maps and charts`}),`
`,(0,c.jsx)(t.li,{children:`Components using localStorage or other Web APIs`}),`
`,(0,c.jsx)(t.li,{children:`Third-party widgets requiring the window object`}),`
`,(0,c.jsx)(t.li,{children:`Performance optimization in SSR environments`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ClientOnly } from 'your-library'
<\/script>

<template>
<ClientOnly>
  <!-- This content will only appear in the browser -->
  <MyBrowserSpecificComponent />
</ClientOnly>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`ClientOnly is an indispensable helper when developing modern isomorphic applications.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};