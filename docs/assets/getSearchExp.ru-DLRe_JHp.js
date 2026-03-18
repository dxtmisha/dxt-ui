import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getSearchExp - Создание RegExp для поиска по всем словам"}),`
`,e.jsx(n.h1,{id:"getsearchexp",children:e.jsx(n.code,{children:"getSearchExp"})}),`
`,e.jsxs(n.p,{children:["Утилита, строящая регистронезависимое глобальное регулярное выражение ",e.jsx(n.code,{children:"RegExp"})," для поиска строк, содержащих ",e.jsx(n.strong,{children:"все"})," слова из поисковой строки (в любом порядке)."]}),`
`,e.jsxs(n.p,{children:["Каждое слово разбивается пробелами, экранируется и оборачивается в lookahead ",e.jsx(n.code,{children:"(?=.*?слово)"}),". Это удобно для реализации живого поиска/фильтрации по нескольким словам одновременно."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: string"})," — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — Регулярное выражение с флагами ",e.jsx(n.code,{children:"ig"})," (глобальный, без учёта регистра)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getSearchExp } from '@dxtmisha/functional-basic'

const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — содержит оба слова
regex.test('bar foo')      // true  — порядок не важен
regex.test('foo only')     // false — слово bar отсутствует

// Специальные символы экранируются автоматически
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false
`})})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
