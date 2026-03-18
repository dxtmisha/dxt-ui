import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/splice - Копирование и слияние свойств в объект"}),`
`,n.jsx(e.h1,{id:"splice",children:n.jsx(e.code,{children:"splice"})}),`
`,n.jsx(e.p,{children:"Выполняет копирование и рекурсивное слияние свойств из одного объекта в другой. Поддерживает вставку новых свойств начиная с определенного ключа или индекса."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: ObjectItem<I>"})," — Целевой объект или массив."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement?: ObjectItem<I> | I"})," — Исходный объект с новыми данными."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"indexStart?: string"})," — Ключ или значение элемента, начиная с которого будет выполнена вставка."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"ObjectItem<I>"})," — Новый объект или массив с примененными изменениями."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Простая вставка
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Вставка после определенного ключа
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
