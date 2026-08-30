import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент ввода для социальных сетей с автоматическим форматированием и иконками.`}),`
`,(0,c.jsxs)(t.p,{children:[`InputSocial — это специализированное поле ввода, предназначенное для профилей социальных сетей. Оно автоматически настраивает маску, префикс, суффикс и метку на основе переданного свойства `,(0,c.jsx)(t.code,{children:`socialType`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое форматирование и маскирование на основе выбранного типа социальной сети`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка различных социальных сетей (например, Telegram, WhatsApp, Instagram и др.)`}),`
`,(0,c.jsxs)(t.li,{children:[`Настраиваемые иконки социальных сетей через свойство `,(0,c.jsx)(t.code,{children:`socialIcons`})]}),`
`,(0,c.jsx)(t.li,{children:`Встроенная обработка префиксов и суффиксов, специфичных для профиля социальной сети`}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка двусторонней привязки данных (`,(0,c.jsx)(t.code,{children:`v-model`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Интеграция с `,(0,c.jsx)(t.code,{children:`Field`}),` для единообразной стилизации и статусов валидации`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Ссылки на социальные сети в профилях пользователей`}),`
`,(0,c.jsx)(t.li,{children:`Поля контактной информации в формах регистрации`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
<\/script>

<template>
<InputSocial
  v-model:value="value"
  social-type="telegram"
  label="Telegram"
  placeholder="Username"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};