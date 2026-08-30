import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент ввода проверочного кода, предназначенный для ввода OTP-кодов (одноразовых паролей), SMS-кодов подтверждения или PIN-кодов.`}),`
`,(0,c.jsx)(t.p,{children:`InputCode координирует последовательность отдельных ячеек ввода (InputCodeItem), автоматически управляя переходом фокуса (фокусируя следующую ячейку по мере ввода символов и фокусируя предыдущую при удалении через Backspace). Он поддерживает состояния успешного ввода (success) и проверки (validation), стилизацию состояния загрузки (loading), регулярные выражения для фильтрации ввода (match) и настраиваемую длину кода (по умолчанию 4 символа).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Скоординированный посимвольный ввод кода с автоматическим переключением фокуса`}),`
`,(0,c.jsxs)(t.li,{children:[`Настраиваемая длина кода (свойство `,(0,c.jsx)(t.code,{children:`length`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка пользовательской валидации (состояния `,(0,c.jsx)(t.code,{children:`validation`}),` и `,(0,c.jsx)(t.code,{children:`success`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Обработка состояния загрузки (loading)`}),`
`,(0,c.jsxs)(t.li,{children:[`Ограничение ввода с помощью регулярных выражений (например, только цифры через `,(0,c.jsx)(t.code,{children:`match`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Интеграция со стандартными компонентами Field для управления меткой (label) и сообщениями (message)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`SMS-авторизация и подтверждение номера телефона`}),`
`,(0,c.jsx)(t.li,{children:`Формы проверки двухфакторной аутентификации (2FA)`}),`
`,(0,c.jsx)(t.li,{children:`Диалоги ввода PIN-кода или пароля доступа`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const code = ref('')

const handleInput = (value) => {
console.log('Текущий код:', value)
}
<\/script>

<template>
<InputCode
  v-model="code"
  :length="6"
  label="Проверочный код"
  helperMessage="Мы отправили 6-значный код на ваш телефон"
  @input="handleInput"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};