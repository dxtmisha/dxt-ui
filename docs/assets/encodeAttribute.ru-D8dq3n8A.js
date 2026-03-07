import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/encodeAttribute - Кодирование символов для атрибутов"}),`
`,e.jsx(n.h1,{id:"encodeattribute",children:e.jsx(n.code,{children:"encodeAttribute"})}),`
`,e.jsxs(n.p,{children:["Кодирует специальные символы в строке (",e.jsx(n.code,{children:"&"}),", ",e.jsx(n.code,{children:"<"}),", ",e.jsx(n.code,{children:">"}),", ",e.jsx(n.code,{children:'"'}),", ",e.jsx(n.code,{children:"'"}),") в соответствующие HTML-сущности (",e.jsx(n.code,{children:"&amp;"}),", ",e.jsx(n.code,{children:"&lt;"}),", ",e.jsx(n.code,{children:"&gt;"}),", ",e.jsx(n.code,{children:"&quot;"}),", ",e.jsx(n.code,{children:"&#39;"}),"). Это необходимо для безопасной вставки пользовательского или динамического текста в HTML-атрибуты для предотвращения XSS-атак."]}),`
`,e.jsxs(n.p,{children:["Кроме того, функция удаляет пробельные символы по краям строки с помощью метода ",e.jsx(n.code,{children:".trim()"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text: string"})," — Строка, которую необходимо закодировать."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — Закодированная и очищенная от лишних пробелов по краям строка."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function j(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{j as default};
