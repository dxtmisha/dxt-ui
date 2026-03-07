import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Classes/ApiHeaders - Заголовки API-запросов"}),`
`,n.jsx(e.h1,{id:"класс-apiheaders",children:"Класс ApiHeaders"}),`
`,n.jsxs(e.p,{children:["Класс для управления и слияния заголовков HTTP-запросов. Он обрабатывает заголовки по умолчанию, пользовательские заголовки для конкретных запросов и автоматическое назначение ",n.jsx(e.code,{children:"Content-Type"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Заголовки по умолчанию"})," — установите глобальные заголовки, такие как ",n.jsx(e.code,{children:"Authorization"})," или ",n.jsx(e.code,{children:"X-App-Version"}),", один раз."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамический Content-Type"})," — автоматически управляет заголовком ",n.jsx(e.code,{children:"Content-Type"})," (по умолчанию ",n.jsx(e.code,{children:"application/json;charset=UTF-8"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Безопасное слияние"})," — объединяет несколько источников заголовков без изменения исходных объектов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Валидация ввода"})," — гарантирует, что для заголовков используются только допустимые объекты."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ApiHeaders } from '@dxtmisha/functional'

const apiHeaders = new ApiHeaders()
apiHeaders.set({ 'X-App-Platform': 'web' })
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined"})," — Объединяет заголовки по умолчанию с пользовательскими и добавляет ",n.jsx(e.code,{children:"Content-Type"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set(headers: Record<string, string>): this"})," — Устанавливает или обновляет заголовки по умолчанию."]}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
