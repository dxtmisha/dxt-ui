import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`The flexbox-based table row component coordinating flex cell rendering from dataset items and column indexes. Used inside flexbox table container structures to construct flexible table rows.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Flexbox layout row rendering for dynamic list datasets`}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic cell rendering mapping `,(0,c.jsx)(t.code,{children:`columns`}),` to `,(0,c.jsx)(t.code,{children:`item`}),` properties`]}),`
`,(0,c.jsxs)(t.li,{children:[`Support for flex header rows (`,(0,c.jsx)(t.code,{children:`isHeader`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Custom cell slot overrides per column index`}),`
`,(0,c.jsxs)(t.li,{children:[`Dynamic skeleton states (`,(0,c.jsx)(t.code,{children:`isSkeleton`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Row-wide selection and disabled states (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<!-- Header row -->
<TableFlexRecord
  :isHeader="true"
  :columns="['id', 'name', 'role', 'status']"
  :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status' }"
/>

<!-- Data row -->
<TableFlexRecord
  :columns="['id', 'name', 'role', 'status']"
  :item="{ id: '1', name: 'Misha', role: 'Developer', status: 'Active' }"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableFlexRecord provides flexbox-based layout and orchestration for table row items, automatically rendering cells based on dataset structures.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};