import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`работа-с-датой-и-временем`,children:`Работа с датой и временем`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`language`}),` и `,(0,c.jsx)(t.code,{children:`mask`}),` предназначены для управления вводом и форматированием значений даты и времени с автоматической локализацией и маскированием.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — тип инпута (устанавливается одно из значений: `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`datetime`}),`, `,(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`, `,(0,c.jsx)(t.code,{children:`hour-minute`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` — пользовательская маска для ввода (опционально)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — минимальное допустимое значение даты/времени`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — максимальное допустимое значение даты/времени`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`type="date"`}),` автоматически активирует режим ввода даты с локализованным форматированием. `,(0,c.jsx)(t.code,{children:`language`}),` определяет порядок компонентов даты (день/месяц/год или месяц/день/год) и разделители. `,(0,c.jsx)(t.code,{children:`type="datetime"`}),` добавляет к дате ввод времени. Типы `,(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`time`}),` и `,(0,c.jsx)(t.code,{children:`hour-minute`}),` позволяют вводить только определённые компоненты. Свойства `,(0,c.jsx)(t.code,{children:`min`}),` и `,(0,c.jsx)(t.code,{children:`max`}),` ограничивают диапазон допустимых значений. Можно переопределить автоматическую маску через свойство `,(0,c.jsx)(t.code,{children:`mask`}),` для кастомного форматирования.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const dateValue = ref('2024-03-15')
const datetimeValue = ref('2024-03-15T14:30:00')
const timeValue = ref('14:30')
const yearMonthValue = ref('2024-03')
<\/script>

<template>
<!-- Стандартный ввод даты -->
<Input v-model="dateValue" type="date" language="ru-RU" label="Дата" />

<!-- Дата с английской локалью -->
<Input v-model="dateValue" type="date" language="en-US" label="Date" />

<!-- Дата и время -->
<Input v-model="datetimeValue" type="datetime" language="ru-RU" label="Дата и время" />

<!-- Только время -->
<Input v-model="timeValue" type="time" language="ru-RU" label="Время" />

<!-- Часы и минуты -->
<Input v-model="timeValue" type="hour-minute" language="ru-RU" label="Часы:Минуты" />

<!-- Год и месяц -->
<Input v-model="yearMonthValue" type="year-month" language="ru-RU" label="Период" />

<!-- Дата с ограничениями -->
<Input
  v-model="dateValue"
  type="date"
  language="ru-RU"
  min="2024-01-01"
  max="2024-12-31"
  label="Дата в 2024 году"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};