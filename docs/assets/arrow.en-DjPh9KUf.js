import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for displaying a graphical indicator (arrow) used to visually link floating elements to their target.`}),`
`,(0,c.jsx)(t.p,{children:`Arrow provides automatic or manual positioning of the indicator. It is often used within Tooltip, Popover, and Dropdown components to indicate the direction towards the trigger or target element. The component supports adaptation to various sizes and styles, and can dynamically update its position.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic and manual positioning (top, bottom, left, right)`}),`
`,(0,c.jsx)(t.li,{children:`Support for inverted style`}),`
`,(0,c.jsx)(t.li,{children:`Binding to a target element (elementTarget)`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic position updates`}),`
`,(0,c.jsx)(t.li,{children:`Customizable SVG arrow graphics`}),`
`,(0,c.jsx)(t.li,{children:`Integration with positioning components`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Indicators in tooltips`}),`
`,(0,c.jsx)(t.li,{children:`Arrows in dropdown menus and popovers`}),`
`,(0,c.jsx)(t.li,{children:`Visual links in tour guides`}),`
`,(0,c.jsx)(t.li,{children:`Directional indicators in the interface`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { Arrow } from 'dxt-ui'
<\/script>

<template>
<div class="relative p-4 border rounded">
  Content with arrow
  <Arrow position="top" />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};