import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`selected`,children:(0,c.jsx)(t.code,{children:`selected`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggered when items inside the area are selected (via dragging lasso or clicking).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: SelectableAreaEventParameters`}),` — event payload object with selection details`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`SelectableAreaEventParameters structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: HTMLElement[]`}),` — all selectable elements inside the area`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`itemsSelected: HTMLElement[]`}),` — elements that are currently selected`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string[]`}),` — array of values of the currently selected elements (taken from `,(0,c.jsx)(t.code,{children:`data-value`}),` attributes)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus: string | undefined`}),` — value of the last focused element`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleSelected = (parameters) => {
console.log('Selected values:', parameters.selected)
console.log('Selected DOM elements:', parameters.itemsSelected)
}
<\/script>

<template>
<SelectableArea @selected="handleSelected">
  <!-- content -->
</SelectableArea>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};