import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A versatile component for creating segment controls, tab controls, and navigation links with icon and badge support.`}),`
`,(0,c.jsx)(t.p,{children:`SegmentControlItem combines the functionality of a button, link, and list item. It supports various states (active, disabled), can display icons to the left and right of the text, and integrates with the Badge component to show notifications or counters. The component automatically manages ARIA attributes to ensure accessibility.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying a label and icons (icon, iconTrailing)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in badge support for counters`}),`
`,(0,c.jsx)(t.li,{children:`Managing selection state (selected) and activity`}),`
`,(0,c.jsx)(t.li,{children:`Navigation support via href (link) or to (router-link)`}),`
`,(0,c.jsx)(t.li,{children:`Customizable root tag (button, a, div, li)`}),`
`,(0,c.jsx)(t.li,{children:`Ripple effect on click`}),`
`,(0,c.jsx)(t.li,{children:`Skeleton support for loading state`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Segment controls in navigation bars`}),`
`,(0,c.jsx)(t.li,{children:`Selection lists (select options)`}),`
`,(0,c.jsx)(t.li,{children:`Links with icons and counters`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const activeSegment = ref('home')
<\/script>

<template>
<div class="segments">
  <SegmentControlItem
    label="Home"
    icon="home"
    :selected="activeSegment === 'home'"
    @click="activeSegment = 'home'"
  />
  <SegmentControlItem
    label="Messages"
    icon="mail"
    badge="5"
    :selected="activeSegment === 'messages'"
    @click="activeSegment = 'messages'"
  />
  <SegmentControlItem
    label="Settings"
    icon="settings"
    disabled
  />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};