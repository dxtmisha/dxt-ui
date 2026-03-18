import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/writeClipboardData - Запись текста в буфер обмена"}),`
`,n.jsx(e.h1,{id:"writeclipboarddata",children:n.jsx(e.code,{children:"writeClipboardData"})}),`
`,n.jsxs(e.p,{children:["Записывает текстовую строку в буфер обмена пользователя. Использует современный ",n.jsx(e.code,{children:"navigator.clipboard API"}),", а при его недоступности переключается на ",n.jsx(e.code,{children:"document.execCommand"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string"})," — Текст для записи."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Promise<void>"})," — Промис, который завершается после успешной записи."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Скопированный текст')
`})})]})}function p(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{p as default};
