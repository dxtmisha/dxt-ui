import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания модальных диалоговых окон с поддержкой иконок, заголовков и предустановленных кнопок действий.`}),`
`,(0,c.jsx)(t.p,{children:`Dialog представляет собой специализированную обертку над компонентом Modal с дополнительными возможностями для отображения информационных сообщений, подтверждений и уведомлений. Компонент автоматически отображает информационный блок с иконкой, заголовком и описанием, а также предоставляет предустановленные кнопки OK и Закрыть. Поддерживает состояния успеха и ошибки с автоматическим переключением иконок, позиционирование изображения и полную кастомизацию контента.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Модальное окно с центрированием и блокировкой фона`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок с автоматическим переключением для состояний успеха/ошибки`}),`
`,(0,c.jsx)(t.li,{children:`Информационный блок с иконкой, заголовком и описанием`}),`
`,(0,c.jsx)(t.li,{children:`Предустановленные кнопки OK и Закрыть с возможностью кастомизации`}),`
`,(0,c.jsx)(t.li,{children:`Позиционирование изображения сверху или слева`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с компонентами Window, Bars, Actions, Icon`}),`
`,(0,c.jsx)(t.li,{children:`Закрытие по ESC и клику на overlay`}),`
`,(0,c.jsx)(t.li,{children:`События ok и close для обработки действий пользователя`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивный дизайн для мобильных устройств`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Подтверждения действий пользователя`}),`
`,(0,c.jsx)(t.li,{children:`Уведомления об успехе или ошибке`}),`
`,(0,c.jsx)(t.li,{children:`Информационные сообщения`}),`
`,(0,c.jsx)(t.li,{children:`Предупреждения и алерты`}),`
`,(0,c.jsx)(t.li,{children:`Простые формы с минимальным количеством полей`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const showSuccess = ref(false)

const handleConfirm = () => {
console.log('Действие подтверждено')
isOpen.value = false
showSuccess.value = true
}
<\/script>

<template>
<button @click="isOpen = true">Открыть диалог</button>

<Dialog
  v-model:open="isOpen"
  label="Подтверждение"
  description="Вы уверены, что хотите выполнить это действие?"
  @ok="handleConfirm"
  @close="isOpen = false"
>
  <template #default>
    <div class="additional-info">
      Дополнительная информация может быть размещена здесь.
    </div>
  </template>
</Dialog>

<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Успешно"
  description="Ваше действие выполнено успешно."
  :buttonClose="null"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};