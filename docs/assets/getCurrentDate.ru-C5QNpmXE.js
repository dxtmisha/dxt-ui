import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getCurrentDate - Получение текущей даты"}),`
`,e.jsx(n.h1,{id:"getcurrentdate",children:e.jsx(n.code,{children:"getCurrentDate"})}),`
`,e.jsxs(n.p,{children:["Возвращает текущую дату в указанном формате. Функция является оберткой над классом ",e.jsx(n.code,{children:"Datetime"})," и позволяет быстро получить отформатированную строку текущего времени."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"format: GeoDate"})," — тип формата даты вывода (по умолчанию ",e.jsx(n.code,{children:"'datetime'"}),"). Поддерживает значения: ",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"})," и другие."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Текущая дата в виде строки.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Стандартный формат (datetime)
const now = getCurrentDate()
// Результат: "2024-03-15 14:30"

// Только дата
const date = getCurrentDate('date')
// Результат: "2024-03-15"
`})})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
