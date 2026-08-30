import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`sticky-table-header`,children:`Sticky Table Header`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`headerTop`}),` property enables sticky positioning of the table header (`,(0,c.jsx)(t.code,{children:`thead`}),`) during vertical scrolling.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features & Behavior:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`When `,(0,c.jsx)(t.code,{children:`headerTop="true"`}),`, the table header is fixed at the top of the scrollable container using CSS `,(0,c.jsx)(t.code,{children:`position: sticky`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Together with the `,(0,c.jsx)(t.code,{children:`stickyScrollBottom`}),` property (enabled by default), the internal `,(0,c.jsx)(t.code,{children:`StickyInclude`}),` controller calculates top offset CSS variables (`,(0,c.jsx)(t.code,{children:`--[className]-sys-sticky-fix`}),`) to synchronize header positioning.`]}),`
`,(0,c.jsxs)(t.li,{children:[`During active scrolling, dataset attributes `,(0,c.jsx)(t.code,{children:`data-sticky="active"`}),` and `,(0,c.jsx)(t.code,{children:`data-sticky-scroll="active"`}),` apply smooth opacity transitions (`,(0,c.jsx)(t.code,{children:`opacity: 0`}),`) to prevent visual glitches or overlapping.`]}),`
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
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};