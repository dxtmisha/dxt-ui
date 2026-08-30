import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`aria-роль`,children:`ARIA роль`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`role`}),` позволяет переопределить стандартную ARIA-роль для элемента уведомления. По умолчанию используется роль `,(0,c.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Когда использовать:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status`}),` (по умолчанию) — используйте для сообщений, которые содержат вспомогательную информацию, не требующую немедленного действия. Ассистивные технологии (экранные дикторы) озвучат такое сообщение, когда пользователь будет свободен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alert`}),` — используйте для критических ошибок или предупреждений, требующих немедленного внимания. Экранные дикторы прервут текущую задачу, чтобы озвучить это уведомление.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`log`}),` — используйте, если уведомления представляют собой последовательный лог событий.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Стандартное уведомление -->
<SnackbarItem label="Загрузка завершена" role="status" />

<!-- Критическая ошибка -->
<SnackbarItem label="Ошибка соединения!" role="alert" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};