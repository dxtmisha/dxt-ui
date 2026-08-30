import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`The table header cell component representing a `,(0,c.jsx)(t.code,{children:`<th>`}),` tag. Extends all capabilities of `,(0,c.jsx)(t.code,{children:`TableItem`}),` and introduces built-in support for displaying tooltips to provide additional info or guidance directly from the header cell.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Extends `,(0,c.jsx)(t.code,{children:`TableItem`}),` properties and features (alignments, tag customization, sticky settings)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Standard HTML tag support (`,(0,c.jsx)(t.code,{children:`tag`}),` prop, defaults to `,(0,c.jsx)(t.code,{children:`th`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Built-in tooltip support triggered by an icon (`,(0,c.jsx)(t.code,{children:`iconTooltip`}),` or custom `,(0,c.jsx)(t.code,{children:`help-circle`}),` default)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Slot for placing rich HTML or custom component content inside the tooltip (`,(0,c.jsx)(t.code,{children:`tooltip`}),` slot)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tooltip customization via `,(0,c.jsx)(t.code,{children:`tooltipLabel`}),` and `,(0,c.jsx)(t.code,{children:`tooltipDescription`})]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<table>
  <thead>
    <tr>
      <!-- Simple header cell -->
      <TableHeaderItem value="Header 1" />

      <!-- Header with built-in tooltip -->
      <TableHeaderItem
        label="Header with Tooltip"
        tooltipLabel="Help Label"
        tooltipDescription="This explains the meaning of this column."
      />
    </tr>
  </thead>
</table>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableHeaderItem is perfect for headers that require explanatory text, helping users understand data columns without cluttering the main table view.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};