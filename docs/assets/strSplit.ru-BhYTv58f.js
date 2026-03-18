import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/strSplit - Разделение строки с поддержкой лимита (PHP style)"}),`
`,n.jsx(t.h1,{id:"strsplit",children:n.jsx(t.code,{children:"strSplit"})}),`
`,n.jsxs(t.p,{children:["Разделяет строку на массив подстрок по указанному разделителю. В отличие от стандартного ",n.jsx(t.code,{children:"String.prototype.split"}),", при указании лимита оставшаяся часть строки сохраняется в последнем элементе массива (аналогично функции ",n.jsx(t.code,{children:"explode"})," в PHP)."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Параметры:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: number | string"})," — Исходное значение."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"separator: string"})," — Разделитель."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"limit?: number"})," — Максимальное количество элементов. Если элементов больше лимита, последний элемент будет содержать весь остаток строки."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Возвращает:"}),`
`,n.jsx(t.code,{children:"string[]"})," — Массив подстрок."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { strSplit } from '@dxtmisha/functional-basic'

// Без лимита
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// С лимитом 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// С числом в качестве значения
strSplit(123.456, '.') // ['123', '456']
`})})]})}function a(s={}){const{wrapper:t}={...e(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(r,{...s})}):r(s)}export{a as default};
