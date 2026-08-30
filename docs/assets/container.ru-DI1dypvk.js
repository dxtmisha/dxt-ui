import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Container - это базовый layout-компонент для ограничения ширины контента и управления горизонтальными отступами.
По умолчанию он помогает держать читаемую ширину блока и обеспечивает единый ритм макета между экранами.`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент поддерживает выравнивание через `,(0,c.jsx)(t.code,{children:`align`}),` (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`) и работает с дизайн-токенами `,(0,c.jsx)(t.code,{children:`width`}),` и `,(0,c.jsx)(t.code,{children:`marginX`}),`.
Также можно использовать свойство `,(0,c.jsx)(t.code,{children:`area`}),` для интеграции с контекстом областей.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ограничение ширины контента через токен `,(0,c.jsx)(t.code,{children:`width`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Управление горизонтальными отступами через `,(0,c.jsx)(t.code,{children:`marginX`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Выравнивание контейнера: `,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка слота `,(0,c.jsx)(t.code,{children:`default`}),` для произвольного содержимого`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка свойства `,(0,c.jsx)(t.code,{children:`area`}),` для контекстного размещения`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Внешняя обертка секций страницы`}),`
`,(0,c.jsx)(t.li,{children:`Ограничение ширины текста и форм`}),`
`,(0,c.jsx)(t.li,{children:`Выравнивание контента в сетке и блочной структуре`}),`
`,(0,c.jsx)(t.li,{children:`Базовый контейнер для повторно используемых layout-блоков`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Container
  align="center"
  area="container"
>
  <p>Контент внутри контейнера с ограниченной шириной.</p>
</Container>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Используйте Container как базовый слой компоновки, а семантику секции задавайте внешними компонентами (`,(0,c.jsx)(t.code,{children:`Section`}),`, `,(0,c.jsx)(t.code,{children:`Group`}),`, `,(0,c.jsx)(t.code,{children:`Page`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};