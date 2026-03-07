import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/forEach - Перебор объекта или массива"}),`
`,n.jsx(e.h1,{id:"foreach",children:n.jsx(e.code,{children:"forEach"})}),`
`,n.jsx(e.p,{children:"Функция выполняет указанную функцию один раз для каждого элемента в объекте. И возвращает массив с результатами выполнения функции."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: D"})," — объект для перебора."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — функция, которая будет вызвана для каждого элемента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"saveUndefined?: boolean"})," — если ",n.jsx(e.code,{children:"true"}),", функция вернет массив, включая ",n.jsx(e.code,{children:"undefined"})," значения (по умолчанию фильтруются)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"R[]"})," — массив с результатами выполнения функции."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// По умолчанию undefined фильтруются
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// С сохранением undefined
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function x(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{x as default};
