import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/getArrayHighlightMatch - Структурированное выделение совпадений`}),`
`,(0,l.jsx)(t.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(t.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`Утилита для разделения строки на массив объектов для выделения совпадений. Каждый объект содержит `,(0,l.jsx)(t.code,{children:`text`}),` и логическое значение `,(0,l.jsx)(t.code,{children:`isMatch`}),`, указывающее, соответствует ли фрагмент поисковому запросу. Это полезно для UI-фреймворков (Vue, React), чтобы отрисовывать подсвеченный текст без использования `,(0,l.jsx)(t.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — Исходная строка для обработки.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string`}),` — Строка поиска (поддерживает поиск по нескольким словам через пробел).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`{ text: string, isMatch: boolean }[]`}),` — Массив текстовых сегментов со статусом совпадения.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};