import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/isDomData - Проверка среды на Data URL"}),`
`,n.jsx(e.h1,{id:"isdomdata",children:n.jsx(e.code,{children:"isDomData"})}),`
`,n.jsxs(e.p,{children:["Утилита, проверяющая, выполняется ли текущий код в среде, где URL-адрес (",n.jsx(e.code,{children:"location.href"}),") начинается со схемы ",n.jsx(e.code,{children:"data:"}),". Это часто бывает полезно для определения специфичных контекстов исполнения, таких как встроенные скрипты в data-URI или песочницы (iframes)."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"}),`
Функция не принимает аргументов.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Вернет ",n.jsx(e.code,{children:"true"}),", если глобальный URL-адрес документа начинается с ",n.jsx(e.code,{children:"data:"}),", и ",n.jsx(e.code,{children:"false"})," в противном случае."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isDomData } from '@dxtmisha/functional-basic'

// Если код выполняется на странице 'https://example.com'
console.log(isDomData()) // false

// Если код встроен или запущен через 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
