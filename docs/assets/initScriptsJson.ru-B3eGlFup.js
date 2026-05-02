import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/initScriptsJson - Генерация скриптов гидратации`}),`
`,(0,c.jsx)(n.h1,{id:`initscriptsjson`,children:(0,c.jsx)(n.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция для генерации JSON-скриптов, необходимых для гидратации данных на стороне клиента. Она собирает текущее состояние из `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` и данные гидратации `,(0,c.jsx)(n.code,{children:`Api`}),`, объединяя их в одну строку HTML-скриптов.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка со скриптами JSON (например, `,(0,c.jsx)(n.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Вставьте hydrationScripts в ваш HTML шаблон перед закрывающим тегом </body>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};