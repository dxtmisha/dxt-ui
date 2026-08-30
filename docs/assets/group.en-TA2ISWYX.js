import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It is a semantic alias for the Block component, with a default header level of h4.`}),`
`,(0,c.jsx)(t.p,{children:`Group provides a standardized way to organize information within a page or another component, ensuring a consistent visual hierarchy. It inherits all the capabilities of the Block component, including support for icons, captions, and slot-based customization.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Standardized grouping of content using `,(0,c.jsx)(t.code,{children:`<div>`}),` tag`]}),`
`,(0,c.jsxs)(t.li,{children:[`Support for titles (`,(0,c.jsx)(t.code,{children:`h4`}),` by default), labels, descriptions, and captions`]}),`
`,(0,c.jsx)(t.li,{children:`Icon support`}),`
`,(0,c.jsx)(t.li,{children:`Fully inherits Block component capabilities`}),`
`,(0,c.jsx)(t.li,{children:`Flexible layout for content organization`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Subsections within a page`}),`
`,(0,c.jsx)(t.li,{children:`Grouping elements within a card or modal`}),`
`,(0,c.jsx)(t.li,{children:`Organizing complex forms into thematic areas`}),`
`,(0,c.jsx)(t.li,{children:`Creating structured content blocks with smaller headers`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Group
  headline="Group Headline"
  label="Group Label"
  description="Detailed description for the group content"
  caption="Auxiliary text"
  icon="folder"
>
  Main group content goes here
</Group>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Group is an ideal choice for creating semantic sub-structures within your application.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};