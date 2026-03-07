import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/isInDom - Проверка наличия элемента в DOM"}),`
`,n.jsx(e.h1,{id:"isindom",children:n.jsx(e.code,{children:"isInDom"})}),`
`,n.jsx(e.p,{children:"Проверяет, находится ли еще элемент в дереве DOM."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: ElementOrString<E>"})," — селекторов для сопоставления или Element."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если элемент находится в DOM, иначе ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isInDom } from '@dxtmisha/functional-basic'

const div = document.createElement('div')
document.body.appendChild(div)
console.log(isInDom(div)) // true
`})})]})}function a(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{a as default};
