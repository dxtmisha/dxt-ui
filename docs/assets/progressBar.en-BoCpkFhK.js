import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ProgressBar`}),` component is designed to display operation progress, data loading, or proportional values in a clean horizontal layout. It supports single-value representation as well as complex multi-segmented tracks.`]}),`
`,(0,c.jsx)(t.p,{children:`The component handles percentage calculations automatically based on the current and maximum values, supports custom color palettes, and offers options for displaying descriptive segment labels and keyboard focus states.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Single value progress bar for straightforward status indication`}),`
`,(0,c.jsx)(t.li,{children:`Multi-segment progress bar for displaying proportions or multiple stacked datasets`}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic percentage calculation based on configurable maximum value limit (`,(0,c.jsx)(t.code,{children:`max`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Built-in label rendering within individual segments (`,(0,c.jsx)(t.code,{children:`showLabel`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Visual appearance control via custom color values or palette tokens`}),`
`,(0,c.jsx)(t.li,{children:`Keyboard navigation and focus tracking states for accessibility`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying document upload or download progress`}),`
`,(0,c.jsx)(t.li,{children:`Showing storage space usage split by file categories (e.g., system, media, documents)`}),`
`,(0,c.jsx)(t.li,{children:`Visualizing task completion rate in workflows or project managers`}),`
`,(0,c.jsx)(t.li,{children:`Representing poll or voting results across different options`}),`
`,(0,c.jsx)(t.li,{children:`Displaying battery level, budget utilization, or steps in a checkout wizard`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const storageUsage = ref([
{ value: 20, label: 'Photos', color: '#ff4d4f' },
{ value: 50, label: 'Documents', palette: 'primary' },
{ value: 15, label: 'System', color: '#8c8c8c' }
])
<\/script>

<template>
<div class="progress-bar-examples">
  <!-- Single value progress bar -->
  <ProgressBar :value="45" />

  <!-- Multi-segment progress bar with segment labels -->
  <ProgressBar :value="storageUsage" showLabel />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`ProgressBar is a versatile data visualization component that presents single or multi-segment progress tracks with flexible customization options, automatic percentage math, and accessible interactive behaviors.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};