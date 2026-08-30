import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для выбора числовых значений или диапазонов с помощью интерактивных подвижных ползунков.`}),`
`,(0,c.jsx)(t.p,{children:`Slider предоставляет настраиваемый пользовательский интерфейс для точного выбора чисел или установки ограниченных интервалов. Он поддерживает как одиночный режим ползунка, так и двухползунковый выбор диапазона, настраиваемые минимальные и максимальные границы, регулируемый шаг изменения, отображение делений с текстовыми метками, режим притягивания к меткам (магнит), вертикальную и горизонтальную ориентацию, а также полную поддержку клавиатурной навигации и сенсорных жестов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Одиночный выбор значения и двухползунковый выбор диапазона (`,(0,c.jsx)(t.code,{children:`multiple`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Настраиваемые минимальное (`,(0,c.jsx)(t.code,{children:`min`}),`), максимальное (`,(0,c.jsx)(t.code,{children:`max`}),`) значения и шаг (`,(0,c.jsx)(t.code,{children:`step`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Отображение делений и меток с кастомным маппингом данных (`,(0,c.jsx)(t.code,{children:`marks`}),`, `,(0,c.jsx)(t.code,{children:`keyLabel`}),`, `,(0,c.jsx)(t.code,{children:`keyValue`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Режим притягивания ползунка к ближайшей метке (`,(0,c.jsx)(t.code,{children:`magnet`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ограничение минимального расстояния между ползунками (`,(0,c.jsx)(t.code,{children:`minimumDistance`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Горизонтальная и вертикальная ориентация (`,(0,c.jsx)(t.code,{children:`vertical`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Состояния отключения (`,(0,c.jsx)(t.code,{children:`disabled`}),`) и только для чтения (`,(0,c.jsx)(t.code,{children:`readonly`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Полноценная поддержка клавиатуры (стрелки, Home, End, PageUp, PageDown) и перетаскивания (drag/touch)`}),`
`,(0,c.jsx)(t.li,{children:`Визуальный отклик (ripple) и кастомизация через слоты`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Регулировка громкости, яркости или параметров управления`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация по цене, возрасту или числовому диапазону в каталогах`}),`
`,(0,c.jsx)(t.li,{children:`Установка процентных значений и целевых показателей`}),`
`,(0,c.jsx)(t.li,{children:`Ввод числовых данных с ограниченным валидным интервалом`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const singleValue = ref(50)
const rangeValue = ref([20, 80])
<\/script>

<template>
<!-- Одиночный слайдер -->
<Slider v-model="singleValue" :min="0" :max="100" :step="5" />

<!-- Слайдер выбора диапазона -->
<Slider v-model="rangeValue" multiple :min="0" :max="100" :minimumDistance="10" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};