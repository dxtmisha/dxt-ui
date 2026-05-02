import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getElementSafeScript - Генерация безопасного скрипта для гидратации`}),`
`,(0,c.jsx)(n.h1,{id:`getelementsafescript`,children:(0,c.jsx)(n.code,{children:`getElementSafeScript`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита для генерации безопасного тега `,(0,c.jsx)(n.code,{children:`<script type="application/json">`}),`, который используется для передачи данных с сервера на клиент (гидратации).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Эта функция автоматически сериализует данные в JSON и экранирует закрывающие теги `,(0,c.jsx)(n.code,{children:`<\/script>`}),`, предотвращая XSS-атаки и ошибки парсинга HTML при встраивании данных.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор (ID) тега скрипта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: any`}),` — Данные, которые необходимо сериализовать и сохранить в теге.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Готовая строка с HTML-тегом скрипта.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementSafeScript } from '@dxtmisha/functional-basic'

const data = { 
  user: 'Misha', 
  content: '<\/script><script>alert(1)<\/script>' 
}

console.log(getElementSafeScript('hydration-data', data))
// Результат:
// <script id="hydration-data" type="application/json">
//   {"user":"Misha","content":"<\\\\/script><script>alert(1)<\\\\/script>"}
// <\/script>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};