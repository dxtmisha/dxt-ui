import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/uint8ArrayToBase64 - Преобразование Uint8Array в Base64`}),`
`,(0,c.jsx)(t.h1,{id:`uint8arraytobase64`,children:(0,c.jsx)(t.code,{children:`uint8ArrayToBase64`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует массив бинарных данных `,(0,c.jsx)(t.code,{children:`Uint8Array`}),` в строку в кодировке Base64. Поддерживает работу как в браузере (через `,(0,c.jsx)(t.code,{children:`btoa`}),`), так и в среде Node.js (через `,(0,c.jsx)(t.code,{children:`Buffer`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bytes: Uint8Array`}),` — Бинарные данные.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка в формате Base64.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};