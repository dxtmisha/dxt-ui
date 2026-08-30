import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`group-selection-selected`,children:`Group Selection (selected)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`selected`}),` property allows you to bind a group of components (e.g., checkboxes or radio buttons) to a single variable. This is useful when you need to select one value from several available options.`]}),`
`,(0,c.jsx)(t.p,{children:`To use this feature:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Use `,(0,c.jsx)(t.code,{children:`v-model:selected`}),` for all elements in the group.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Specify a unique value in `,(0,c.jsx)(t.code,{children:`valueVariant`}),` for each element.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When an element is checked, its `,(0,c.jsx)(t.code,{children:`valueVariant`}),` is stored in the `,(0,c.jsx)(t.code,{children:`selected`}),` variable. When an element is unchecked, `,(0,c.jsx)(t.code,{children:`selected`}),` becomes `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const activeOption = ref('opt2')
<\/script>

<template>
<div class="group">
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt1"
    label="Option 1"
  />
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt2"
    label="Option 2"
  />
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt3"
    label="Option 3"
  />
</div>

<p>Selected: {{ activeOption }}</p>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};