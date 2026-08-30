import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`sticky-bottom-scrollbar`,children:`Sticky Bottom Scrollbar`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`stickyScrollBottom`}),` property controls the bottom sticky horizontal scrollbar attached to the visible viewport.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features & Behavior:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Enabled by default (`,(0,c.jsx)(t.code,{children:`stickyScrollBottom: true`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Provides a sticky horizontal scrollbar at the bottom of the screen, allowing users to scroll wide tables horizontally without needing to scroll down to the table bottom.`}),`
`,(0,c.jsxs)(t.li,{children:[`When combined with `,(0,c.jsx)(t.code,{children:`headerTop={true}`}),`, it activates the `,(0,c.jsx)(t.code,{children:`StickyInclude`}),` JS controller (`,(0,c.jsx)(t.code,{children:`stickyEnable: headerTop && stickyScrollBottom`}),`) to calculate dynamic offsets during scroll events.`]}),`
`,(0,c.jsxs)(t.li,{children:[`When disabled (`,(0,c.jsx)(t.code,{children:`:stickyScrollBottom="false"`}),`), `,(0,c.jsx)(t.code,{children:`StickyInclude`}),` is deactivated, and `,(0,c.jsx)(t.code,{children:`headerTop`}),` switches to native CSS sticky positioning (`,(0,c.jsx)(t.code,{children:`position: sticky`}),`) without JS offset calculations or fade-out opacity effects.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const columns = ['id', 'name', 'role', 'email', 'phone', 'city', 'country']
const header = { id: 'ID', name: 'Name', role: 'Role', email: 'Email', phone: 'Phone', city: 'City', country: 'Country' }
const list = [
{ id: '1', name: 'Alice', role: 'Developer', email: 'alice@example.com', phone: '+1 555-0101', city: 'New York', country: 'USA' }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :stickyScrollBottom="true"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};