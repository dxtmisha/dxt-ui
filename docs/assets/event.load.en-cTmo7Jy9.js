import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`load`,children:(0,c.jsx)(t.code,{children:`load`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires after the image is loaded.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: ImageEventData`}),` — object with image data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`ImageEventData structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ImageTypeItem`}),` — image type (`,(0,c.jsx)(t.code,{children:`'image'`}),`, `,(0,c.jsx)(t.code,{children:`'icon'`}),`, `,(0,c.jsx)(t.code,{children:`'pdf'`}),`, `,(0,c.jsx)(t.code,{children:`'file'`}),`, `,(0,c.jsx)(t.code,{children:`'flag'`}),`, `,(0,c.jsx)(t.code,{children:`'color'`}),`, etc.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: ImageEventItem`}),` — image data (`,(0,c.jsx)(t.code,{children:`ImageItem`}),` object, URL string, or `,(0,c.jsx)(t.code,{children:`undefined`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`ImageItem structure (when image is an object):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: number`}),` — image width`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height: number`}),` — image height`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement`}),` — image DOM element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src: string`}),` — image source (URL)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleLoad = (data) => {
console.log('Image type:', data.type)

if (typeof data.image === 'object' && data.image) {
  console.log('Width:', data.image.width)
  console.log('Height:', data.image.height)
  console.log('URL:', data.image.src)
} else {
  console.log('Image URL:', data.image)
}
}
<\/script>

<template>
<Image
  src="/path/to/image.jpg"
  @load="handleLoad"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};