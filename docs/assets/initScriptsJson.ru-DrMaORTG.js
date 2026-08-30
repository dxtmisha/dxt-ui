import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initScriptsJson - Генерация скриптов гидратации`}),`
`,(0,c.jsx)(t.h1,{id:`initscriptsjson`,children:(0,c.jsx)(t.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция для генерации JSON-скриптов, необходимых для гидратации данных на стороне клиента. Она собирает текущее состояние из `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` и данные гидратации `,(0,c.jsx)(t.code,{children:`Api`}),`, объединяя их в одну строку HTML-скриптов.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка со скриптами JSON (например, `,(0,c.jsx)(t.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Вставьте hydrationScripts в ваш HTML шаблон перед закрывающим тегом </body>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};