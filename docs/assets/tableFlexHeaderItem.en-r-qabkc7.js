import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The flexbox-based table header cell component representing a flexbox layout header item cell. Used inside flexbox header row structures to display text, labels, descriptions, column sorting controls, and tooltips, and supports flex-basis spanning (`,(0,c.jsx)(t.code,{children:`colspan`}),` up to 12).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Flexbox layout header cell structure with `,(0,c.jsx)(t.code,{children:`colspan`}),` flex-basis support (up to 12)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Header alignment options (`,(0,c.jsx)(t.code,{children:`align`}),` and `,(0,c.jsx)(t.code,{children:`alignVertical`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Interactive 3-state column sorting support (`,(0,c.jsx)(t.code,{children:`sortColumn`}),`, `,(0,c.jsx)(t.code,{children:`sortDir`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Integrated tooltip component (`,(0,c.jsx)(t.code,{children:`tooltipLabel`}),`, `,(0,c.jsx)(t.code,{children:`tooltipDescription`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Text clamping for cells with long labels (`,(0,c.jsx)(t.code,{children:`labelClamp`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Dynamic skeleton states (`,(0,c.jsx)(t.code,{children:`isSkeleton`}),`) for loading phases`]}),`
`,(0,c.jsxs)(t.li,{children:[`Sticky columns and headers support (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`, `,(0,c.jsx)(t.code,{children:`stickyTop`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Selectable and interactive states (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<!-- Simple header cell with value -->
<TableFlexHeaderItem value="Header Title" />

<!-- Interactive header cell with sorting and tooltip -->
<TableFlexHeaderItem
  label="Sortable Header"
  description="Click to sort"
  showSort
  sortDir="asc"
  tooltipLabel="Help Information"
  tooltipDescription="Detailed description for this column"
  align="center"
  colspan="2"
  labelClamp
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableFlexHeaderItem provides flexbox-based layout and presentation options for table header cell contents, ensuring consistent text truncation, alignments, tooltips, and sorting logic within flexible tables.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};