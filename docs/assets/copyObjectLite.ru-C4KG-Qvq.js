import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/copyObjectLite - Поверхностное копирование объекта`}),`
`,(0,c.jsx)(t.h1,{id:`copyobjectlite`,children:(0,c.jsx)(t.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создает новую поверхностную (shallow) копию простого объекта, используя `,(0,c.jsx)(t.code,{children:`Object.assign`}),`. Опционально может применять к результату дополнительные свойства из второго аргумента `,(0,c.jsx)(t.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Поскольку это поверхностное копирование, вложенные объекты и массивы будут скопированы по ссылке, а не по значению.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Объект, который необходимо скопировать.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source?: any`}),` — Дополнительные свойства для слияния с основным объектом `,(0,c.jsx)(t.code,{children:`value`}),`. Значения из `,(0,c.jsx)(t.code,{children:`source`}),` перезапишут значения из `,(0,c.jsx)(t.code,{children:`value`}),`, если ключи совпадают.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`R`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`T`}),`) — Новая поверхностная копия объекта.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Простое копирование
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (ссылка на один и тот же вложенный объект)

// Копирование с дополнительными свойствами
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};