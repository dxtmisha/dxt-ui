import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`неопределённое-состояние`,children:`Неопределённое состояние`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`indeterminate`}),` управляет третьим состоянием чекбокса — неопределённым (частично выбранным). Это состояние визуально отображается как горизонтальная линия вместо галочки.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indeterminate`}),` — включает неопределённое состояние чекбокса`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconIndeterminate`}),` — пользовательская иконка для неопределённого состояния`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — остается `,(0,c.jsx)(t.code,{children:`null`}),` или специальное значение в неопределённом состоянии`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Неопределённое состояние обычно используется для родительских чекбоксов в группе, когда выбраны только некоторые дочерние элементы.`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const items = ref([
{ id: 1, label: 'Пункт 1', checked: true },
{ id: 2, label: 'Пункт 2', checked: false },
{ id: 3, label: 'Пункт 3', checked: true }
])

const allChecked = computed({
get: () => items.value.every(item => item.checked),
set: (value) => {
  items.value.forEach(item => item.checked = value)
}
})

const indeterminate = computed(() => {
const checkedCount = items.value.filter(item => item.checked).length
return checkedCount > 0 && checkedCount < items.value.length
})
<\/script>

<template>
<!-- Родительский чекбокс с индикатором частичного выбора -->
<Checkbox
  v-model="allChecked"
  :indeterminate="indeterminate"
  label="Выбрать все"
/>

<!-- Дочерние чекбоксы -->
<div style="margin-left: 24px">
  <Checkbox
    v-for="item in items"
    :key="item.id"
    v-model="item.checked"
    :label="item.label"
  />
</div>

<!-- Использование с пользовательской иконкой -->
<Checkbox
  indeterminate
  iconIndeterminate="remove"
  label="Частично выбрано"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};