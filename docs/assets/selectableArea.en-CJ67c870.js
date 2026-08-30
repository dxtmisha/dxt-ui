import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for selecting child elements within an area by drawing a selection rectangle (drag-to-select) or clicking.`}),`
`,(0,c.jsx)(t.p,{children:`SelectableArea manages items selection by coordinates, automatically drawing a visual selection rectangle as the user drags their cursor across the container. The component calculates collision bounds of child elements matching the target selectors, marks them as selected, and triggers corresponding status events. It is useful for implementing advanced file manager selections, grid item selections, or drawing areas.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Mouse drag selection (box selection / marquee selection)`}),`
`,(0,c.jsx)(t.li,{children:`Click selection support`}),`
`,(0,c.jsxs)(t.li,{children:[`Custom wrapper HTML tag (`,(0,c.jsx)(t.code,{children:`tag`}),` property)`]}),`
`,(0,c.jsx)(t.li,{children:`Collision box calculations for nested elements`}),`
`,(0,c.jsxs)(t.li,{children:[`Reactive state bindings for `,(0,c.jsx)(t.code,{children:`active`}),` and `,(0,c.jsx)(t.code,{children:`selected`}),` properties`]}),`
`,(0,c.jsx)(t.li,{children:`Fully accessible keyboard navigation and events support`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Desktop-like file/folder selections in directories`}),`
`,(0,c.jsx)(t.li,{children:`Batch item selection in grid and list views`}),`
`,(0,c.jsx)(t.li,{children:`Selecting multiple graphic objects in editing canvases`}),`
`,(0,c.jsx)(t.li,{children:`Interactive dashboard components`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['1', '2'])
<\/script>

<template>
<SelectableArea v-model:selected="selected">
  <template #default="{ className, classClick, onClick }">
    <div style="display: flex; gap: 8px;">
      <div
        v-for="item in 5"
        :key="item"
        :class="[className, classClick]"
        :data-value="item"
        @click="onClick"
      >
        Item {{ item }}
      </div>
    </div>
  </template>
</SelectableArea>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};