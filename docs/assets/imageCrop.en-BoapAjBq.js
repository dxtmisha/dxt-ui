import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`An interactive image cropping component that seamlessly pairs an underlying image viewport with an overlay cropping area.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ImageCrop`}),` combines the capabilities of the `,(0,c.jsx)(t.code,{children:`Image`}),` and `,(0,c.jsx)(t.code,{children:`CropArea`}),` components into a single unified interface. It renders the source graphic (URLs, uploaded files, or custom media) within a responsive container and overlays a resizable, draggable crop boundary box over it. The crop coordinates are managed as percentage insets (`,(0,c.jsx)(t.code,{children:`[top, right, bottom, left]`}),`) and can be bound reactively using `,(0,c.jsx)(t.code,{children:`v-model`}),` (or `,(0,c.jsx)(t.code,{children:`v-model:value`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Integrated image display and overlay crop mask in a single component`}),`
`,(0,c.jsx)(t.li,{children:`8-directional boundary resize handles (top, right, bottom, left, and all 4 corners)`}),`
`,(0,c.jsx)(t.li,{children:`Central panning handle for repositioning the crop frame without resizing`}),`
`,(0,c.jsxs)(t.li,{children:[`Two-way reactive coordinate binding via `,(0,c.jsx)(t.code,{children:`v-model`}),` (`,(0,c.jsx)(t.code,{children:`[top, right, bottom, left]`}),` in percentages)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic coordination with `,(0,c.jsx)(t.code,{children:`CropArea`}),` and `,(0,c.jsx)(t.code,{children:`Image`}),` sub-components`]}),`
`,(0,c.jsxs)(t.li,{children:[`Image customization via `,(0,c.jsx)(t.code,{children:`image`}),` and `,(0,c.jsx)(t.code,{children:`imageAttrs`}),` props`]}),`
`,(0,c.jsx)(t.li,{children:`Accessible ARIA attributes and keyboard/pointer navigation support`}),`
`,(0,c.jsxs)(t.li,{children:[`Interactive state controls: `,(0,c.jsx)(t.code,{children:`disabled`}),` to disable all interactions, `,(0,c.jsx)(t.code,{children:`readonly`}),` to lock crop boundaries`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`User profile picture and avatar upload/crop dialogs`}),`
`,(0,c.jsx)(t.li,{children:`Banner, cover image, and thumbnail editing tools`}),`
`,(0,c.jsx)(t.li,{children:`Photo trimming, document alignment, and focal region selection`}),`
`,(0,c.jsx)(t.li,{children:`Media management dashboards and image upload pipelines`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cropCoordinates = ref([15, 20, 15, 20])
<\/script>

<template>
<div style="position: relative; width: 400px; height: 300px;">
  <ImageCrop
    image="/demo-image.jpg"
    alt="Profile picture preview"
    v-model="cropCoordinates"
  />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};