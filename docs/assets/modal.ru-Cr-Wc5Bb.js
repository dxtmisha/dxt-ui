import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Упрощенная обертка над компонентом Window для создания модальных диалогов с предустановленными настройками центрированного позиционирования.`}),`
`,(0,c.jsxs)(t.p,{children:[`Modal является специализированным компонентом, который использует Window с фиксированным режимом `,(0,c.jsx)(t.code,{children:`adaptive: 'modal'`}),`. Он предназначен для отображения контента, требующего немедленного внимания пользователя, с блокировкой взаимодействия с основным интерфейсом. Компонент автоматически центрирует содержимое, добавляет полупрозрачный фон (overlay) и управляет фокусом.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Центрированное позиционирование по умолчанию`}),`
`,(0,c.jsx)(t.li,{children:`Полупрозрачный оверлей с блокировкой фона`}),`
`,(0,c.jsx)(t.li,{children:`Управление через v-model:open`}),`
`,(0,c.jsx)(t.li,{children:`Закрытие по ESC и клику вне области`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция со Scrollbar для длинного контента`}),`
`,(0,c.jsx)(t.li,{children:`Слоты для заголовка, содержимого и футера`}),`
`,(0,c.jsx)(t.li,{children:`События жизненного цикла (preparation, opening, closing)`}),`
`,(0,c.jsx)(t.li,{children:`Кнопка закрытия с настраиваемой иконкой`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Отличия от Window:`})}),`
`,(0,c.jsxs)(t.p,{children:[`Modal - это Window с предустановленным `,(0,c.jsx)(t.code,{children:`adaptive: 'modal'`}),`, что упрощает использование для стандартных диалоговых окон без необходимости явно указывать режим адаптивности.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Диалоги подтверждения действий`}),`
`,(0,c.jsx)(t.li,{children:`Формы создания/редактирования`}),`
`,(0,c.jsx)(t.li,{children:`Предупреждения и информационные сообщения`}),`
`,(0,c.jsx)(t.li,{children:`Просмотр детальной информации`}),`
`,(0,c.jsx)(t.li,{children:`Многошаговые мастера (wizards)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const handleBeforeClosing = async () => {
// Проверка перед закрытием
return confirm('Закрыть модальное окно?')
}
<\/script>

<template>
<button @click="isModalOpen = true">Открыть модальное окно</button>

<Modal
  v-model:open="isModalOpen"
  :beforeClosing="handleBeforeClosing"
  closeButton
>
  <template #title>
    <h2>Подтверждение действия</h2>
  </template>

  <template #default>
    <p>Вы уверены, что хотите выполнить это действие?</p>
    <p>Это действие нельзя будет отменить.</p>
  </template>

  <template #footer="{ classesModal }">
    <button :class="classesModal.close">Отмена</button>
    <button @click="performAction">Подтвердить</button>
  </template>
</Modal>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};