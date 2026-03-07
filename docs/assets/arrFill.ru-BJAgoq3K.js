import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as l}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Functions/arrFill - Создание массива, заполненного значением"}),`
`,n.jsx(r.h1,{id:"arrfill",children:n.jsx(r.code,{children:"arrFill"})}),`
`,n.jsx(r.p,{children:"Формирует и возвращает массив заданного размера, заполненный одинаковыми значениями."}),`
`,n.jsx(r.p,{children:"Это полезно для быстрого создания заглушек (скелетонов), инициализации начальных состояний или списков по умолчанию."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — значение, заполняющее массив."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"count: number"})," — число элементов этого массива."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
`,n.jsx(r.code,{children:"T[]"})," — массив, заполненный указанным значением."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { arrFill } from '@dxtmisha/functional-basic'

const array = arrFill('a', 3)
console.log(array) // ['a', 'a', 'a']
`})})]})}function h(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default};
