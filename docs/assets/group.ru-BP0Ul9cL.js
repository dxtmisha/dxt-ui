import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. Это семантический псевдоним компонента Block с уровнем заголовка h4 по умолчанию.`}),`
`,(0,c.jsx)(t.p,{children:`Group обеспечивает стандартизированный способ организации информации внутри страницы или другого компонента, гарантируя согласованную визуальную иерархию. Он наследует все возможности компонента Block, включая поддержку иконок, подписей и кастомизацию на основе слотов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Стандартизированная группировка контента с использованием тега `,(0,c.jsx)(t.code,{children:`<div>`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка заголовков (`,(0,c.jsx)(t.code,{children:`h4`}),` по умолчанию), меток, описаний и подписей`]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,c.jsx)(t.li,{children:`Полностью наследует возможности компонента Block`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая компоновка для организации контента`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Подразделы внутри страницы`}),`
`,(0,c.jsx)(t.li,{children:`Группировка элементов внутри карточки или модального окна`}),`
`,(0,c.jsx)(t.li,{children:`Организация сложных форм в тематические области`}),`
`,(0,c.jsx)(t.li,{children:`Создание структурированных блоков контента с заголовками меньшего уровня`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Group
  headline="Заголовок группы"
  label="Метка группы"
  description="Подробное описание для содержимого группы"
  caption="Вспомогательный текст"
  icon="folder"
>
  Основной контент группы располагается здесь
</Group>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Group является идеальным выбором для создания семантических подструктур в вашем приложении.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};