import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`description`,children:`Description`}),`
`,(0,c.jsx)(t.p,{children:`Compact interactive element for representing input, attributes, actions, and filters in the user interface.`}),`
`,(0,c.jsx)(t.p,{children:`Chip provides a unified component for displaying discrete information in a compact format with support for selection states, icons, adaptive behavior, and various visual variants (input, assistive). Inherits Button functionality while adding specialized styling and semantics for working with tags, filters, statuses, and user input. Ensures a consistent API for creating interactive chips with support for clicks, disabled/selected states, and icon integration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Core capabilities:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Button inheritance (icons, progress, click events)`}),`
`,(0,c.jsx)(t.li,{children:`Visual variants (input, assistive) for different contexts`}),`
`,(0,c.jsx)(t.li,{children:`State management (selected, disabled, focus, readonly)`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive behavior (adaptive, container) for different screen sizes`}),`
`,(0,c.jsx)(t.li,{children:`Customizable text alignment (textAlign: left/center/right)`}),`
`,(0,c.jsx)(t.li,{children:`Icon support (icon, iconTrailing) and progress indicator`}),`
`,(0,c.jsx)(t.li,{children:`Skeleton state integration for loading`}),`
`,(0,c.jsx)(t.li,{children:`Value and detail passing for element identification`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Tags and labels for content categorization`}),`
`,(0,c.jsx)(t.li,{children:`Filters in search interfaces and catalogs`}),`
`,(0,c.jsx)(t.li,{children:`Displaying user-entered data (emails, contacts)`}),`
`,(0,c.jsx)(t.li,{children:`Statuses and state indicators`}),`
`,(0,c.jsx)(t.li,{children:`Assistive elements (hints, recommendations)`}),`
`,(0,c.jsx)(t.li,{children:`Selectable options in forms and lists`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedFilters = ref(['active', 'verified'])
const tags = ref(['Vue', 'TypeScript', 'UI'])

const toggleFilter = (filter) => {
const index = selectedFilters.value.indexOf(filter)
if (index > -1) {
  selectedFilters.value.splice(index, 1)
} else {
  selectedFilters.value.push(filter)
}
}
<\/script>

<template>
<!-- Basic chip -->
<Chip>Standard</Chip>

<!-- Input chip for user input -->
<Chip input icon="person">Contact</Chip>

<!-- Assistive chip for hints -->
<Chip assistive icon="lightbulb">Recommendation</Chip>

<!-- Filters with selection state -->
<Chip
  v-for="filter in ['active', 'pending', 'verified']"
  :key="filter"
  :selected="selectedFilters.includes(filter)"
  @click="toggleFilter(filter)"
>
  {{ filter }}
</Chip>

<!-- With data passing -->
<Chip
  value="filter-tag"
  :detail="{ category: 'status', type: 'active' }"
  @click="handleChipClick"
>
  Active
</Chip>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Chip inherits all Button functionality, including events, icons, and progress indicators, while adding specialized styling for compact interface elements.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};