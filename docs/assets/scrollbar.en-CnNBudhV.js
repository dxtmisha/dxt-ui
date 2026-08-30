import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for customizing scrollbar appearance and managing visual dividers at scrollable area boundaries.`}),`
`,(0,c.jsx)(t.p,{children:`Scrollbar hides the browser's standard scrollbar and provides visual feedback when reaching the top or bottom of content through divider lines. The component automatically detects scrollbar width and adapts display for systems without visible scrollbars (e.g., macOS with trackpad).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Hide browser's standard scrollbar`}),`
`,(0,c.jsx)(t.li,{children:`Display dividers when reaching content boundaries`}),`
`,(0,c.jsx)(t.li,{children:`Independent control of top and bottom dividers`}),`
`,(0,c.jsx)(t.li,{children:`Inversion of divider display logic`}),`
`,(0,c.jsx)(t.li,{children:`Events for tracking scroll position`}),`
`,(0,c.jsxs)(t.li,{children:[`Support for infinite scroll via `,(0,c.jsx)(t.code,{children:`reachBottom`}),` events`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Lists with data loading on scroll`}),`
`,(0,c.jsx)(t.li,{children:`Modal windows and dropdown menus with scrollable content`}),`
`,(0,c.jsx)(t.li,{children:`Fixed-height areas with vertical scrolling`}),`
`,(0,c.jsx)(t.li,{children:`Visual content separation during scrolling`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleReachBottom = () => {
// Load more data
loadMoreItems()
}
<\/script>

<template>
<Scrollbar
  divider
  @reach-bottom="handleReachBottom"
>
  <div class="content">
    <!-- Scrollable content -->
  </div>
</Scrollbar>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};