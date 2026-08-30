import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Кнопка-триггер для выбора кода страны телефонного номера через всплывающее меню стран.`}),`
`,(0,c.jsxs)(t.p,{children:[`InputPhoneDialCode — это компактная кнопка-триггер, которая открывает всплывающее меню `,(0,c.jsx)(t.strong,{children:`MenuCountry`}),`, позволяя пользователю выбрать страну и соответствующий телефонный код. Компонент автоматически определяет текущую страну пользователя через `,(0,c.jsx)(t.code,{children:`Geo.getCountry()`}),` в качестве значения по умолчанию и реактивно привязывает выбор через `,(0,c.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Автоматическое определение страны по умолчанию через `,(0,c.jsx)(t.code,{children:`Geo.getCountry()`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Выбор страны через всплывающее меню `,(0,c.jsx)(t.code,{children:`MenuCountry`}),` с флагом и кодом телефона`]}),`
`,(0,c.jsxs)(t.li,{children:[`Настраиваемая метка: телефонный код (например `,(0,c.jsx)(t.code,{children:`+7`}),`), название страны или без метки`]}),`
`,(0,c.jsx)(t.li,{children:`Иконка-стрелка отражает состояние открытия/закрытия меню`}),`
`,(0,c.jsx)(t.li,{children:`Наследует все возможности компонентов Button и MenuCountry`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Префикс поля ввода телефонного номера для выбора кода страны`}),`
`,(0,c.jsx)(t.li,{children:`Выбор страны/региона в формах регистрации или оформления заказа`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(undefined)
<\/script>

<template>
<InputPhoneDialCode
  v-model:selected="selected"
  label-type="code"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};