import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`load`,children:(0,c.jsx)(t.code,{children:`load`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает после загрузки изображения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: ImageEventData`}),` — объект с данными изображения`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура ImageEventData:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ImageTypeItem`}),` — тип изображения (`,(0,c.jsx)(t.code,{children:`'image'`}),`, `,(0,c.jsx)(t.code,{children:`'icon'`}),`, `,(0,c.jsx)(t.code,{children:`'pdf'`}),`, `,(0,c.jsx)(t.code,{children:`'file'`}),`, `,(0,c.jsx)(t.code,{children:`'flag'`}),`, `,(0,c.jsx)(t.code,{children:`'color'`}),` и др.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: ImageEventItem`}),` — данные изображения (объект `,(0,c.jsx)(t.code,{children:`ImageItem`}),`, строка URL или `,(0,c.jsx)(t.code,{children:`undefined`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура ImageItem (если image - объект):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: number`}),` — ширина изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height: number`}),` — высота изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement`}),` — DOM элемент изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src: string`}),` — источник изображения (URL)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleLoad = (data) => {
console.log('Тип изображения:', data.type)

if (typeof data.image === 'object' && data.image) {
  console.log('Ширина:', data.image.width)
  console.log('Высота:', data.image.height)
  console.log('URL:', data.image.src)
} else {
  console.log('URL изображения:', data.image)
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