import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Table component orchestrating grid-like column indexes and list row records for tabular data visualization.`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Table`}),` component handles rendering structured datasets. It integrates column configurations (`,(0,c.jsx)(t.code,{children:`columns`}),`), header setups (`,(0,c.jsx)(t.code,{children:`header`}),`), dataset rows (`,(0,c.jsx)(t.code,{children:`list`}),`), sticky header positioning (`,(0,c.jsx)(t.code,{children:`headerTop`}),`), sticky left columns (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`), and cell formatting to deliver high-performance interactive tables.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Structured representation of datasets in tabular form`}),`
`,(0,c.jsxs)(t.li,{children:[`Column-based data extraction via the `,(0,c.jsx)(t.code,{children:`columns`}),` array`]}),`
`,(0,c.jsxs)(t.li,{children:[`Multi-row hierarchical header support via the `,(0,c.jsx)(t.code,{children:`header`}),` prop`]}),`
`,(0,c.jsxs)(t.li,{children:[`Sticky headers (`,(0,c.jsx)(t.code,{children:`headerTop`}),`) and sticky left columns (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`) for large datasets`]}),`
`,(0,c.jsxs)(t.li,{children:[`Column-level cell alignment, row selection, and attribute binding (`,(0,c.jsx)(t.code,{children:`tableItemColumnAttrs`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Custom slot support per column index for custom cell rendering`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const columns = ['id', 'name', 'role', 'status']
const header = { id: 'ID', name: 'Name', role: 'Role', status: 'Status' }
const list = [
{ id: '1', name: 'Alice', role: 'Developer', status: 'Active' },
{ id: '2', name: 'Bob', role: 'Designer', status: 'Pending' }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :headerTop="true"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Table provides complete layout orchestration for tabular datasets with full keyboard, sticky positioning, and custom slot capabilities.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};