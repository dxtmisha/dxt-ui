import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getArrayHighlightMatch - Структурированное выделение совпадений`}),`
`,(0,l.jsx)(n.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(n.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для разделения строки на массив объектов для выделения совпадений. Каждый объект содержит `,(0,l.jsx)(n.code,{children:`text`}),` и логическое значение `,(0,l.jsx)(n.code,{children:`isMatch`}),`, указывающее, соответствует ли фрагмент поисковому запросу. Это полезно для UI-фреймворков (Vue, React), чтобы отрисовывать подсвеченный текст без использования `,(0,l.jsx)(n.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — Исходная строка для обработки.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string`}),` — Строка поиска (поддерживает поиск по нескольким словам через пробел).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`{ text: string, isMatch: boolean }[]`}),` — Массив текстовых сегментов со статусом совпадения.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getArrayHighlightMatch } from '@dxtmisha/functional-basic'

const result = getArrayHighlightMatch('Привет мир', 'привет')
/*
[
{ text: 'Привет', isMatch: true },
{ text: ' мир', isMatch: false }
]
*/

// Пример в шаблоне Vue:
// <template v-for="item in getArrayHighlightMatch(text, search)">
//   <span :class="{ 'sys-highlight-match': item.isMatch }">{{ item.text }}</span>
// </template>
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};