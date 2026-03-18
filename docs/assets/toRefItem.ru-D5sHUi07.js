import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Functions/toRefItem - Нормализация реактивной переменной Ref"}),`
`,e.jsx(n.h1,{id:"torefitem",children:e.jsx(n.code,{children:"toRefItem"})}),`
`,e.jsxs(n.p,{children:["Утилитарная функция, которая гарантирует, что значение является реактивной переменной ",e.jsx(n.code,{children:"Ref"}),". Если входное значение уже является ",e.jsx(n.code,{children:"Ref"}),", оно возвращается как есть. Если входное значение является обычным значением, оно оборачивается в новую переменную ",e.jsx(n.code,{children:"Ref"}),". Это полезно для функций, которые ожидают реактивную ссылку в качестве аргумента."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: RefOrNormal<T>"})," — Реактивная переменная (",e.jsx(n.code,{children:"Ref"}),") или обычное значение."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"Ref<T>"})," — Реактивная переменная ",e.jsx(n.code,{children:"Ref"}),", содержащая значение."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Возвращает исходный ref
const normalized2 = toRefItem(ordinaryValue) // Возвращает новый ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function x(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{x as default};
