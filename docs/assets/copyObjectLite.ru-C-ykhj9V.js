import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(c){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/copyObjectLite - Поверхностное копирование объекта"}),`
`,n.jsx(e.h1,{id:"copyobjectlite",children:n.jsx(e.code,{children:"copyObjectLite"})}),`
`,n.jsxs(e.p,{children:["Создает новую поверхностную (shallow) копию простого объекта, используя ",n.jsx(e.code,{children:"Object.assign"}),". Опционально может применять к результату дополнительные свойства из второго аргумента ",n.jsx(e.code,{children:"source"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Поскольку это поверхностное копирование, вложенные объекты и массивы будут скопированы по ссылке, а не по значению."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Объект, который необходимо скопировать."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"source?: any"})," — Дополнительные свойства для слияния с основным объектом ",n.jsx(e.code,{children:"value"}),". Значения из ",n.jsx(e.code,{children:"source"})," перезапишут значения из ",n.jsx(e.code,{children:"value"}),", если ключи совпадают."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"R"})," (по умолчанию ",n.jsx(e.code,{children:"T"}),") — Новая поверхностная копия объекта."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Простое копирование
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (ссылка на один и тот же вложенный объект)

// Копирование с дополнительными свойствами
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function a(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(o,{...c})}):o(c)}export{a as default};
