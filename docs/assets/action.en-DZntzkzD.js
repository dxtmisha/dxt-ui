import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`action-mode`,children:`Action mode`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`action`}),`, `,(0,c.jsx)(t.code,{children:`actionLabel`}),`, `,(0,c.jsx)(t.code,{children:`actionDescription`}),`, and `,(0,c.jsx)(t.code,{children:`actionBars`}),` are designed for switching Bars into contextual action mode when selecting items or performing bulk operations.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action`}),` — activates action mode with full content replacement`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionLabel`}),` — primary title for action mode (typically count of selected items)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionDescription`}),` — additional description or instruction for current action`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionBars`}),` — array of action buttons for operations on selected elements`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: when `,(0,c.jsx)(t.code,{children:`action = true`}),`, the component replaces standard content (label, description, bars) with action variants (actionLabel, actionDescription, actionBars). The back button automatically transforms into an exit button (iconClose) for leaving action mode. All shared button attributes from `,(0,c.jsx)(t.code,{children:`buttonAttrs`}),` apply to `,(0,c.jsx)(t.code,{children:`actionBars`}),`, maintaining consistent styling. Action mode is typically controlled by external selection state and is used for temporary focused operations with the ability to exit back to normal view.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const selectedItems = ref([])
const actionMode = computed(() => selectedItems.value.length > 0)

const handleSelect = (id) => {
const index = selectedItems.value.indexOf(id)
if (index > -1) {
  selectedItems.value.splice(index, 1)
} else {
  selectedItems.value.push(id)
}
}

const handleShare = () => {
console.log('Share selected:', selectedItems.value)
}

const handleDelete = () => {
console.log('Delete selected:', selectedItems.value)
selectedItems.value = []
}
<\/script>

<template>
<!-- Standard mode with regular navigation -->
<Bars
  :action="actionMode"
  label="Contacts"
  description="Manage your contacts"
  icon-back="arrow_back"
  icon-close="close"
  :bars="[
    { icon: 'add', label: 'Add' },
    { icon: 'search', label: 'Search' }
  ]"
  :action-label="\`\${selectedItems.length} selected\`"
  action-description="Choose an action to apply"
  :action-bars="[
    { icon: 'share', onClick: handleShare },
    { icon: 'delete', onClick: handleDelete }
  ]"
/>

<!-- Action mode always active -->
<Bars
  action
  action-label="5 items selected"
  action-description="Select an action"
  icon-close="close"
  :action-bars="[
    { icon: 'edit', label: 'Edit' },
    { icon: 'archive', label: 'Archive' },
    { icon: 'delete', label: 'Delete' }
  ]"
/>

<!-- With v-model for two-way binding -->
<Bars
  v-model:action="actionMode"
  label="Messages"
  :action-label="\`\${selectedItems.length} messages\`"
  :action-bars="[
    { icon: 'mark_email_read' },
    { icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};