import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`работа-с-числами`,children:`Работа с числами`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`fraction`}),`, `,(0,c.jsx)(t.code,{children:`language`}),`, `,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),`, `,(0,c.jsx)(t.code,{children:`arrow`}),`, `,(0,c.jsx)(t.code,{children:`arrowStep`}),` и `,(0,c.jsx)(t.code,{children:`align`}),` предназначены для управления вводом и форматированием числовых значений с поддержкой локализации и интерактивных элементов управления.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — тип инпута (`,(0,c.jsx)(t.code,{children:`number`}),` или `,(0,c.jsx)(t.code,{children:`number-format`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fraction`}),` — количество знаков после запятой (число, `,(0,c.jsx)(t.code,{children:`true`}),` для динамической дробной части)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — код локали для форматирования (например, `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — минимальное допустимое значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — максимальное допустимое значение`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — шаг изменения при клавиатурном вводе`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrow`}),` — тип управляющих стрелок (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`stepper`}),`, `,(0,c.jsx)(t.code,{children:`carousel`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowStep`}),` — шаг изменения при нажатии на стрелки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`align`}),` — расположение стрелок (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`type`}),` определяет базовый режим ввода, где `,(0,c.jsx)(t.code,{children:`number`}),` активирует простой числовой ввод с базовой валидацией без форматирования, а `,(0,c.jsx)(t.code,{children:`number-format`}),` включает автоматическое форматирование с разделителями тысяч и десятичными знаками в зависимости от локали. `,(0,c.jsx)(t.code,{children:`language`}),` определяет региональные правила для разделителей тысяч (пробел, запятая, точка) и десятичного разделителя (точка или запятая). Свойства `,(0,c.jsx)(t.code,{children:`min`}),` и `,(0,c.jsx)(t.code,{children:`max`}),` активируют встроенную валидацию диапазона. `,(0,c.jsx)(t.code,{children:`step`}),` определяет величину инкремента/декремента при использовании клавиш стрелок вверх/вниз и Page Up/Down. Свойства `,(0,c.jsx)(t.code,{children:`arrow`}),` и `,(0,c.jsx)(t.code,{children:`arrowStep`}),` добавляют визуальные элементы управления (кнопки ± или стрелки < >) с настраиваемым шагом изменения, где если `,(0,c.jsx)(t.code,{children:`arrowStep`}),` не указан, используется значение `,(0,c.jsx)(t.code,{children:`step`}),`. `,(0,c.jsx)(t.code,{children:`align`}),` управляет расположением стрелок в поле ввода.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234567.89')
<\/script>

<template>
<!-- Простой числовой ввод -->
<Input v-model="value" type="number" label="Число" />

<!-- Форматированное число с локалью -->
<Input v-model="value" type="number-format" language="ru-RU" label="Форматированное" />

<!-- С ограничениями диапазона -->
<Input v-model="value" type="number" :min="0" :max="100" label="От 0 до 100" />

<!-- С шагом и стрелками stepper -->
<Input v-model="value" type="number" arrow="stepper" :step="5" :arrow-step="10" label="Шаг 5/10" />

<!-- С выравниванием по центру -->
<Input v-model="value" type="number-format" align="center" :fraction="2" label="По центру" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};