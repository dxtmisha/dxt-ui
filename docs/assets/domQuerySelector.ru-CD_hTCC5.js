import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/domQuerySelector - Выбор элемента в DOM"}),`
`,n.jsx(e.h1,{id:"domqueryselector",children:n.jsx(e.code,{children:"domQuerySelector"})}),`
`,n.jsx(e.p,{children:"Ищет и возвращает первый HTML-элемент, соответствующий указанному CSS-селектору."}),`
`,n.jsxs(e.p,{children:["Функция проверяет наличие браузерного (DOM) окружения с помощью ",n.jsx(e.code,{children:"isDomRuntime()"}),". Если код выполняется на сервере (SSR) или DOM недоступен, функция безопасно вернёт ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectors: string"})," — Строка с одним или несколькими CSS-селекторами для поиска."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"E | undefined"})," — Первый найденный элемент, или ",n.jsx(e.code,{children:"undefined"}),", если совпадений нет либо DOM недоступен."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Поиск по классу
const btn = domQuerySelector('.submit-button')

// Поиск по ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Отправить'
}
`})})]})}function x(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{x as default};
