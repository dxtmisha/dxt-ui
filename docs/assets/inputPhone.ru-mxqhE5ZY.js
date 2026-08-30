import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент ввода номера телефона с выбором страны, валидацией и поддержкой маски.`}),`
`,(0,c.jsx)(t.p,{children:`InputPhone — это специализированное поле ввода, предназначенное для ввода номеров телефонов. Оно интегрируется с селектором флага/кода страны и автоматически применяет маску форматирования на основе выбранной или определенной страны. По умолчанию страна может определяться динамически по вводимым цифрам телефонного кода.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое маскирование номера телефона на основе выбранной страны`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивное меню выбора страны с поиском, флагами и телефонными кодами`}),`
`,(0,c.jsx)(t.li,{children:`Динамическое определение страны по вводимым цифрам телефонного номера`}),`
`,(0,c.jsxs)(t.li,{children:[`Настройка страны по умолчанию и возможность отключения автоопределения через `,(0,c.jsx)(t.code,{children:`countryBlock`})]}),`
`,(0,c.jsx)(t.li,{children:`Полностью настраиваемое форматирование шаблонов через атрибуты маски`}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка двусторонней привязки данных (`,(0,c.jsx)(t.code,{children:`v-model`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Интегрированные подсказки, статусы валидации и конфигурации меток`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поля номеров телефонов в формах регистрации или оформления заказа`}),`
`,(0,c.jsx)(t.li,{children:`Разделы контактной информации в профилях пользователей`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
<\/script>

<template>
<InputPhone
  v-model:value="phone"
  label="Номер телефона"
  placeholder="Введите номер телефона"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};