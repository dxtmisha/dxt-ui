import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/getElement - Получение HTML-элемента"}),`
`,n.jsx(e.h1,{id:"getelement",children:n.jsx(e.code,{children:"getElement"})}),`
`,n.jsxs(e.p,{children:["Возвращает ",n.jsx(e.code,{children:"Element"})," (HTML-узел) документа. Утилита принимает на вход строку-селектор, объект ",n.jsx(e.code,{children:"Window"})," или готовый ",n.jsx(e.code,{children:"Element"})," и возвращает соответствующий DOM-узел, если выполнение происходит в браузере. В средах без DOM (например, SSR) возвращает ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<E>"})," — CSS-селектор (например, ",n.jsx(e.code,{children:"'.btn'"}),"), объект ",n.jsx(e.code,{children:"Window"})," или уже существующий узел ",n.jsx(e.code,{children:"Element"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"R | undefined"})," — найденный или переданный DOM-узел, либо ",n.jsx(e.code,{children:"document.body"})," если был передан ",n.jsx(e.code,{children:"Window"}),". Возвращает ",n.jsx(e.code,{children:"undefined"}),", если элемент не найден или DOM недоступен."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getElement } from '@dxtmisha/functional-basic'

// Поиск по селектору
const btn = getElement('.submit-btn')

// Передача существующего элемента
const sameBtn = getElement(btn)

// Передача Window вернет document.body
const body = getElement(window)
`})})]})}function h(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(d,{...t})}):d(t)}export{h as default};
