import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Container for organizing action buttons with support for primary and secondary grouping, various alignment modes, and adaptive behavior.`}),`
`,(0,c.jsx)(t.p,{children:`Actions centralizes the management of interactive button placement in dialogs, forms, and panels, automatically distributes space between groups, supports flexible adaptation to available space, and provides a unified API for creating consistent action sets. It serves as a fundamental component for building user interfaces with clear button hierarchy.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Button grouping (primary group via list, secondary via listSecondary)`}),`
`,(0,c.jsx)(t.li,{children:`Alignment control (left, right, center, block, none)`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive behavior through flexible property (adaptive/container)`}),`
`,(0,c.jsx)(t.li,{children:`Automatic spacer between button groups`}),`
`,(0,c.jsx)(t.li,{children:`Separate attribute configuration (buttonAttrs, buttonSecondaryAttrs)`}),`
`,(0,c.jsx)(t.li,{children:`Slot support for custom content (default, secondary)`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Button component with all its features`}),`
`,(0,c.jsx)(t.li,{children:`Flexible layout with automatic transition to block mode`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Action panels in dialogs and modal windows`}),`
`,(0,c.jsx)(t.li,{children:`Button sets in forms (cancel, save, apply)`}),`
`,(0,c.jsx)(t.li,{children:`Control panels with primary and auxiliary actions`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive interfaces with automatic restructuring on mobile devices`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Actions } from '@dxtmisha/constructor'

const isLoading = ref(false)

const handleSave = async () => {
isLoading.value = true
await saveData()
isLoading.value = false
}
<\/script>

<template>
<Actions
  align="right"
  :list="[
    { label: 'Cancel' },
    { label: 'Save', primary: true, loading: isLoading }
  ]"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Actions is a smart container: it automatically manages button placement, adapts to screen size, and provides visual hierarchy between primary and secondary actions.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};