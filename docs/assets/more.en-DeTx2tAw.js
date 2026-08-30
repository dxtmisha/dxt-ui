import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`show-more--show-previous-buttons`,children:`Show More / Show Previous buttons`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`showMore`}),` and `,(0,c.jsx)(t.code,{children:`showMorePrev`}),` implement an accumulative loading pattern where content is progressively revealed by appending or prepending records to the existing list — as opposed to traditional pagination that replaces the visible page entirely. Each button serves a distinct UX purpose and is placed on a `,(0,c.jsx)(t.strong,{children:`separate Pagination instance`}),`; they are not meant to coexist on the same component.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showMore`}),` — renders a loading trigger below the list that appends the next page of records on click`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showMorePrev`}),` — renders a loading trigger above the list that prepends an earlier page of records on click`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`showMore`})}),` implements the classic feed-style progressive disclosure: the user starts at page 1 and incrementally loads additional records downward without losing previously fetched content. This pattern is well-suited for product catalogs, activity feeds, and any list where maintaining scroll context is more important than precise positional navigation.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`showMorePrev`})}),` addresses a fundamentally different problem. When a user arrives at a list from a deep link (e.g., `,(0,c.jsx)(t.code,{children:`?page=5`}),`), a browser bookmark, or a page reload mid-session, the rendered list starts at a non-first offset. The earlier records — pages 1 through 4 in this case — are absent from the DOM but are still logically part of the dataset. `,(0,c.jsx)(t.code,{children:`showMorePrev`}),` gives users a non-destructive way to retrieve those missing records and prepend them to the top of the current view without navigating away or losing the page position they landed on.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The canonical architecture for this pattern uses `,(0,c.jsx)(t.strong,{children:`two independent Pagination instances`}),` sharing the same reactive `,(0,c.jsx)(t.code,{children:`page`}),` state: one positioned above the list with `,(0,c.jsx)(t.code,{children:`showMorePrev`}),` active, the other below with `,(0,c.jsx)(t.code,{children:`showMore`}),` active. Each emits its own event (`,(0,c.jsx)(t.code,{children:`morePrev`}),` / `,(0,c.jsx)(t.code,{children:`more`}),`) and independently drives the respective data fetch.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

// Restored from URL: ?page=5 — records 1–4 are missing from the initial render
const page = ref(Number(route.query.page) || 1)
const items = ref(await fetchPage(page.value))

async function handleMore(event, options) {
// Appends the next batch below the current list
const next = await fetchPage(options.value)
items.value.push(...next)
}

async function handleMorePrev(event, options) {
// Prepends an earlier batch above the current list
const prev = await fetchPage(options.value)
items.value.unshift(...prev)
}
<\/script>

<template>
<!--
  Top instance — visible only when the list does not start from page 1.
  Allows the user to recover records that preceded the initial render offset.
-->
<Pagination
  v-model:value="page"
  :count="500"
  :rows="20"
  show-more-prev
  @morePrev="handleMorePrev"
/>

<ul>
  <li v-for="item in items" :key="item.id">{{ item.title }}</li>
</ul>

<!--
  Bottom instance — standard progressive loader.
  Appends the next page of records on each interaction.
-->
<Pagination
  v-model:value="page"
  :count="500"
  :rows="20"
  show-more
  @more="handleMore"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};