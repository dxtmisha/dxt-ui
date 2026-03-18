import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/strFill - Создание строки, заполненной значением"}),`
`,n.jsx(s.h1,{id:"strfill",children:n.jsx(s.code,{children:"strFill"})}),`
`,n.jsx(s.p,{children:"Метод создает строку длиной count, состоящую из символов value."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"value: string"})," — символ для заполнения."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"count: number"})," — длина строки."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"}),`
`,n.jsx(s.code,{children:"string"})," — строка, заполненная указанным значением."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { strFill } from '@dxtmisha/functional-basic'

const string = strFill('a', 3)
console.log(string) // 'aaa'
`})})]})}function h(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(t,{...r})}):t(r)}export{h as default};
