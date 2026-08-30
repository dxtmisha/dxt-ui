import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для отображения временных уведомлений (снекбаров) в различных частях экрана. Снекбары используются для предоставления кратких сообщений о процессах приложения в нижней или верхней части экрана.`}),`
`,(0,c.jsx)(t.p,{children:`Snackbar управляет очередью сообщений, автоматически скрывая их по истечении заданного времени или при взаимодействии пользователя.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование (сверху/снизу, слева/справа/по центру)`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемая задержка автоматического скрытия (по умолчанию 8 секунд)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка различных анимаций появления в зависимости от позиции`}),`
`,(0,c.jsx)(t.li,{children:`Управление списком активных уведомлений`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Подтверждение действий пользователя (например, "Файл успешно сохранен")`}),`
`,(0,c.jsx)(t.li,{children:`Информирование об ошибках или предупреждениях`}),`
`,(0,c.jsx)(t.li,{children:`Системные уведомления в реальном времени`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const snackbar = ref(null)

const addMessage = () => {
snackbar.value?.data.add({
  label: 'Заголовок уведомления',
  description: 'Описание события, которое произошло в приложении.',
  button: 'Ок'
})
}
<\/script>

<template>
<Button label="Показать уведомление" @click="addMessage" />

<Snackbar
  ref="snackbar"
  vertical="bottom"
  horizontal="right"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Рекомендуется использовать Snackbar для второстепенной информации, которая не требует немедленного обязательного действия со стороны пользователя.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};