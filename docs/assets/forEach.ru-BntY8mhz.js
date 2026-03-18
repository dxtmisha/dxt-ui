import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(d){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/forEach - Перебор объекта или массива"}),`
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
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsx(e.p,{children:"Функция является универсальным инструментом для перебора различных структур данных и сбора результатов в массив."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Особенности:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка типов"})," — работает с ",n.jsx(e.code,{children:"Array"}),", ",n.jsx(e.code,{children:"Map"})," и обычными объектами (",n.jsx(e.code,{children:"Object"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сбор результатов"})," — в отличие от стандартного ",n.jsx(e.code,{children:"forEach"}),", эта функция собирает значения, возвращаемые из ",n.jsx(e.code,{children:"callback"}),", в новый массив."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Фильтрация undefined"})," — по умолчанию все значения ",n.jsx(e.code,{children:"undefined"})," (например, если callback ничего не вернул для элемента) отфильтровываются из итогового массива."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Параметр saveUndefined"})," — если передать ",n.jsx(e.code,{children:"true"})," третьим аргументом, массив сохранит все результаты, включая ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// По умолчанию undefined фильтруются
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// С сохранением undefined
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function a(d={}){const{wrapper:e}={...c(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{a as default};
