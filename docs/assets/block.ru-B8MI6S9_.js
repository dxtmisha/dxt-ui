import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков.`}),`
`,(0,c.jsx)(t.p,{children:`Block обеспечивает гибкую основу для построения сложных компонентов интерфейса, позволяя комбинировать различные информационные элементы в едином блоке. Компонент поддерживает настройку HTML-тега и предоставляет слоты для кастомизации контента.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение заголовка, метки, описания и подписи`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый HTML-тег`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая компоновка для организации контента`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для расширения функциональности`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Карточки контента`}),`
`,(0,c.jsx)(t.li,{children:`Элементы списков`}),`
`,(0,c.jsx)(t.li,{children:`Информационные блоки`}),`
`,(0,c.jsx)(t.li,{children:`Секции с заголовками и описаниями`}),`
`,(0,c.jsx)(t.li,{children:`Базовый строительный блок для других компонентов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Block
  headline="Заголовок блока"
  label="Метка"
  description="Описание блока с подробной информацией"
  caption="Подпись"
  icon="info"
>
  Основной контент блока
</Block>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Block является фундаментальным компонентом для создания структурированных интерфейсов.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};