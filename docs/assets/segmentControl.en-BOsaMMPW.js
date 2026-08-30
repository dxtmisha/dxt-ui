import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating horizontal navigation with segments.`}),`
`,(0,c.jsx)(t.p,{children:`SegmentControl manages a list of segment items, their selection, and scrolling. It supports various display styles, keyboard control, and responsiveness.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Horizontal scrolling of segments`}),`
`,(0,c.jsxs)(t.li,{children:[`Management of the selected segment via `,(0,c.jsx)(t.code,{children:`v-model:selected`})]}),`
`,(0,c.jsx)(t.li,{children:`Support for various data types (array of objects or object)`}),`
`,(0,c.jsx)(t.li,{children:`Customization of appearance (tags, attributes, dividers)`}),`
`,(0,c.jsx)(t.li,{children:`Keyboard navigation support (arrows, Enter, Space)`}),`
`,(0,c.jsx)(t.li,{children:`Animation of the active segment indicator`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Usage Scenarios:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Navigation between page sections`}),`
`,(0,c.jsx)(t.li,{children:`Switching data display views`}),`
`,(0,c.jsx)(t.li,{children:`Content filtering by categories`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedSegment = ref('home')
const segments = [
{ label: 'Home', value: 'home', icon: 'home' },
{ label: 'Profile', value: 'profile', icon: 'person' },
{ label: 'Settings', value: 'settings', icon: 'settings' }
]
<\/script>

<template>
<SegmentControl
  v-model:selected="selectedSegment"
  :list="segments"
  horizontal-scroll-align="center"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};