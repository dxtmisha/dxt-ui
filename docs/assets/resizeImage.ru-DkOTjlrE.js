import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/resizeImage - Асинхронное масштабирование изображения`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimage`,children:(0,c.jsx)(t.code,{children:`resizeImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Асинхронно загружает и масштабирует изображение, если его ширина или высота превышают указанный максимальный размер `,(0,c.jsx)(t.code,{children:`maxSize`}),`. Возвращает Promise со строкой Data URL уменьшенного изображения или исходным URL/строкой, если уменьшение не требуется.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — Элемент изображения или строковый источник (URL, Data URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — Максимальный допустимый размер в пикселях (по умолчанию `,(0,c.jsx)(t.code,{children:`1280`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Опциональный MIME-тип для результирующего Data URL (например, `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Промис со строкой Data URL сжатого изображения или исходным источником.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImage } from '@dxtmisha/functional-basic'

// Уменьшение изображения из Data URL или URL
const resizedDataUrl = await resizeImage('data:image/png;base64,...', 1280)
console.log(resizedDataUrl)

// Использование с элементом <img>
const img = document.querySelector('img')
const result = await resizeImage(img, 800, 'image/jpeg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};