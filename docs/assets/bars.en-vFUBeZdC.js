import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Versatile bar component for application headers, toolbars, and contextual action bars with support for navigation, action buttons, and bulk operation modes.`}),`
`,(0,c.jsx)(t.p,{children:`Bars provides a comprehensive solution for creating consistent top-level interface elements with structured layout for titles, descriptions, back navigation, and interactive button sets. The component integrates action mode switching for contextual operations, unified button configuration, and skeleton loading states for creating modern application headers and toolbars.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Structured text hierarchy (label and description with dynamic updates)`}),`
`,(0,c.jsx)(t.li,{children:`Configurable back button with navigation and close icon switching`}),`
`,(0,c.jsx)(t.li,{children:`Flexible button arrays (bars) for primary actions on the right side`}),`
`,(0,c.jsx)(t.li,{children:`Action mode with separate content and button set for bulk operations`}),`
`,(0,c.jsx)(t.li,{children:`Two-way binding (v-model:action) for state synchronization`}),`
`,(0,c.jsx)(t.li,{children:`Unified button attributes (buttonAttrs) for consistent styling`}),`
`,(0,c.jsx)(t.li,{children:`Event handling for click interactions and navigation`}),`
`,(0,c.jsx)(t.li,{children:`Skeleton system integration for loading states`}),`
`,(0,c.jsx)(t.li,{children:`Icon customization for back and close buttons`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Application screen headers with navigation and actions`}),`
`,(0,c.jsx)(t.li,{children:`Toolbar panels for sections and pages`}),`
`,(0,c.jsx)(t.li,{children:`Contextual action bars for selected item operations`}),`
`,(0,c.jsx)(t.li,{children:`Search headers with filter and sort controls`}),`
`,(0,c.jsx)(t.li,{children:`Settings screens with back navigation`}),`
`,(0,c.jsx)(t.li,{children:`List headers with bulk action support`}),`
`,(0,c.jsx)(t.li,{children:`Multi-selection interfaces with action mode`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const actionMode = ref(false)
const selectedCount = ref(0)

const handleSearch = () => {
console.log('Search clicked')
}

const handleFilter = () => {
console.log('Filter clicked')
}

const handleDelete = () => {
console.log('Delete selected items')
actionMode.value = false
selectedCount.value = 0
}
<\/script>

<template>
<div class="app-layout">
  <!-- Standard header with navigation and actions -->
  <Bars
    label="Messages"
    description="Your conversations"
    icon-back="arrow_back"
    :bars="[
      { icon: 'search', onClick: handleSearch },
      { icon: 'filter_list', onClick: handleFilter },
      { icon: 'more_vert' }
    ]"
  />

  <!-- Header with action mode for bulk operations -->
  <Bars
    v-model:action="actionMode"
    label="Contacts"
    description="Manage your contacts"
    :action-label="\`\${selectedCount} selected\`"
    action-description="Choose an action"
    icon-back="arrow_back"
    icon-close="close"
    :bars="[
      { icon: 'add' },
      { icon: 'search' }
    ]"
    :action-bars="[
      { icon: 'share' },
      { icon: 'delete', onClick: handleDelete }
    ]"
  />

  <!-- Toolbar with custom button attributes -->
  <Bars
    label="Settings"
    :button-attrs="{ secondary: true }"
    :bars="[
      { icon: 'sync', label: 'Sync' },
      { icon: 'info', label: 'Info' }
    ]"
  />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Bars is designed as a top-level UI component for creating consistent application headers, toolbars, and contextual action interfaces with comprehensive navigation, action management, and bulk operation support.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};