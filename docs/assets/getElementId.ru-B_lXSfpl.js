import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getElementId - Получение или назначение ID элемента"}),`
`,n.jsx(e.h1,{id:"getelementid",children:n.jsx(e.code,{children:"getElementId"})}),`
`,n.jsxs(e.p,{children:["Возвращает ",n.jsx(e.code,{children:"id"})," указанного DOM-элемента. Если элемент существует, но у него нет атрибута ",n.jsx(e.code,{children:"id"}),", функция автоматически сгенерирует уникальный идентификатор, назначит его элементу и вернет."]}),`
`,n.jsxs(e.p,{children:["Также функция позволяет опционально добавить CSS-селектор к возвращаемой строке, чтобы сразу использовать результат как готовый составной селектор (например, ",n.jsx(e.code,{children:'"#id-123456 .child-class"'}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<E>"})," — DOM-элемент или селектор, для которого нужно получить/назначить ID."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selector?: string"})," — Опциональная строка, которая будет добавлена к возвращаемому значению (например, псевдоклассы или селекторы потомков)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Строка с ID элемента, либо строка сгенерированного ID, если элемент не найден."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getElementId } from '@dxtmisha/functional-basic'

// У элемента нет ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // Например: 'id-123456'
console.log(div.id) // 'id-123456' (назначился автоматически)

// Использование дополнительного селектора
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-123456 > span.active'
`})})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{h as default};
