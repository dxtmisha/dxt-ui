import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/secondToTime - Преобразование секунд в строку времени"}),`
`,n.jsx(e.h1,{id:"secondtotime",children:n.jsx(e.code,{children:"secondToTime"})}),`
`,n.jsxs(e.p,{children:["Преобразует переданное количество секунд в строку формата времени ",n.jsx(e.code,{children:"MM:SS"}),"."]}),`
`,n.jsxs(e.p,{children:["Если значение секунд меньше или равно нулю, или оно не было передано, возвращается значение по умолчанию ",n.jsx(e.code,{children:"00:00"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"second: number | string | undefined"})," — Общее количество секунд (поддерживаются числа и строковые представления чисел)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Отформатированная строка с минутами и секундами (например, ",n.jsx(e.code,{children:"12:34"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function h(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default};
