import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент многострочного ввода текста с поддержкой автоматического изменения размера, валидации и расширенной стилизации.`}),`
`,(0,c.jsx)(t.p,{children:`Textarea предоставляет удобный интерфейс для ввода больших объемов текста. Компонент автоматически подстраивает высоту под содержимое, поддерживает ограничение количества символов, отображение иконок, меток и вспомогательных сообщений. Интегрируется с системой валидации форм.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое изменение высоты (autosize)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка валидации и отображение ошибок`}),`
`,(0,c.jsx)(t.li,{children:`Встроенный счетчик символов`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок, префиксов и суффиксов`}),`
`,(0,c.jsx)(t.li,{children:`Плавающая или статическая метка (label)`}),`
`,(0,c.jsx)(t.li,{children:`Состояния: активное, отключенное, только для чтения, загрузка`}),`
`,(0,c.jsx)(t.li,{children:`Настройка темы и размеров`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поля для комментариев и отзывов`}),`
`,(0,c.jsx)(t.li,{children:`Формы обратной связи`}),`
`,(0,c.jsx)(t.li,{children:`Редакторы описания или биографии`}),`
`,(0,c.jsx)(t.li,{children:`Ввод адреса или заметок`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const comment = ref('')
<\/script>

<template>
<Textarea
  v-model="comment"
  label="Ваш комментарий"
  placeholder="Введите текст..."
  autosize
  counter
  :maxlength="500"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};