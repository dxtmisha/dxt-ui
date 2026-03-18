import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/removeCommonPrefix - Удаление общего префикса"}),`
`,n.jsx(e.h1,{id:"removecommonprefix",children:n.jsx(e.code,{children:"removeCommonPrefix"})}),`
`,n.jsx(e.p,{children:"Удаляет общий префикс из начала основной строки. Если основная строка начинается с указанного префикса, функция обрезает его и возвращает строку без пробелов по краям."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mainStr: string"})," — Основная строка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"prefix: string"})," — Строка префикса для удаления."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Новая строка без префикса и лишних пробелов по краям."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Привет, мир!', 'Привет, ')) // 'мир!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function a(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{a as default};
