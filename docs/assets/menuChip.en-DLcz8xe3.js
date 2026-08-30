import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating chip-based dropdown selection lists with optional header search and custom trigger styles.`}),`
`,(0,c.jsx)(t.p,{children:`MenuChip is a compact dropdown selector that replaces the standard field outline of a select component with a clean chip trigger. It combines the Chip and dropdown Menu/List architectures to display selected values with highly configurable separators and value hiding rules, and includes integrated hidden inputs for native form integration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Chip-based trigger instead of standard text field input`}),`
`,(0,c.jsx)(t.li,{children:`Displays selected values with custom separators`}),`
`,(0,c.jsx)(t.li,{children:`Supports hiding value when an icon is present (hideValueIcon)`}),`
`,(0,c.jsx)(t.li,{children:`Supports hiding label when a value is selected (hideLabelValue)`}),`
`,(0,c.jsx)(t.li,{children:`Dropdown options menu with search/filtering in the header (showSearch)`}),`
`,(0,c.jsx)(t.li,{children:`Single or multiple value selection support`}),`
`,(0,c.jsx)(t.li,{children:`Hidden input for native form data carrying`}),`
`,(0,c.jsx)(t.li,{children:`Responsive design for mobile environments`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Clean compact category filters in horizontal scroll lists`}),`
`,(0,c.jsx)(t.li,{children:`Toolbar selectors (e.g., status selectors, tagging filters, layout modes, language selection)`}),`
`,(0,c.jsx)(t.li,{children:`Compact dropdowns where a standard field border or button border is undesirable`}),`
`,(0,c.jsx)(t.li,{children:`Mobile action-trigger selectors`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedLanguage = ref('en')
const languages = [
{ label: 'English', value: 'en' },
{ label: 'Russian', value: 'ru' },
{ label: 'Vietnamese', value: 'vi' }
]
<\/script>

<template>
<!-- Simple menu chip -->
<MenuChip
  v-model="selectedLanguage"
  label="Language"
  :option="languages"
/>

<!-- Compact layout with settings icon (hides value display) -->
<MenuChip
  v-model="selectedLanguage"
  label="Settings"
  icon="settings"
  hideValueIcon
  :option="languages"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};