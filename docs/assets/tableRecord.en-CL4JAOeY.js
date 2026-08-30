import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The table row component representing a `,(0,c.jsx)(t.code,{children:`<tr>`}),` tag. It coordinates the rendering of a set of column cells (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),` if `,(0,c.jsx)(t.code,{children:`isHeader`}),` is true, or `,(0,c.jsx)(t.code,{children:`TableItem`}),` otherwise) based on a data record (`,(0,c.jsx)(t.code,{children:`item`}),` prop) and a list of column indexes (`,(0,c.jsx)(t.code,{children:`columns`}),` prop).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Standard table row container (`,(0,c.jsx)(t.code,{children:`tr`}),` tag)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Dynamic cell generation based on `,(0,c.jsx)(t.code,{children:`columns`}),` keys and `,(0,c.jsx)(t.code,{children:`item`}),` values`]}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic selection between header cells (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`) and data cells (`,(0,c.jsx)(t.code,{children:`TableItem`}),`) via the `,(0,c.jsx)(t.code,{children:`isHeader`}),` flag`]}),`
`,(0,c.jsxs)(t.li,{children:[`Selectable and disabled states applied row-wide (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Dynamic custom slots named after column indexes to custom render specific cell contents`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<table>
  <!-- Header Row -->
  <TableRecord
    :isHeader="true"
    :columns="['name', 'role']"
    :item="{ name: 'Name', role: 'Role' }"
  />

  <!-- Data Row -->
  <TableRecord
    :columns="['name', 'role']"
    :item="{ name: 'Alice', role: 'Developer' }"
  />
</table>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableRecord simplifies table generation by automating cell rendering from key-value data structures, with full support for custom slot overrides per column.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};