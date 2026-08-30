import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`flags`,children:`Flags`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Image`}),` component supports displaying country flags. A special format for the `,(0,c.jsx)(t.code,{children:`value`}),` property is used for this purpose.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Formats:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`flag-xx`}),` — standard flag (where `,(0,c.jsx)(t.code,{children:`xx`}),` is the ISO 3166-1 alpha-2 country code)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`f-xx`}),` — compressed flag (where `,(0,c.jsx)(t.code,{children:`xx`}),` is the ISO 3166-1 alpha-2 country code)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic flag type detection by prefix`}),`
`,(0,c.jsx)(t.li,{children:`Support for all countries according to ISO 3166-1 alpha-2 standard`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Standard US flag -->
<Image value="flag-us" />

<!-- Compressed Germany flag -->
<Image value="f-de" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};