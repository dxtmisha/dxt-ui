import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`типы-циферблата-type`,children:[`Типы циферблата (`,(0,c.jsx)(t.code,{children:`type`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`type`}),` определяет формат шкалы циферблата, количество делений и шаг поворота стрелки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`12`}),` `,(0,c.jsx)(t.em,{children:`(по умолчанию)`}),` — классический 12-часовой циферблат с делениями от 1 до 12 и шагом поворота 30°. При нулевом значении стрелка выбора скрывается.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`24`}),` — двухрядный 24-часовой циферблат. Внешний круг содержит дневные часы (1–12), внутренний ряд — ночные часы (13–24 и 0) со сниженной контрастностью. При выборе внутреннего круга компонент активирует модификатор `,(0,c.jsx)(t.code,{children:`--section`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minute`}),` — 60-минутный циферблат с шагом 6°. Числовые подписи отображаются с интервалом в 5 минут (00, 05, 10...), а промежуточные деления отображают точку-индикатор при выборе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second`}),` — 60-секундный циферблат с шагом 6°. Числовые метки отображаются каждые 5 секунд, промежуточные деления выводятся точечными индикаторами.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`ограничения-диапазона-и-шаг-min-max-step`,children:[`Ограничения диапазона и шаг (`,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Компонент позволяет задавать ограничения для допустимых значений:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — минимальное допустимое значение. Деления меньше `,(0,c.jsx)(t.code,{children:`min`}),` становятся неактивными (`,(0,c.jsx)(t.code,{children:`disabled`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — максимальное допустимое значение. Деления больше `,(0,c.jsx)(t.code,{children:`max`}),` становятся неактивными (`,(0,c.jsx)(t.code,{children:`disabled`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — дискретный шаг делений. Значения, не кратные `,(0,c.jsx)(t.code,{children:`step`}),` относительно `,(0,c.jsx)(t.code,{children:`min`}),`, блокируются. При перетаскивании стрелка автоматически притягивается к ближайшему активному делению.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const hour = ref(10)
const hour24 = ref(16)
const minute = ref(30)
<\/script>

<template>
<!-- 12-часовой формат -->
<ClockDial v-model="hour" type="12" />

<!-- 24-часовой формат с ограничением рабочих часов -->
<ClockDial v-model="hour24" type="24" :min="9" :max="18" />

<!-- Минуты с шагом 5 минут -->
<ClockDial v-model="minute" type="minute" :step="5" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};