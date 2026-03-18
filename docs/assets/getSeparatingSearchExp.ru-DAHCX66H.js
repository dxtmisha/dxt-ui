import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getSeparatingSearchExp - Создание RegExp для поиска по отдельным словам"}),`
`,e.jsx(n.h1,{id:"getseparatingsearchexp",children:e.jsx(n.code,{children:"getSeparatingSearchExp"})}),`
`,e.jsxs(n.p,{children:["Утилита, строящая регистронезависимое глобальное регулярное выражение ",e.jsx(n.code,{children:"RegExp"})," для поиска строк, содержащих ",e.jsx(n.strong,{children:"любое"})," из слов поисковой строки (разделение пробелом)."]}),`
`,e.jsxs(n.p,{children:['Каждое слово разбивается пробелами, экранируется и объединяется символом "или" ',e.jsx(n.code,{children:"|"}),". Это полезно, когда нужно найти совпадение хотя бы по одному из введённых слов."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: string"})," — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — Регулярное выражение с флагами ",e.jsx(n.code,{children:"ig"})," (глобальный, без учёта регистра)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Специальные символы экранируются автоматически
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
