import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/strSplit - Разделение строки с поддержкой лимита (PHP style)`}),`
`,(0,c.jsx)(t.h1,{id:`strsplit`,children:(0,c.jsx)(t.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Разделяет строку на массив подстрок по указанному разделителю. В отличие от стандартного `,(0,c.jsx)(t.code,{children:`String.prototype.split`}),`, при указании лимита оставшаяся часть строки сохраняется в последнем элементе массива (аналогично функции `,(0,c.jsx)(t.code,{children:`explode`}),` в PHP).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number | string`}),` — Исходное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator: string`}),` — Разделитель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — Максимальное количество элементов. Если элементов больше лимита, последний элемент будет содержать весь остаток строки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string[]`}),` — Массив подстрок.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Без лимита
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// С лимитом 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// С числом в качестве значения
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};