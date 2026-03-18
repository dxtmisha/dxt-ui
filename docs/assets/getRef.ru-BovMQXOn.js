import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional/Functions/getRef - Извлечение значения"}),`
`,n.jsx(e.h1,{id:"getref",children:n.jsx(e.code,{children:"getRef"})}),`
`,n.jsxs(e.p,{children:["Утилитарная функция, которая извлекает базовое значение из реактивной переменной ",n.jsx(e.code,{children:"Ref"})," или возвращает само значение, если оно не является реактивным. Это полезно для гарантии работы с чистыми данными независимо от их состояния реактивности."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: RefOrNormal<T>"})," — Реактивная переменная (",n.jsx(e.code,{children:"Ref"}),") или обычное значение."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"T"})," — Распакованное значение ",n.jsx(e.code,{children:"Ref"})," или само входное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function h(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{h as default};
