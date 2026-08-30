import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`режим-выбора-диапазона-multiple`,children:[`Режим выбора диапазона (`,(0,c.jsx)(t.code,{children:`multiple`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Включение свойства `,(0,c.jsx)(t.code,{children:`multiple`}),` переводит слайдер в режим выбора интервала с двумя ползунками. В этом режиме `,(0,c.jsx)(t.code,{children:`v-model`}),` связывается с массивом из двух чисел `,(0,c.jsx)(t.code,{children:`[min, max]`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple`}),` — включает два ползунка для выбора диапазона`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minimumDistance`}),` — устанавливает минимально допустимое расстояние между левым и правым ползунками (по умолчанию `,(0,c.jsx)(t.code,{children:`1`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При перемещении ползунков компонент автоматически гарантирует, что минимальный ползунок не сможет приблизиться к максимальному ближе чем на `,(0,c.jsx)(t.code,{children:`minimumDistance`}),`, исключая пересечение и некорректные интервалы.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const priceRange = ref([100, 500])
<\/script>

<template>
<Slider
  v-model="priceRange"
  multiple
  :min="0"
  :max="1000"
  :step="10"
  :minimumDistance="50"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};