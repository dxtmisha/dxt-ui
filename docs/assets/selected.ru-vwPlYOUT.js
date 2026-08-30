import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`выбранный-элемент`,children:`Выбранный элемент`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`selected`}),` позволяет управлять визуальным состоянием компонента, указывая, что он находится в выбранном или активном состоянии.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected`}),` — булево значение, определяющее, выбран ли элемент`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Когда свойство `,(0,c.jsx)(t.code,{children:`selected`}),` установлено в `,(0,c.jsx)(t.code,{children:`true`}),`, к компоненту добавляется специальный класс (обычно `,(0,c.jsx)(t.code,{children:`--selected`}),`), который изменяет его внешний вид (например, цвет фона, границы или текста), чтобы выделить его среди других элементов. Это полезно для реализации списков выбора, активных полей ввода или других интерактивных элементов, где необходимо визуально обозначить текущий выбор пользователя.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isSelected = ref(true)
<\/script>

<template>
<!-- Выбранное состояние -->
<Textarea
  v-model="value"
  :selected="isSelected"
  label="Активное поле"
/>

<!-- Обычное состояние -->
<Textarea
  v-model="value2"
  :selected="false"
  label="Обычное поле"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};