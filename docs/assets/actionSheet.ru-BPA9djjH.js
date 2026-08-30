import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания мобильно-оптимизированных панелей действий, выдвигающихся снизу экрана с плавной анимацией.`}),`
`,(0,c.jsxs)(t.p,{children:[`ActionSheet представляет собой специализированную обертку над компонентом Window с предустановленным адаптивным режимом `,(0,c.jsx)(t.code,{children:`actionSheet`}),`. Компонент автоматически позиционируется внизу экрана и выдвигается вверх при открытии, следуя паттернам мобильных интерфейсов iOS и Material Design. Поддерживает жесты свайпа для закрытия, интеграцию с компонентом Bars для заголовка и автоматическое управление фокусом.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Позиционирование внизу экрана с анимацией выдвижения`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка touch-жестов для закрытия свайпом вниз`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с Bars для отображения заголовка`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая блокировка фона при открытии`}),`
`,(0,c.jsx)(t.li,{children:`Закрытие по клику на overlay или кнопке закрытия`}),`
`,(0,c.jsx)(t.li,{children:`События жизненного цикла (открытие, закрытие)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивная высота под размер контента`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Меню действий для мобильных приложений`}),`
`,(0,c.jsx)(t.li,{children:`Списки опций и выборов`}),`
`,(0,c.jsx)(t.li,{children:`Формы и фильтры на мобильных устройствах`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные меню для touch-интерфейсов`}),`
`,(0,c.jsx)(t.li,{children:`Подтверждения и уведомления`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleAction = (action) => {
console.log('Выбрано действие:', action)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Открыть действия</button>

<ActionSheet
  v-model:open="isOpen"
  :touchClose="true"
>
  <template #title>
    <h3>Выберите действие</h3>
  </template>

  <template #default>
    <div class="action-list">
      <button @click="handleAction('share')">Поделиться</button>
      <button @click="handleAction('copy')">Копировать ссылку</button>
      <button @click="handleAction('download')">Скачать</button>
    </div>
  </template>

  <template #footer>
    <button @click="isOpen = false">Отмена</button>
  </template>
</ActionSheet>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};