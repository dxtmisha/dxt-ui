import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/isInput - Проверка на элемент ввода"}),`
`,n.jsx(e.h1,{id:"isinput",children:n.jsx(e.code,{children:"isInput"})}),`
`,n.jsxs(e.p,{children:["Проверяет, является ли элемент полем ввода (",n.jsx(e.code,{children:"input"}),", ",n.jsx(e.code,{children:"textarea"}),", ",n.jsx(e.code,{children:"select"}),") или элементом с атрибутом ",n.jsx(e.code,{children:"contenteditable"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: HTMLElement | EventTarget | null"})," — проверяемый элемент."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если элемент является полем ввода или редактируемым, иначе ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function p(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{p as default};
