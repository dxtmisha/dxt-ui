import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/uint8ArrayToBase64 - Преобразование Uint8Array в Base64`}),`
`,(0,c.jsx)(n.h1,{id:`uint8arraytobase64`,children:(0,c.jsx)(n.code,{children:`uint8ArrayToBase64`})}),`
`,(0,c.jsxs)(n.p,{children:[`Преобразует массив бинарных данных `,(0,c.jsx)(n.code,{children:`Uint8Array`}),` в строку в кодировке Base64. Поддерживает работу как в браузере (через `,(0,c.jsx)(n.code,{children:`btoa`}),`), так и в среде Node.js (через `,(0,c.jsx)(n.code,{children:`Buffer`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`bytes: Uint8Array`}),` — Бинарные данные.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка в формате Base64.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};