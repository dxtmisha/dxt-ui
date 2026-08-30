import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`search-and-filtering`,children:`Search and Filtering`}),`
`,(0,c.jsx)(t.p,{children:`The Table component has a built-in search functionality that allows you to easily filter your dataset locally.`}),`
`,(0,c.jsx)(t.h3,{id:`using-automatic-local-search`,children:`Using Automatic Local Search`}),`
`,(0,c.jsxs)(t.p,{children:[`To use the built-in search, simply bind a reactive string variable to the `,(0,c.jsx)(t.code,{children:`search`}),` property. As the user types into your search input, the Table will automatically filter the `,(0,c.jsx)(t.code,{children:`list`}),` rows.`]}),`
`,(0,c.jsxs)(t.p,{children:[`By default, the table will search across all values. If you want to restrict the search to specific object keys in your data, you can pass an array of property names to the `,(0,c.jsx)(t.code,{children:`searchColumns`}),` property.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const columns = ['name', 'role']
const header = [
{
  name: 'Name',
  role: 'Role'
}
]
const list = [
{ name: 'Alice Smith', role: 'Developer' },
{ name: 'Bob Johnson', role: 'Designer' },
{ name: 'Charlie Brown', role: 'Manager' }
]
<\/script>

<template>
<div>
  <!-- Your search input -->
  <input v-model="searchQuery" placeholder="Search..." />

  <!-- The table automatically filters based on searchQuery -->
  <Table
    :columns="columns"
    :header="header"
    :list="list"
    :search="searchQuery"
    :searchColumns="['name', 'role']"
  />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`advanced-configuration`,children:`Advanced Configuration`}),`
`,(0,c.jsxs)(t.p,{children:[`You can pass a configuration object to the `,(0,c.jsx)(t.code,{children:`searchOptions`}),` property for more advanced scenarios (e.g. strict matching, case-sensitivity) via the `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` search engine.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};