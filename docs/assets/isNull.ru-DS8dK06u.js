import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(l){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/isNull - Проверка на null или undefined"}),`
`,n.jsx(e.h1,{id:"isnull",children:n.jsx(e.code,{children:"isNull"})}),`
`,n.jsxs(e.p,{children:["Конкретная и строгая проверка значения на соответствие исключительно ",n.jsx(e.code,{children:"null"})," или ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsxs(e.p,{children:["В отличие от обычной проверки ",n.jsx(e.code,{children:"!value"})," (где строка ",n.jsx(e.code,{children:"''"}),", число ",n.jsx(e.code,{children:"0"})," и булево ",n.jsx(e.code,{children:"false"})," также приведут к прохождению условия), эта функция отфильтрует все ложные (falsy) значения и оставит только те, которые фактически не определены."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Любое проверяемое значение."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Вернет ",n.jsx(e.code,{children:"true"}),", если переменная равна ",n.jsx(e.code,{children:"null"})," либо ",n.jsx(e.code,{children:"undefined"}),". Функция также выступает как type guard TypeScript, сужающий тип переменной до ",n.jsx(e.code,{children:"Undefined"})," (",n.jsx(e.code,{children:"null | undefined"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Другие falsy значения возвращают false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function h(l={}){const{wrapper:e}={...i(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{h as default};
