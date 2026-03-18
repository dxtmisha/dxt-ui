import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/toDate - Преобразование значения в объект Date"}),`
`,n.jsx(e.h1,{id:"todate",children:n.jsx(e.code,{children:"toDate"})}),`
`,n.jsxs(e.p,{children:["Преобразует входное значение (дату, число или строку) в объект ",n.jsx(e.code,{children:"Date"}),". Поддерживает различные строковые форматы, включая ISO-подобные строки без разделителей, а также автоматическую подстановку часового пояса."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: T"})," — Входное значение (объект ",n.jsx(e.code,{children:"Date"}),", метка времени в миллисекундах или строка даты)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Date"})," — Полученный объект даты. Если значение не передано или равно ",n.jsx(e.code,{children:"null"}),", возвращается текущая дата."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};
