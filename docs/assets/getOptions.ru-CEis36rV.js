import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional/Functions/getOptions - Получение опций запроса"}),`
`,n.jsx(e.h1,{id:"getoptions",children:n.jsx(e.code,{children:"getOptions"})}),`
`,n.jsxs(e.p,{children:["Возвращает опции запроса. Если переданная опция является строкой, возвращается объект с полем ",n.jsx(e.code,{children:"method"}),", равным этой строке. Если передан объект, возвращается он сам. Если параметр не передан, возвращается пустой объект."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — Опции запроса или строка с методом."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"RefOrNormal<ApiFetch>"})," — Опции для запроса ",n.jsx(e.code,{children:"ApiFetch"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{m as default};
