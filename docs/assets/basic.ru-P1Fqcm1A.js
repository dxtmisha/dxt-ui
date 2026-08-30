import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания полей ввода с автоматическим форматированием данных по заданному шаблону в реальном времени.`}),`
`,(0,c.jsxs)(t.p,{children:[`Mask обеспечивает структурированный ввод с поддержкой различных форматов (телефоны, банковские карты, даты, валюты, числа). Компонент автоматически добавляет разделители и литеральные символы во время набора, ограничивает ввод только допустимыми символами, поддерживает множественные шаблоны с автоматическим выбором наиболее подходящего, работает совместно с системой валидации через `,(0,c.jsx)(t.code,{children:`pattern`}),` и `,(0,c.jsx)(t.code,{children:`check`}),`, и предоставляет встроенные типы масок для распространенных форматов данных.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое форматирование с добавлением разделителей`}),`
`,(0,c.jsx)(t.li,{children:`Гибкие шаблоны с поддержкой одиночных и множественных масок`}),`
`,(0,c.jsx)(t.li,{children:`Встроенные типы: text, number, number-format, currency, date, time`}),`
`,(0,c.jsxs)(t.li,{children:[`Настраиваемые специальные символы через свойство `,(0,c.jsx)(t.code,{children:`special`})]}),`
`,(0,c.jsx)(t.li,{children:`Предотвращение ошибок ввода с ограничением символов`}),`
`,(0,c.jsxs)(t.li,{children:[`Интеграция с системой валидации через `,(0,c.jsx)(t.code,{children:`pattern`}),` и `,(0,c.jsx)(t.code,{children:`check`})]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка выравнивания (left/right) и направления (ltr/rtl)`}),`
`,(0,c.jsx)(t.li,{children:`Резиновые группы с динамической длиной`}),`
`,(0,c.jsx)(t.li,{children:`Управление видимостью незаполненных символов`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поля ввода телефонных номеров`}),`
`,(0,c.jsx)(t.li,{children:`Номера банковских карт и CVV-кодов`}),`
`,(0,c.jsx)(t.li,{children:`Даты и время в различных форматах`}),`
`,(0,c.jsx)(t.li,{children:`Почтовые индексы и коды`}),`
`,(0,c.jsx)(t.li,{children:`Валютные суммы с форматированием`}),`
`,(0,c.jsx)(t.li,{children:`Числовые значения с разделителями`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
const date = ref('')
const amount = ref('')

const handleInput = (value) => {
console.log('Введено значение:', value)
}
<\/script>

<template>
<!-- Российский телефон -->
<Mask
  v-model="phone"
  mask="+7 *** *** ** **"
  placeholder="Введите номер телефона"
  @input="handleInput"
/>

<!-- Банковская карта -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  placeholder="0000 0000 0000 0000"
/>

<!-- Множественные форматы телефонов -->
<Mask
  v-model="phone"
  :mask="['+7 *** *** ** **', '8 *** *** ** **']"
/>

<!-- Дата с встроенным типом -->
<Mask
  v-model="date"
  type="date"
  pattern="DD.MM.YYYY"
/>

<!-- Валюта -->
<Mask
  v-model="amount"
  type="currency"
  currency="RUB"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};