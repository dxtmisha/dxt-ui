import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A composite image input component combining drag-and-drop file upload, automated client-side downscaling, and interactive boundary cropping.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`InputImage`}),` brings together the full image selection and preparation workflow into a single cohesive form control. It embeds `,(0,c.jsx)(t.code,{children:`Dropzone`}),` for intuitive drag-and-drop or file dialog selection, validates image formats, automatically downscales large images to `,(0,c.jsx)(t.code,{children:`maxPixel`}),`, and launches an interactive `,(0,c.jsx)(t.code,{children:`ImageCrop`}),` viewport for percentage-based coordinate trimming. Quick action buttons allow seamless image replacement and clearing.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Drag-and-Drop & Picker:`}),` Embedded `,(0,c.jsx)(t.code,{children:`Dropzone`}),` supporting file dragging and native file dialog opening`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Downscaling:`}),` Client-side image processing and resizing down to configurable `,(0,c.jsx)(t.code,{children:`maxPixel`}),` (default: 1280px)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Interactive Cropping:`}),` Embedded `,(0,c.jsx)(t.code,{children:`ImageCrop`}),` with 8-directional edge/corner resize handles and central panning`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quick Action Toolbar:`}),` Overlaid action buttons for uploading replacements and clearing the current image`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Two-Way Data Binding:`}),` Seamless `,(0,c.jsx)(t.code,{children:`v-model`}),` binding for structured `,(0,c.jsx)(t.code,{children:`{ value?: string, crop?: CropAreaCoordinator }`}),` data or raw string sources`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Field Integration:`}),` Built-in support for field labels, character counters, validation errors, and helper messages`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Programmatic API:`}),` Exposes `,(0,c.jsx)(t.code,{children:`open()`}),` to trigger file selection and `,(0,c.jsx)(t.code,{children:`clear()`}),` to reset the image`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Accessibility & States:`}),` ARIA attribute bindings, keyboard navigation, and full support for `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`readonly`}),`, and `,(0,c.jsx)(t.code,{children:`isSkeleton`}),` states`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`User profile picture and avatar upload forms`}),`
`,(0,c.jsx)(t.li,{children:`Photo trimming and banner editing workflows`}),`
`,(0,c.jsx)(t.li,{children:`E-commerce product photo upload with consistent aspect ratio crop`}),`
`,(0,c.jsx)(t.li,{children:`Content management dashboards and media upload pipelines`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const image = ref({
value: '/demo-photo.jpg',
crop: [10, 10, 10, 10]
})
<\/script>

<template>
<InputImage
  label="Profile photo"
  helper-message="PNG, JPG up to 10MB"
  :max-size="1280"
  v-model="image"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};