import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getSearchExp - Создание RegExp для поиска по всем словам`}),`
`,(0,c.jsx)(n.h1,{id:`getsearchexp`,children:(0,c.jsx)(n.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, строящая регистронезависимое регулярное выражение `,(0,c.jsx)(n.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(n.strong,{children:`все`}),` слова из поисковой строки (в любом порядке).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Каждое слово разбивается пробелами, экранируется и оборачивается в positive lookahead `,(0,c.jsx)(n.code,{children:`(?=.*?слово)`}),`. Это удобно для реализации живого поиска или фильтрации по нескольким словам одновременно.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`128`}),`) — Максимально допустимая длина строки поиска.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Регулярное выражение с флагом `,(0,c.jsx)(n.code,{children:`i`}),` (без учёта регистра).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если строка `,(0,c.jsx)(n.code,{children:`search`}),` пустая, не является строкой или превышает `,(0,c.jsx)(n.code,{children:`limit`}),`, возвращается `,(0,c.jsx)(n.code,{children:`/^/`}),` (совпадает с началом любой строки).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

// Базовое использование
const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — содержит оба слова
regex.test('bar foo')      // true  — порядок не важен
regex.test('foo only')     // false — слово "bar" отсутствует

// Специальные символы экранируются автоматически
const regex2 = getSearchExp('цена $10.00')
regex2.test('цена $10.00') // true
regex2.test('цена X10Y00') // false

// Использование пользовательского лимита
const regex3 = getSearchExp('очень длинная строка поиска', 10)
regex3.test('любая строка') // true — возвращает /^/, так как длина поиска > 10
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};