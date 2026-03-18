import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/getExactSearchExp - Создание RegExp для точного поиска"}),`
`,e.jsx(n.h1,{id:"getexactsearchexp",children:e.jsx(n.code,{children:"getExactSearchExp"})}),`
`,e.jsxs(n.p,{children:["Утилита, создающая регистронезависимое регулярное выражение ",e.jsx(n.code,{children:"RegExp"})," для поиска точного совпадения строки."]}),`
`,e.jsxs(n.p,{children:["В отличие от ",e.jsx(n.code,{children:"getSearchExp"}),", эта функция ищет строку целиком (с экранированием спецсимволов), не разделяя её на отдельные слова."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: string"})," — Строка поиска для точного сопоставления."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — Регулярное выражение с флагом ",e.jsx(n.code,{children:"i"})," (без учёта регистра)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — не точное совпадение
`})})]})}function a(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default};
