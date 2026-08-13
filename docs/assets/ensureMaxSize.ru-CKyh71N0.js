import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/ensureMaxSize - Изменение размера изображения до максимального`}),`
`,(0,c.jsx)(t.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(t.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(t.p,{children:`Гарантирует, что изображение не превышает максимальный размер, изменяя его при необходимости. Функция возвращает изображение в формате строки Base64.`}),`
`,(0,c.jsx)(t.p,{children:`Эта функция полезна для оптимизации изображений перед их отправкой на сервер, что позволяет сократить использование трафика и объем занимаемой памяти.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: Uint8Array`}),` — Файл изображения в виде `,(0,c.jsx)(t.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compress: number`}),` (необязательно, по умолчанию: `,(0,c.jsx)(t.code,{children:`0.56`}),`) — Максимальный размер в виде доли от оригинального размера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` (необязательно, по умолчанию: `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`) — MIME-тип выходного изображения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Возвращает промис, который разрешается в строку Base64 измененного изображения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};