import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getImageSrc - Получение адреса источника изображения`}),`
`,(0,c.jsx)(t.h1,{id:`getimagesrc`,children:(0,c.jsx)(t.code,{children:`getImageSrc`})}),`
`,(0,c.jsxs)(t.p,{children:[`Служит для безопасного извлечения строки источника (`,(0,c.jsx)(t.code,{children:`src`}),`) из объекта изображения `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` или строкового значения (URL / Data URL). Если на вход подана строка, она возвращается без изменений. Если передан элемент `,(0,c.jsx)(t.code,{children:`<img>`}),`, возвращается значение его атрибута `,(0,c.jsx)(t.code,{children:`src`}),`. При отсутствии значения возвращается пустая строка.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — Элемент изображения, строковый источник (URL) или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка источника изображения или пустая строка `,(0,c.jsx)(t.code,{children:`''`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getImageSrc } from '@dxtmisha/functional-basic'

// Передаем строку - URL
const src1 = getImageSrc('https://example.com/photo.png')
console.log(src1) // 'https://example.com/photo.png'

// Передаем существующий тег img
const imgElement = document.querySelector('img')
const src2 = getImageSrc(imgElement)
console.log(src2) // 'https://example.com/...'

// Передаем undefined
console.log(getImageSrc(undefined)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};