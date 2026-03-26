import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/encodeAttribute - Кодирование символов для атрибутов`}),`
`,(0,c.jsx)(n.h1,{id:`encodeattribute`,children:(0,c.jsx)(n.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(n.p,{children:[`Кодирует специальные символы в строке (`,(0,c.jsx)(n.code,{children:`&`}),`, `,(0,c.jsx)(n.code,{children:`<`}),`, `,(0,c.jsx)(n.code,{children:`>`}),`, `,(0,c.jsx)(n.code,{children:`"`}),`, `,(0,c.jsx)(n.code,{children:`'`}),`) в соответствующие HTML-сущности (`,(0,c.jsx)(n.code,{children:`&amp;`}),`, `,(0,c.jsx)(n.code,{children:`&lt;`}),`, `,(0,c.jsx)(n.code,{children:`&gt;`}),`, `,(0,c.jsx)(n.code,{children:`&quot;`}),`, `,(0,c.jsx)(n.code,{children:`&#39;`}),`). Это необходимо для безопасной вставки пользовательского или динамического текста в HTML-атрибуты для предотвращения XSS-атак.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Кроме того, функция удаляет пробельные символы по краям строки с помощью метода `,(0,c.jsx)(n.code,{children:`.trim()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Строка, которую необходимо закодировать.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Закодированная и очищенная от лишних пробелов по краям строка.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};