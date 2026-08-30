import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`navigation-and-arrows`,children:`Navigation and arrows`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`arrowCarousel`}),`, `,(0,c.jsx)(t.code,{children:`arrowStepper`}),`, `,(0,c.jsx)(t.code,{children:`arrowAlign`}),`, `,(0,c.jsx)(t.code,{children:`disabledPrevious`}),`, and `,(0,c.jsx)(t.code,{children:`disabledNext`}),` are designed to control built-in navigation elements.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowCarousel`}),` — enables navigation arrows (left/right) for switching elements`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowStepper`}),` — enables numeric step buttons (minus/plus)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowAlign`}),` — controls horizontal position of navigation arrows (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledPrevious`}),` — disables the left button (back/minus)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledNext`}),` — disables the right button (forward/plus)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: only one arrow mode is active — if `,(0,c.jsx)(t.code,{children:`arrowCarousel = true`}),`, the `,(0,c.jsx)(t.code,{children:`arrowStepper`}),` mode is ignored and vice versa. When navigation mode is active, the clear button (`,(0,c.jsx)(t.code,{children:`cancel`}),`) is automatically hidden, as the control area takes priority. The `,(0,c.jsx)(t.code,{children:`disabledPrevious`}),` and `,(0,c.jsx)(t.code,{children:`disabledNext`}),` flags apply only to the currently active arrow mode.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const items = ['Item 1', 'Item 2', 'Item 3']
const count = ref(5)
<\/script>

<template>
<!-- Carousel with navigation -->
<Field
  label="Item"
  arrow-carousel
  :disabled-previous="currentIndex === 0"
  :disabled-next="currentIndex === items.length - 1"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="items[currentIndex]"
      readonly
    />
  </template>
</Field>

<!-- Numeric stepper -->
<Field
  label="Quantity"
  arrow-stepper
  :disabled-previous="count <= 0"
  :disabled-next="count >= 99"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Stepper with left-aligned arrows -->
<Field
  label="Value"
  arrow-stepper
  arrow-align="left"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Stepper with centered arrows -->
<Field
  label="Value"
  arrow-stepper
  arrow-align="center"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};