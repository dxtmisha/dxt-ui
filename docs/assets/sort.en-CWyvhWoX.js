import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`sorting-data`,children:`Sorting Data`}),`
`,(0,c.jsx)(t.p,{children:`The Table component provides built-in support for sorting your data. You can either let the table handle the sorting automatically (local sorting) or control the sorting state manually, which is useful when fetching data from a server (server-side sorting).`}),`
`,(0,c.jsx)(t.h3,{id:`enabling-sorting-on-columns`,children:`Enabling Sorting on Columns`}),`
`,(0,c.jsxs)(t.p,{children:[`To make a column sortable, add `,(0,c.jsx)(t.code,{children:`showSort: true`}),` to its definition in the `,(0,c.jsx)(t.code,{children:`header`}),` prop. This will render an interactive sort button in the column header. Clicking the button cycles between 3 states:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ascending (`,(0,c.jsx)(t.code,{children:`'asc'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Descending (`,(0,c.jsx)(t.code,{children:`'desc'`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Reset (unsorted)`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`automatic-local-sorting`,children:`Automatic Local Sorting`}),`
`,(0,c.jsxs)(t.p,{children:[`By default, the Table component handles sorting automatically. If you provide a static array of data to the `,(0,c.jsx)(t.code,{children:`list`}),` property and configure `,(0,c.jsx)(t.code,{children:`showSort`}),` in the header, the table will reorder the items on the fly without any extra code.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
const columns = ['name', 'age']
const header = [
{
  name: { label: 'Name', showSort: true },
  age: { label: 'Age', showSort: true }
}
]
const list = [
{ name: 'Alice Smith', age: 28 },
{ name: 'Bob Johnson', age: 34 }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`controlled-server-side-sorting`,children:`Controlled (Server-Side) Sorting`}),`
`,(0,c.jsxs)(t.p,{children:[`When working with APIs, you typically need to sort data on the backend. To do this, you can control the sorting state by listening to the `,(0,c.jsx)(t.code,{children:`@sort`}),` event and passing the current sorting state back via the `,(0,c.jsx)(t.code,{children:`:sort`}),` and `,(0,c.jsx)(t.code,{children:`:sortDir`}),` properties.`]}),`
`,(0,c.jsxs)(t.p,{children:[`When you use the `,(0,c.jsx)(t.code,{children:`@sort`}),` event, it overrides the automatic local sorting and delegates the responsibility to your event handler.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
import { ref } from 'vue'

const currentSort = ref<string | undefined>()
const currentDir = ref<'asc' | 'desc' | undefined>()

const handleSort = (item: { column: string | undefined, dir: 'asc' | 'desc' | undefined }) => {
currentSort.value = item.column
currentDir.value = item.dir

// Example: fetch data from API using new sorting parameters
// fetchUsers({ sort: item.column, dir: item.dir })
}
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :sort="currentSort"
  :sortDir="currentDir"
  @sort="handleSort"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`advanced-sorting-options`,children:`Advanced Sorting Options`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`:sort`}),` property also supports complex sorting configurations:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Array:`}),` Sort by multiple columns sequentially (e.g. `,(0,c.jsx)(t.code,{children:`['category', 'name']`}),`). Prefix a column with `,(0,c.jsx)(t.code,{children:`-`}),` for descending order (e.g. `,(0,c.jsx)(t.code,{children:`['-category']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Object Map:`}),` Detailed multi-column configuration (e.g. `,(0,c.jsx)(t.code,{children:`{ category: 'asc', age: 'desc' }`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`If you need a completely custom sorting algorithm for automatic local sorting, you can provide a custom comparison function via the `,(0,c.jsx)(t.code,{children:`:sortFunction`}),` property.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};