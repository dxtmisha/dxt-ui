import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementSafeScript - Генерация безопасного скрипта для гидратации`}),`
`,(0,c.jsx)(t.h1,{id:`getelementsafescript`,children:(0,c.jsx)(t.code,{children:`getElementSafeScript`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита для генерации безопасного тега `,(0,c.jsx)(t.code,{children:`<script type="application/json">`}),`, который используется для передачи данных с сервера на клиент (гидратации).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Эта функция автоматически сериализует данные в JSON и экранирует закрывающие теги `,(0,c.jsx)(t.code,{children:`<\/script>`}),`, предотвращая XSS-атаки и ошибки парсинга HTML при встраивании данных.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор (ID) тега скрипта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: any`}),` — Данные, которые необходимо сериализовать и сохранить в теге.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Готовая строка с HTML-тегом скрипта.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementSafeScript } from '@dxtmisha/functional-basic'

const data = { 
  user: 'Misha', 
  content: '<\/script><script>alert(1)<\/script>' 
}

console.log(getElementSafeScript('hydration-data', data))
// Результат:
// <script id="hydration-data" type="application/json">
//   {"user":"Misha","content":"<\\\\/script><script>alert(1)<\\\\/script>"}
// <\/script>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};