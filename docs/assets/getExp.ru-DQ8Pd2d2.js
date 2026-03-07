import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/getExp - Создание регулярного выражения из строки с экранированием"}),`
`,e.jsx(n.h1,{id:"getexp",children:e.jsx(n.code,{children:"getExp"})}),`
`,e.jsxs(n.p,{children:["Утилита, создающая объект регулярного выражения ",e.jsx(n.code,{children:"RegExp"})," из строки-шаблона, предварительно экранируя в ней все специальные символы регулярных выражений (такие как ",e.jsx(n.code,{children:"."})," ",e.jsx(n.code,{children:"*"})," ",e.jsx(n.code,{children:"+"})," ",e.jsx(n.code,{children:"?"})," ",e.jsx(n.code,{children:"^"})," ",e.jsx(n.code,{children:"$"})," ",e.jsx(n.code,{children:"{"})," ",e.jsx(n.code,{children:"}"})," ",e.jsx(n.code,{children:"("})," ",e.jsx(n.code,{children:")"})," ",e.jsx(n.code,{children:"|"})," ",e.jsx(n.code,{children:"["})," ",e.jsx(n.code,{children:"]"})," ",e.jsx(n.code,{children:"\\"}),")."]}),`
`,e.jsxs(n.p,{children:["Это необходимо, если искомая строка поступает от пользователя или содержит символы, которые могли бы сломать регулярное выражение. В функции также можно задать флаги регулярного выражения и шаблон, в который будет подставлена экранированная строка вместо метки ",e.jsx(n.code,{children:":value"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Искомая строка, которую нужно экранировать."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flags?: string"})," — (опционально) Флаги регулярного выражения (например, ",e.jsx(n.code,{children:"'ig'"}),"). По умолчанию ",e.jsx(n.code,{children:"'ig'"})," (игнорирование регистра и глобальный поиск)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern?: string"})," — (опционально) Строка-шаблон регулярного выражения. По умолчанию просто ",e.jsx(n.code,{children:"':value'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — Объект регулярного выражения."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getExp } from '@dxtmisha/functional-basic'

// Обычный поиск
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (точка экранирована)

// Поиск с пользовательским флагом и шаблоном (например, "начинается с")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function j(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{j as default};
