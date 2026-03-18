import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/toNumberByMax - Преобразование в число с ограничением максимума"}),`
`,n.jsx(e.h1,{id:"tonumberbymax",children:n.jsx(e.code,{children:"toNumberByMax"})}),`
`,n.jsxs(e.p,{children:["Преобразует входное значение в число и, если оно превышает указанный максимум, возвращает строку с символом ",n.jsx(e.code,{children:"+"})," в конце. Опционально выполняет локализованное форматирование результата."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string | number"})," — Входное значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max?: string | number"})," — Максимально допустимое значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"formatting?: boolean"})," — Флаг включения форматирования через ",n.jsx(e.code,{children:"GeoIntl"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language?: string"})," — Код языка для форматирования (например, ",n.jsx(e.code,{children:"'ru-RU'"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string | number"})," — Отформатированная строка (например, ",n.jsx(e.code,{children:"'99+'"}),") или число."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'ru-RU')) // '500+'
`})})]})}function a(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{a as default};
