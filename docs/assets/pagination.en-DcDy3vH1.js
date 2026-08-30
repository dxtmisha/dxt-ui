import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Navigation control component designed to paginate large datasets, manage row counts per page, and handle incremental content loading.`}),`
`,(0,c.jsx)(t.p,{children:`Pagination provides pagination numbers calculation, quick jumps to boundary pages (first/last), customized row count selects, and incremental content loaders ("Show more").`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic page count and layout calculations based on total count and rows`}),`
`,(0,c.jsx)(t.li,{children:`Next, previous, first, and last navigation buttons`}),`
`,(0,c.jsx)(t.li,{children:`Ellipsis separators between middle ranges and boundary pages`}),`
`,(0,c.jsx)(t.li,{children:`Dropdown select for rows per page limit customization (v-model:rows)`}),`
`,(0,c.jsx)(t.li,{children:`State synchronization for page selection (v-model:value)`}),`
`,(0,c.jsx)(t.li,{children:`Loader support via "Show more" button`}),`
`,(0,c.jsx)(t.li,{children:`Detailed pagination metadata range info string (e.g. "1-10 out of 100")`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Dividing list items into digestible pages`}),`
`,(0,c.jsx)(t.li,{children:`Data grids and tables requiring server or client-side limit controls`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic directories with incremental loading`}),`
`,(0,c.jsx)(t.li,{children:`Custom catalog navigation`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const page = ref(1)
const rows = ref(10)
<\/script>

<template>
<!-- Basic pagination -->
<Pagination :count="100" :rows="10" />

<!-- Fully controlled two-way binding -->
<Pagination
  v-model:value="page"
  v-model:rows="rows"
  :count="100"
  :menu-rows="[5, 10, 20, 50]"
  show-info
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Pagination orchestrates reactive page ranges, row count dropdowns, and button layouts for structured data presentation.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};