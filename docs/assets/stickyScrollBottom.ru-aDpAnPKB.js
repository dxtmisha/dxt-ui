import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`прилипающий-нижний-скроллбар`,children:`Прилипающий нижний скроллбар`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`stickyScrollBottom`}),` управляет отображением горизонтального скроллбара, прилипающего к нижней части видимой области экрана.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности работы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`По умолчанию включено (`,(0,c.jsx)(t.code,{children:`stickyScrollBottom: true`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Создает удобный прилипающий скроллбар внизу экрана, позволяя прокручивать широкие таблицы без необходимости докручивать страницу до самого низа таблицы.`}),`
`,(0,c.jsxs)(t.li,{children:[`В комбинации с `,(0,c.jsx)(t.code,{children:`headerTop={true}`}),` активирует JS-контроллер `,(0,c.jsx)(t.code,{children:`StickyInclude`}),` (`,(0,c.jsx)(t.code,{children:`stickyEnable: headerTop && stickyScrollBottom`}),`), выполняющий динамический расчет позиционирования при скроллинге.`]}),`
`,(0,c.jsxs)(t.li,{children:[`При отключении (`,(0,c.jsx)(t.code,{children:`:stickyScrollBottom="false"`}),`) контроллер `,(0,c.jsx)(t.code,{children:`StickyInclude`}),` деактивируется, и заголовок `,(0,c.jsx)(t.code,{children:`headerTop`}),` использует стандартное CSS-позиционирование (`,(0,c.jsx)(t.code,{children:`position: sticky`}),`) без динамических вычислений смещений и эффектов прозрачности.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const columns = ['id', 'name', 'role', 'email', 'phone', 'city', 'country']
const header = { id: 'ID', name: 'Имя', role: 'Должность', email: 'Email', phone: 'Телефон', city: 'Город', country: 'Страна' }
const list = [
{ id: '1', name: 'Алиса', role: 'Разработчик', email: 'alice@example.com', phone: '+1 555-0101', city: 'Москва', country: 'Россия' }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :stickyScrollBottom="true"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};