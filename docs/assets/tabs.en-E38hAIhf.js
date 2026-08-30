import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating tabs with navigation and animated content switching.`}),`
`,(0,c.jsx)(t.p,{children:`Tabs combines a navigation bar (TabsNavigation) and a content area (MotionAxis), ensuring synchronized switching between tabs. The component supports horizontal scrolling of headers, various display styles, and content transition animations.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic synchronization of the selected tab and content`}),`
`,(0,c.jsx)(t.li,{children:`Horizontal scrolling support for a large number of tabs`}),`
`,(0,c.jsx)(t.li,{children:`Animated transitions between content panels`}),`
`,(0,c.jsx)(t.li,{children:`Flexible customization of tab appearance (icons, labels)`}),`
`,(0,c.jsx)(t.li,{children:`State management via v-model:selected`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Organizing page content by categories`}),`
`,(0,c.jsx)(t.li,{children:`Switching between different data views`}),`
`,(0,c.jsx)(t.li,{children:`Navigation within modal windows or cards`}),`
`,(0,c.jsx)(t.li,{children:`Creating step-by-step wizards`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('tab1')
const tabs = [
{ text: 'Tab 1', value: 'tab1' },
{ text: 'Tab 2', value: 'tab2' },
{ text: 'Tab 3', value: 'tab3' }
]
<\/script>

<template>
<Tabs
  v-model:selected="selected"
  :list="tabs"
>
  <template #default="{ item }">
    <div class="p-4">
      Content for {{ item.text }}
    </div>
  </template>
</Tabs>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};