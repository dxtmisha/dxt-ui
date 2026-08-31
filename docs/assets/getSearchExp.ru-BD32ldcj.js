import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getSearchExp - Создание RegExp для поиска по всем словам`}),`
`,(0,c.jsx)(t.h1,{id:`getsearchexp`,children:(0,c.jsx)(t.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, строящая регистронезависимое регулярное выражение `,(0,c.jsx)(t.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(t.strong,{children:`все`}),` слова из поисковой строки (в любом порядке).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каждое слово разбивается пробелами, экранируется и оборачивается в positive lookahead `,(0,c.jsx)(t.code,{children:`(?=.*?слово)`}),`. Это удобно для реализации живого поиска или фильтрации по нескольким словам одновременно.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` (необязательно, по умолчанию: `,(0,c.jsx)(t.code,{children:`128`}),`) — Максимально допустимая длина строки поиска.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Регулярное выражение с флагом `,(0,c.jsx)(t.code,{children:`i`}),` (без учёта регистра).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если строка `,(0,c.jsx)(t.code,{children:`search`}),` пустая, не является строкой или превышает `,(0,c.jsx)(t.code,{children:`limit`}),`, возвращается `,(0,c.jsx)(t.code,{children:`/^/`}),` (совпадает с началом любой строки).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};