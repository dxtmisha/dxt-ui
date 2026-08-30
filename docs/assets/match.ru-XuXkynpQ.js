import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`валидация-вводимых-символов`,children:`Валидация вводимых символов`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`match`}),` определяет регулярное выражение для проверки допустимости вводимых символов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RegExp`}),` — регулярное выражение (по умолчанию `,(0,c.jsx)(t.code,{children:`/[0-9]/`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — строка, преобразуется в регулярное выражение`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет каждый символ при вводе. Символы, не соответствующие выражению, игнорируются. Локальный `,(0,c.jsx)(t.code,{children:`match`}),` в настройках группы (`,(0,c.jsx)(t.code,{children:`special[группа].match`}),`) имеет приоритет над глобальным. Отличается от `,(0,c.jsx)(t.code,{children:`pattern`}),` тем, что `,(0,c.jsx)(t.code,{children:`match`}),` — простая проверка регулярным выражением, а `,(0,c.jsx)(t.code,{children:`pattern`}),` может быть функцией с доступом к состоянию маски.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Только цифры (по умолчанию) -->
<Mask mask="***-***" />

<!-- HEX-символы -->
<Mask mask="***-***" :match="/[A-F0-9]/i" />

<!-- Разные правила для групп -->
<Mask
mask="***-###"
match="\\d"
:special="{
  '*': {},
  '#': { match: /[A-Z]/ }
}"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};