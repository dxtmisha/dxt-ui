import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/ensureMaxSize - Изменение размера изображения до максимального`}),`
`,(0,c.jsx)(n.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(n.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(n.p,{children:`Гарантирует, что изображение не превышает максимальный размер, изменяя его при необходимости. Функция возвращает изображение в формате строки Base64.`}),`
`,(0,c.jsx)(n.p,{children:`Эта функция полезна для оптимизации изображений перед их отправкой на сервер, что позволяет сократить использование трафика и объем занимаемой памяти.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file: Uint8Array`}),` — Файл изображения в виде `,(0,c.jsx)(n.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compress: number`}),` (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`0.56`}),`) — Максимальный размер в виде доли от оригинального размера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`) — MIME-тип выходного изображения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Возвращает промис, который разрешается в строку Base64 измененного изображения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};