import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Universal container component for displaying structured content with labels, descriptions, and interactive actions in lists and interface elements.`}),`
`,(0,c.jsx)(t.p,{children:`Cell provides a consistent way to represent information blocks with support for text hierarchy (label, description, caption), interactive states, icons, and progress indicators. The component integrates ripple effects, skeleton states, and flexible content positioning for creating modern interface lists.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Structured content hierarchy (label, description, caption)`}),`
`,(0,c.jsx)(t.li,{children:`Interactive states (focus, selected, disabled, readonly)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in icon and progress indicator support`}),`
`,(0,c.jsx)(t.li,{children:`Ripple effect integration for tactile feedback`}),`
`,(0,c.jsx)(t.li,{children:`Skeleton system for loading states`}),`
`,(0,c.jsx)(t.li,{children:`Customizable dividers and dynamic behavior`}),`
`,(0,c.jsx)(t.li,{children:`Flexible slot system for custom content`}),`
`,(0,c.jsx)(t.li,{children:`Optimized for list and menu interfaces`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`List items in navigation menus and settings`}),`
`,(0,c.jsx)(t.li,{children:`Contact cards and profile entries`}),`
`,(0,c.jsx)(t.li,{children:`Action sheets and selection lists`}),`
`,(0,c.jsx)(t.li,{children:`Settings panels and configuration items`}),`
`,(0,c.jsx)(t.li,{children:`Data tables and structured information displays`}),`
`,(0,c.jsx)(t.li,{children:`Mobile-first interface components`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(false)
const loading = ref(false)

const handleClick = () => {
console.log('Cell clicked')
selected.value = !selected.value
}
<\/script>

<template>
<Cell
  label="Notification Settings"
  description="Manage how you receive notifications"
  caption="Updated today"
  icon="notifications"
  :selected="selected"
  :skeleton="loading"
  @click="handleClick"
>
  <template #trailing>
    <Icon name="chevron_right" />
  </template>
</Cell>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Cell is designed as a universal building block for creating consistent list-based interfaces with rich content and interactive states.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};