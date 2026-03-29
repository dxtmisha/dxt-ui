import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getExactSearchExp - Создание RegExp для точного поиска`}),`
`,(0,c.jsx)(n.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(n.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, создающая регистронезависимое регулярное выражение `,(0,c.jsx)(n.code,{children:`RegExp`}),` для поиска точного совпадения строки.`]}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от `,(0,c.jsx)(n.code,{children:`getSearchExp`}),`, эта функция ищет строку целиком (с экранированием спецсимволов), не разделяя её на отдельные слова.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Строка поиска для точного сопоставления.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Регулярное выражение с флагом `,(0,c.jsx)(n.code,{children:`i`}),` (без учёта регистра).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — не точное совпадение
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};