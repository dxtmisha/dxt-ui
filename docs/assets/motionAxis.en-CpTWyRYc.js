import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for organizing transitions between elements (slides).`}),`
`,(0,c.jsx)(t.p,{children:`MotionAxis allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Slide transition animation along X, Y, Z axes`}),`
`,(0,c.jsx)(t.li,{children:`Automatic or manual direction control (next/back)`}),`
`,(0,c.jsx)(t.li,{children:`Smooth container height animation to fit content`}),`
`,(0,c.jsx)(t.li,{children:`Slide lifecycle management in DOM (inDom, inDomSlide)`}),`
`,(0,c.jsx)(t.li,{children:`Slot support for each slide`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Sliders and carousels`}),`
`,(0,c.jsx)(t.li,{children:`Step-by-step forms (wizards)`}),`
`,(0,c.jsx)(t.li,{children:`Tab switching with animation`}),`
`,(0,c.jsx)(t.li,{children:`Image galleries`}),`
`,(0,c.jsx)(t.li,{children:`Onboarding screens`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Slide 1</button>
  <button @click="selected = 'slide2'">Slide 2</button>
</div>

<MotionAxis :selected="selected">
  <template #slide1>
    <div class="slide">Slide 1 Content</div>
  </template>
  <template #slide2>
    <div class="slide">Slide 2 Content</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};