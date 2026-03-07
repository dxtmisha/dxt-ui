import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/getElementItem - Получение значения свойства элемента"}),`
`,e.jsx(n.h1,{id:"getelementitem",children:e.jsx(n.code,{children:"getElementItem"})}),`
`,e.jsxs(n.p,{children:["Возвращает значение определенного свойства из HTML-элемента (например, ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"className"}),", пользовательское свойство, если оно определено как ключ объекта типа элемента). Утилита использует ",e.jsx(n.code,{children:"getElement"})," для поиска узла, и если элемент не найден или у него нет указанного свойства, возвращает ",e.jsx(n.code,{children:"defaultValue"})," (которое по умолчанию равно ",e.jsx(n.code,{children:"undefined"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — Строка селектора или готовый DOM-элемент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — Имя свойства элемента (ключ), значение которого требуется получить."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: D"})," — Значение по умолчанию, возвращаемое, если свойство не найдено."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"T[K] | D | undefined"})," — Значение запрашиваемого свойства или ",e.jsx(n.code,{children:"defaultValue"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Получение ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Если свойство отсутствует и мы передаем fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function x(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};
