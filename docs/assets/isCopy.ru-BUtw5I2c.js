import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`копирование-ссылки`,children:`Копирование ссылки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`isCopy`}),` переключает компонент в режим копирования ссылки на якорь в буфер обмена.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCopy`}),` — включает режим копирования ссылки (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconTag`}),` — иконка, отображаемая в режиме копирования`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconContentCopy`}),` — иконка, показываемая после успешного копирования`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delayHide`}),` — задержка перед скрытием уведомления в миллисекундах (по умолчанию `,(0,c.jsx)(t.code,{children:`3072`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При включённом `,(0,c.jsx)(t.code,{children:`isCopy`}),` клик по компоненту не выполняет прокрутку к якорю, а копирует полную ссылку (включая origin и pathname) в буфер обмена. После копирования автоматически открывается Tooltip с уведомлением, который закрывается через время, указанное в `,(0,c.jsx)(t.code,{children:`delayHide`}),`. Иконка меняется с `,(0,c.jsx)(t.code,{children:`iconTag`}),` на `,(0,c.jsx)(t.code,{children:`iconContentCopy`}),` для визуального подтверждения действия.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовый режим -->
<Anchor name="section" text="Скопировать ссылку" isCopy />

<!-- С кастомными иконками -->
<Anchor name="heading" isCopy iconTag="share" iconContentCopy="check" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};