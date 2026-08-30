import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`An interactive rectangular crop and frame area component for image and media content manipulation.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`CropArea`}),` overlays an interactive clipping mask and resizable boundary box on top of images, canvases, or media viewports. It calculates coordinate insets in percentages (`,(0,c.jsx)(t.code,{children:`[top, right, bottom, left]`}),`) relative to the container element and automatically synchronizes them via CSS custom properties and reactive Vue model events. It features 8-directional resize handles, pan-dragging of the central crop rectangle, minimum dimension enforcement, and individual edge disable controls.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`8-directional resize handles (4 edges: top, right, bottom, left; 4 corners: top-left, top-right, bottom-left, bottom-right)`}),`
`,(0,c.jsxs)(t.li,{children:[`Central panning handle (`,(0,c.jsx)(t.code,{children:`center`}),`) to drag the entire cropped area without resizing`]}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic CSS custom variable binding (`,(0,c.jsx)(t.code,{children:`--sys-crop-top`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-right`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-bottom`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-left`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Percentage-based coordinate array (`,(0,c.jsx)(t.code,{children:`[top, right, bottom, left]`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Minimum dimension threshold enforcement via `,(0,c.jsx)(t.code,{children:`min`}),` prop (default: 8%)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Direction-specific disabling (`,(0,c.jsx)(t.code,{children:`disabledTop`}),`, `,(0,c.jsx)(t.code,{children:`disabledRight`}),`, `,(0,c.jsx)(t.code,{children:`disabledBottom`}),`, `,(0,c.jsx)(t.code,{children:`disabledLeft`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Full text selection locking on `,(0,c.jsx)(t.code,{children:`document.body`}),` during active drag operations`]}),`
`,(0,c.jsx)(t.li,{children:`Touch and mouse pointer event handling with boundary clamping`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Avatar and profile picture cropping dialogs`}),`
`,(0,c.jsx)(t.li,{children:`Image editing and thumbnail adjustment tools`}),`
`,(0,c.jsx)(t.li,{children:`Document scanning and photo trimming workflows`}),`
`,(0,c.jsx)(t.li,{children:`Custom viewport clipping and focal region selection`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cropCoordinates = ref([10, 15, 10, 15])
<\/script>

<template>
<div style="position: relative; width: 400px; height: 300px; overflow: hidden;">
  <img
    src="/demo-image.jpg"
    style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"
    alt="Preview"
  />
  <CropArea v-model:value="cropCoordinates" />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};