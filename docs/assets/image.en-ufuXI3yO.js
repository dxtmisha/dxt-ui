import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Universal component for displaying images, icons, flags, and PDF documents with advanced size, positioning, and adaptability controls.`}),`
`,(0,c.jsxs)(t.p,{children:[`Image provides a flexible API for working with various types of visual content. The component automatically detects the source type (image, icon, color, file), selects the optimal rendering method (`,(0,c.jsx)(t.code,{children:`<img>`}),`, `,(0,c.jsx)(t.code,{children:`background-image`}),`, `,(0,c.jsx)(t.code,{children:`<picture>`}),`, `,(0,c.jsx)(t.code,{children:`<object>`}),`, or icon font), and supports advanced cropping and adaptation features.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Support for multiple source types (URL, File, PDF, Material Icons, flags, colors)`}),`
`,(0,c.jsx)(t.li,{children:`Flexible rendering with automatic choice between background and img tag`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive scaling with aspect ratio preservation and srcset support`}),`
`,(0,c.jsx)(t.li,{children:`Display control via fill modes and coordinate cropping`}),`
`,(0,c.jsx)(t.li,{children:`Styling support with masks and color filling`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Material Symbols and system flags`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Responsive images with picture and srcset`}),`
`,(0,c.jsx)(t.li,{children:`Interface icons (Material Design or SVG masks)`}),`
`,(0,c.jsx)(t.li,{children:`User avatars with automatic cropping`}),`
`,(0,c.jsx)(t.li,{children:`Previews of uploaded files and PDF documents`}),`
`,(0,c.jsx)(t.li,{children:`Background images with complex positioning`}),`
`,(0,c.jsx)(t.li,{children:`Displaying country flags via CSS sprites`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')
<\/script>

<template>
<!-- Background image with cropping -->
<Image
  :value="imageUrl"
  size="cover"
  :coordinator="[10, 10, 10, 10]"
/>

<!-- SEO-friendly image -->
<Image
  :value="imageUrl"
  tag-img
  alt="Description"
/>

<!-- Material Design Icon -->
<Image value="filled-home" />
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`The component automatically manages content type and optimizes display based on the source.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};