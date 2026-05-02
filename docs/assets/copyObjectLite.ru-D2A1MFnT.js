import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/copyObjectLite - Поверхностное копирование объекта`}),`
`,(0,c.jsx)(n.h1,{id:`copyobjectlite`,children:(0,c.jsx)(n.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новую поверхностную (shallow) копию простого объекта, используя `,(0,c.jsx)(n.code,{children:`Object.assign`}),`. Опционально может применять к результату дополнительные свойства из второго аргумента `,(0,c.jsx)(n.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Поскольку это поверхностное копирование, вложенные объекты и массивы будут скопированы по ссылке, а не по значению.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Объект, который необходимо скопировать.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`source?: any`}),` — Дополнительные свойства для слияния с основным объектом `,(0,c.jsx)(n.code,{children:`value`}),`. Значения из `,(0,c.jsx)(n.code,{children:`source`}),` перезапишут значения из `,(0,c.jsx)(n.code,{children:`value`}),`, если ключи совпадают.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`R`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`T`}),`) — Новая поверхностная копия объекта.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Простое копирование
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (ссылка на один и тот же вложенный объект)

// Копирование с дополнительными свойствами
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};