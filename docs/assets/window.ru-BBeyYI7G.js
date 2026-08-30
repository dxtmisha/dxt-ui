import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания модальных окон, диалогов и всплывающих элементов с гибким позиционированием и адаптивным поведением.`}),`
`,(0,c.jsx)(t.p,{children:`Window управляет отображением контента поверх основного интерфейса, поддерживает различные типы позиционирования (модальные окна, выпадающие меню, action sheets), анимации открытия/закрытия и интеграцию с системой событий. Компонент автоматически обрабатывает клики вне области, управление фокусом и адаптацию под различные размеры экранов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование (центр, края, углы экрана)`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивные режимы (modal, menu, actionSheet, static)`}),`
`,(0,c.jsx)(t.li,{children:`Анимации открытия/закрытия с настройкой origin`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием через v-model или expose методы`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция со Scrollbar для прокручиваемого контента`}),`
`,(0,c.jsx)(t.li,{children:`Блокировка взаимодействия с фоном (persistent режим)`}),`
`,(0,c.jsx)(t.li,{children:`События жизненного цикла окна`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Модальные окна для форм и подтверждений`}),`
`,(0,c.jsx)(t.li,{children:`Выпадающие меню и контекстные меню`}),`
`,(0,c.jsx)(t.li,{children:`Боковые панели и drawer компоненты`}),`
`,(0,c.jsx)(t.li,{children:`Action sheets для мобильных интерфейсов`}),`
`,(0,c.jsx)(t.li,{children:`Всплывающие подсказки и диалоги`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleWindow = (options) => {
console.log('Состояние окна:', options.open ? 'открыто' : 'закрыто')
}
<\/script>

<template>
<button @click="isOpen = true">Открыть окно</button>

<Window
  v-model:open="isOpen"
  adaptive="modal"
  @window="handleWindow"
>
  <template #title>
    <h2>Заголовок окна</h2>
  </template>

  <template #default>
    <p>Содержимое модального окна</p>
  </template>

  <template #footer>
    <button @click="isOpen = false">Закрыть</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};