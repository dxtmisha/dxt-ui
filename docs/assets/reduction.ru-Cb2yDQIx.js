import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`сокращение-текста`,children:`Сокращение текста`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`reduction`}),` определяет, нужно ли сокращать текстовую метку до инициалов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — автоматически сокращает текст до инициалов (по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — отображает полную текстовую метку без сокращения`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При значении `,(0,c.jsx)(t.code,{children:`true`}),` компонент обрабатывает метку имени (до двух слов) и извлекает первые буквы для представления пользователя (например, «Иван Иванов» преобразуется в «ИИ»). Это полезно для поддержания аккуратного и компактного вида аватара.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Резервный аватар с инициалами (ИИ) -->
<Avatar label="Иван Иванов" :reduction="true" />

<!-- Отображение полного имени (Иван Иванов) -->
<Avatar label="Иван Иванов" :reduction="false" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};