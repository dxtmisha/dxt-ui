import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для выбора и отображения значений времени на интерактивном круглом циферблате часов.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ClockDial`}),` предоставляет круглый интерфейс для интуитивного выбора часов, минут и секунд. Он поддерживает стандартный 12-часовой и двухрядный 24-часовой режимы, 60-сегментные циферблаты минут и секунд, плавное перемещение стрелки-указателя, режим отображения времени со стрелками (`,(0,c.jsx)(t.code,{children:`clock`}),`), автоматический расчёт углов поворота стрелок, выбор по координатам клика/касания, дискретный шаг (`,(0,c.jsx)(t.code,{children:`step`}),`), а также кастомизацию меток через слоты.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Режимы циферблата (`,(0,c.jsx)(t.code,{children:`type`}),`)`]}),`: `,(0,c.jsx)(t.code,{children:`12`}),` (12-часовой), `,(0,c.jsx)(t.code,{children:`24`}),` (24-часовой двухрядный), `,(0,c.jsx)(t.code,{children:`minute`}),` (минутный на 60 делений) и `,(0,c.jsx)(t.code,{children:`second`}),` (секундный на 60 делений).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Режим часов (`,(0,c.jsx)(t.code,{children:`clock`}),`)`]}),`: Отображение времени через стрелки часов (`,(0,c.jsx)(t.code,{children:`hour`}),`), минут (`,(0,c.jsx)(t.code,{children:`minute`}),`) и секунд (`,(0,c.jsx)(t.code,{children:`second`}),`) с отключением интерактивного выбора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ограничения диапазона и шага`}),`: Минимальное (`,(0,c.jsx)(t.code,{children:`min`}),`), максимальное (`,(0,c.jsx)(t.code,{children:`max`}),`) значения и дискретный шаг (`,(0,c.jsx)(t.code,{children:`step`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интерактивный выбор`}),`: Перетаскивание стрелки в реальном времени, сенсорные жесты и выбор ближайшего деления по координатам (`,(0,c.jsx)(t.code,{children:`selectByCoordinates`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Состояния`}),`: Отключение (`,(0,c.jsx)(t.code,{children:`disabled`}),`) и только для чтения (`,(0,c.jsx)(t.code,{children:`readonly`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Слоты`}),`: Кастомизация отображения делений (`,(0,c.jsx)(t.code,{children:`item`}),`) и центрального содержимого (`,(0,c.jsx)(t.code,{children:`default`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выбор времени (time picker) и настройка будильников.`}),`
`,(0,c.jsx)(t.li,{children:`Аналоговые часы и визуализация текущего времени.`}),`
`,(0,c.jsx)(t.li,{children:`Таймеры и циферблаты обратного отсчета.`}),`
`,(0,c.jsx)(t.li,{children:`Бронирование слотов и выбор рабочих часов.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedHour = ref(10)
const selectedMinute = ref(30)
<\/script>

<template>
<!-- 12-часовой выбор часа -->
<ClockDial v-model="selectedHour" type="12" />

<!-- Выбор минут с шагом 5 -->
<ClockDial v-model="selectedMinute" type="minute" :step="5" />

<!-- Режим часов со стрелками -->
<ClockDial clock type="12" :hour="10" :minute="30" :second="45" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};