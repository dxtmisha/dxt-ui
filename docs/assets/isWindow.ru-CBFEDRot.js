import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as d}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional-basic/Functions/isWindow - Проверка объекта Window"}),`
`,n.jsx(o.h1,{id:"iswindow",children:n.jsx(o.code,{children:"isWindow"})}),`
`,n.jsxs(o.p,{children:["Утилита, предназначенная для проверки того, является ли переданный элемент или переменная глобальным объектом браузера ",n.jsx(o.code,{children:"window"}),"."]}),`
`,n.jsxs(o.p,{children:["Функция сначала проводит проверку ",n.jsx(o.code,{children:"isDomRuntime()"}),", чтобы убедиться, что код вообще запущен в браузере и объект ",n.jsx(o.code,{children:"window"})," доступен (для предотвращения ошибок в серверной среде SSR). Затем выполняется прямое сравнение переданного аргумента с глобальным объектом ",n.jsx(o.code,{children:"window"}),"."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Параметры:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"element: E"})," — Любой элемент, узел или переменная для сопоставления."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Возвращает:"}),`
`,n.jsx(o.code,{children:"boolean"})," — Вернет ",n.jsx(o.code,{children:"true"}),", если код выполняется в браузере и переданный элемент строго равен объекту ",n.jsx(o.code,{children:"window"}),". Служит тайпгардом (type guard), сужающим тип проверяемого значения до ",n.jsx(o.code,{children:"Window"}),"."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { isWindow } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Типичные DOM узлы и другие значения
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function j(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
