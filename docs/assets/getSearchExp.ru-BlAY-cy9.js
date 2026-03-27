import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getSearchExp - Создание RegExp для поиска по всем словам`}),`
`,(0,c.jsx)(n.h1,{id:`getsearchexp`,children:(0,c.jsx)(n.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, строящая регистронезависимое глобальное регулярное выражение `,(0,c.jsx)(n.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(n.strong,{children:`все`}),` слова из поисковой строки (в любом порядке).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Каждое слово разбивается пробелами, экранируется и оборачивается в lookahead `,(0,c.jsx)(n.code,{children:`(?=.*?слово)`}),`. Это удобно для реализации живого поиска/фильтрации по нескольким словам одновременно.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Регулярное выражение с флагами `,(0,c.jsx)(n.code,{children:`ig`}),` (глобальный, без учёта регистра).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — содержит оба слова
regex.test('bar foo')      // true  — порядок не важен
regex.test('foo only')     // false — слово bar отсутствует

// Специальные символы экранируются автоматически
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};