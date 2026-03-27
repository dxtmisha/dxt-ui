import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/strSplit - Разделение строки с поддержкой лимита (PHP style)`}),`
`,(0,c.jsx)(n.h1,{id:`strsplit`,children:(0,c.jsx)(n.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Разделяет строку на массив подстрок по указанному разделителю. В отличие от стандартного `,(0,c.jsx)(n.code,{children:`String.prototype.split`}),`, при указании лимита оставшаяся часть строки сохраняется в последнем элементе массива (аналогично функции `,(0,c.jsx)(n.code,{children:`explode`}),` в PHP).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number | string`}),` — Исходное значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — Разделитель.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — Максимальное количество элементов. Если элементов больше лимита, последний элемент будет содержать весь остаток строки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string[]`}),` — Массив подстрок.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Без лимита
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// С лимитом 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// С числом в качестве значения
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};