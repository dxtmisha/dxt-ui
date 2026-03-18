import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/uint8ArrayToBase64 - Преобразование Uint8Array в Base64"}),`
`,n.jsx(r.h1,{id:"uint8arraytobase64",children:n.jsx(r.code,{children:"uint8ArrayToBase64"})}),`
`,n.jsxs(r.p,{children:["Преобразует массив бинарных данных ",n.jsx(r.code,{children:"Uint8Array"})," в строку в кодировке Base64. Поддерживает работу как в браузере (через ",n.jsx(r.code,{children:"btoa"}),"), так и в среде Node.js (через ",n.jsx(r.code,{children:"Buffer"}),")."]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"bytes: Uint8Array"})," — Бинарные данные."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
`,n.jsx(r.code,{children:"string"})," — Строка в формате Base64."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function h(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default};
