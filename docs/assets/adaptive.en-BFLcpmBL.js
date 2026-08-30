import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`adaptive-scaling`,children:`Adaptive scaling`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`adaptive`}),`, `,(0,c.jsx)(t.code,{children:`adaptiveGroup`}),`, `,(0,c.jsx)(t.code,{children:`adaptiveAlways`}),`, `,(0,c.jsx)(t.code,{children:`objectWidth`}),`, and `,(0,c.jsx)(t.code,{children:`objectHeight`}),` properties control automatic image scaling to ensure visual consistency of physical object sizes across different images.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptive`}),` — enables adaptive scaling mode`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptiveGroup`}),` — group name for scale synchronization (default `,(0,c.jsx)(t.code,{children:`'basic'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`objectWidth`}),` — physical width of the object in the image in millimeters`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`objectHeight`}),` — physical height of the object in the image in millimeters`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptiveAlways`}),` — perform calculations even for invisible elements`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together to ensure proportional display of images with objects of different physical sizes. When `,(0,c.jsx)(t.code,{children:`adaptive`}),` is activated, the component starts tracking element dimensions and comparing them with other images in the same group, automatically selecting the optimal scale for each element.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`objectWidth`}),` or `,(0,c.jsx)(t.code,{children:`objectHeight`}),` properties specify the real physical dimensions of the object in the image in millimeters. These values are necessary for calculating the scaling coefficient — the component uses them to determine how much to enlarge or reduce the image so that objects in different images appear the same size. It is sufficient to specify only one property — either width or height.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The component automatically determines which axis (horizontal or vertical) to scale on, based on available dimensions and image proportions. If `,(0,c.jsx)(t.code,{children:`objectWidth`}),` is specified, scaling will occur horizontally, if `,(0,c.jsx)(t.code,{children:`objectHeight`}),` — vertically. This allows flexible work with images of different orientations.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Elements with the same `,(0,c.jsx)(t.code,{children:`adaptiveGroup`}),` value scale synchronously, ensuring consistent visual object sizes across all images in the group. This is especially useful when displaying product galleries or comparison tables where maintaining visual size correspondence is important.`]}),`
`,(0,c.jsxs)(t.p,{children:[`For performance optimization, scaling calculations are performed only for visible elements within the viewport plus a small margin. If an element is outside the visible area, calculations are paused until the element appears on screen. The `,(0,c.jsx)(t.code,{children:`adaptiveAlways`}),` property disables this optimization and forces the component to constantly recalculate the scale regardless of element visibility.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone1 = ref('/images/phone-model-a.png')
const phone2 = ref('/images/phone-model-b.png')
const phone3 = ref('/images/phone-model-c.png')
<\/script>

<template>
<!-- Basic usage with object width -->
<Image
  :value="phone1"
  adaptive
  object-width="76.2"
/>

<!-- Multiple images in one group -->
<Image
  :value="phone1"
  adaptive
  adaptive-group="phones"
  object-width="76.2"
/>
<Image
  :value="phone2"
  adaptive
  adaptive-group="phones"
  object-width="71.9"
/>
<Image
  :value="phone3"
  adaptive
  adaptive-group="phones"
  object-width="129.9"
/>

<!-- With height instead of width -->
<Image
  adaptive
  object-height="154.8"
  :value="phone1"
/>

<!-- Constant scaling -->
<Image
  adaptive
  adaptive-always
  object-width="76.2"
  :value="phone1"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};