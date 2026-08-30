import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The baseline table cell component representing a `,(0,c.jsx)(t.code,{children:`<td>`}),` or other custom tags. Used inside rows to display text, labels, and descriptions, and supports structural layout attributes like colspan and rowspan.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Standard and custom HTML tag support (`,(0,c.jsx)(t.code,{children:`tag`}),` prop, defaults to `,(0,c.jsx)(t.code,{children:`td`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Cell alignment options (`,(0,c.jsx)(t.code,{children:`align`}),` and `,(0,c.jsx)(t.code,{children:`alignVertical`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Text clamping for cells with long labels (`,(0,c.jsx)(t.code,{children:`labelClamp`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Dynamic skeleton states (`,(0,c.jsx)(t.code,{children:`isSkeleton`}),`) for loading phases`]}),`
`,(0,c.jsxs)(t.li,{children:[`Sticky columns and headers support (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`, `,(0,c.jsx)(t.code,{children:`stickyTop`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Selectable and interactive states (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<table>
  <tr>
    <!-- Simple cell with value -->
    <TableItem value="Cell Value" />

    <!-- Centered cell with custom span and label clamping -->
    <TableItem
      label="Clamped Label Value"
      description="Optional cell description"
      align="center"
      colspan="2"
      labelClamp
    />
  </tr>
</table>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableItem provides baseline layout and presentation options for cell contents, ensuring consistent text truncation, alignments, and skeleton logic.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};