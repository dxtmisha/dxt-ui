import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsxs)(t.p,{children:[`A top-level semantic container component designed to wrap the main content of a page. It uses the `,(0,c.jsx)(t.code,{children:`<main>`}),` tag by default.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Page provides capabilities for displaying main headlines, labels, descriptions, captions, and icons. The main purpose of the component is to designate the unique part of the document's content, which is critical for accessibility and SEO. The headline is rendered as `,(0,c.jsx)(t.code,{children:`<h1>`}),` by default.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Semantic wrapper for main content (`,(0,c.jsx)(t.code,{children:`<main>`}),` tag)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Support for main headlines (default `,(0,c.jsx)(t.code,{children:`<h1>`}),`), labels, descriptions, and captions`]}),`
`,(0,c.jsx)(t.li,{children:`Support for icons`}),`
`,(0,c.jsx)(t.li,{children:`Customizable layout and spacing`}),`
`,(0,c.jsx)(t.li,{children:`Full support for slots for content customization`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Wrapper for unique page content`}),`
`,(0,c.jsx)(t.li,{children:`Main application screen`}),`
`,(0,c.jsx)(t.li,{children:`Article or documentation page`}),`
`,(0,c.jsx)(t.li,{children:`Root element for routed components (views)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Page
  headline="Main Page Title"
  label="Category"
  description="Brief description of the page content"
>
  <p>Unique page content...</p>
</Page>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Page should be used once per page (or per active view) and should not include repeated navigation elements.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};