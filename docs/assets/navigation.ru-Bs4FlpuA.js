import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`навигация-по-элементам-меню`,children:`Навигация по элементам меню`}),`
`,(0,c.jsxs)(t.p,{children:[`Методы `,(0,c.jsx)(t.code,{children:`previous()`}),` и `,(0,c.jsx)(t.code,{children:`next()`}),` предназначены для программного перемещения по элементам меню на основе текущего выбора и свойства `,(0,c.jsx)(t.code,{children:`step`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Методы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`previous()`}),` — перемещает выбор на предыдущий элемент (назад на `,(0,c.jsx)(t.code,{children:`step`}),` позиций)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`next()`}),` — перемещает выбор на следующий элемент (вперед на `,(0,c.jsx)(t.code,{children:`step`}),` позиций)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — количество элементов для пропуска при навигации (по умолчанию: 1)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Методы работают совместно с реактивным состоянием `,(0,c.jsx)(t.code,{children:`selected`}),`: при вызове `,(0,c.jsx)(t.code,{children:`previous()`}),` или `,(0,c.jsx)(t.code,{children:`next()`}),` происходит автоматический расчёт новой позиции относительно текущего выделенного элемента. Если элемент не выбран, методы выбирают первый доступный элемент. При достижении границ списка (первый или последний элемент) навигация останавливается на граничном элементе, предотвращая выход за пределы списка.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item2')
<\/script>

<template>
<!-- Вызов через ref -->
<button @click="menuRef?.previous()">Назад</button>
<button @click="menuRef?.next()">Вперед</button>

<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="[
    { label: 'Элемент 1', value: 'item1' },
    { label: 'Элемент 2', value: 'item2' },
    { label: 'Элемент 3', value: 'item3' }
  ]"
  :step="1"
/>

<!-- Навигация в слоте control -->
<Menu v-model:selected="selected" :list="items">
  <template #control="{ previous, next, selectedNames }">
    <button @click="previous">◀</button>
    <span>{{ selectedNames[0] }}</span>
    <button @click="next">▶</button>
  </template>
</Menu>

<!-- С пользовательским шагом -->
<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="items"
  :step="2"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};