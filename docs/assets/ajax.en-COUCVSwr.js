import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`ajax-menu-loading`,children:`AJAX Menu Loading`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ajax`}),`, `,(0,c.jsx)(t.code,{children:`request`}),`, and `,(0,c.jsx)(t.code,{children:`cache`}),` properties are designed for managing asynchronous loading and caching of menu data.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ajax`}),` — enables remote data loading mode (URL string or function)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request`}),` — object of type `,(0,c.jsx)(t.code,{children:`ApiFetch`}),` with HTTP request settings`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cache`}),` — enables caching of loaded menu items`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: if `,(0,c.jsx)(t.code,{children:`ajax`}),` is not specified or equals `,(0,c.jsx)(t.code,{children:`false`}),`, the menu uses local data. When `,(0,c.jsx)(t.code,{children:`ajax`}),` is activated (URL string or `,(0,c.jsx)(t.code,{children:`true`}),`), `,(0,c.jsx)(t.code,{children:`request`}),` defines HTTP request parameters (method, headers, body), and `,(0,c.jsx)(t.code,{children:`cache`}),` manages data persistence. When `,(0,c.jsx)(t.code,{children:`cache`}),` is enabled, repeated menu openings use saved data instead of new requests, reducing server load.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Loading with URL -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu-items"
  :cache="true"
/>

<!-- With request settings -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu"
  :request="{
    method: 'POST',
    headers: { 'X-Custom': 'value' },
    auth: true
  }"
  :cache="true"
/>

<!-- Loading function -->
<Menu
  v-model:open="isOpen"
  :ajax="async () => {
    const response = await fetch('/api/menu')
    return response.json()
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};