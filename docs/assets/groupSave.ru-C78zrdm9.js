import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`сохранение-групп-при-удалении`,children:`Сохранение групп при удалении`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`groupSave`}),` управляет поведением при удалении символов в маске с несколькими типами специальных символов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — сохраняет разделение групп при удалении (по умолчанию)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — позволяет символам из разных групп смешиваться при удалении`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При `,(0,c.jsx)(t.code,{children:`groupSave: true`}),` и наличии разных групп впереди символ не удаляется физически, а помечается маркером удаления, сохраняя структуру маски. При `,(0,c.jsx)(t.code,{children:`false`}),` символы удаляются полностью, что может привести к "схлопыванию" групп и потере структуры. Работает только для фиксированных (не резиновых) групп специальных символов.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Сохранение структуры групп (по умолчанию) -->
<Mask
mask="***-###"
:special="['*', '#']"
groupSave
/>

<!-- Без сохранения структуры -->
<Mask
mask="***-###"
:special="['*', '#']"
:groupSave="false"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};