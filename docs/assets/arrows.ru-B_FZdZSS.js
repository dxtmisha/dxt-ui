import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`навигация-и-стрелки`,children:`Навигация и стрелки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`arrowCarousel`}),`, `,(0,c.jsx)(t.code,{children:`arrowStepper`}),`, `,(0,c.jsx)(t.code,{children:`arrowAlign`}),`, `,(0,c.jsx)(t.code,{children:`disabledPrevious`}),` и `,(0,c.jsx)(t.code,{children:`disabledNext`}),` предназначены для управления встроенными элементами навигации.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowCarousel`}),` — включает стрелки навигации (влево/вправо) для переключения элементов`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowStepper`}),` — включает числовые шаговые кнопки (минус/плюс)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowAlign`}),` — управляет горизонтальным расположением стрелок навигации (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledPrevious`}),` — отключает левую кнопку (назад/минус)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabledNext`}),` — отключает правую кнопку (вперёд/плюс)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: активен только один режим стрелок — если `,(0,c.jsx)(t.code,{children:`arrowCarousel = true`}),`, режим `,(0,c.jsx)(t.code,{children:`arrowStepper`}),` игнорируется и наоборот. При активном режиме навигации кнопка очистки (`,(0,c.jsx)(t.code,{children:`cancel`}),`) автоматически скрывается, так как область управления имеет приоритет. Флаги `,(0,c.jsx)(t.code,{children:`disabledPrevious`}),` и `,(0,c.jsx)(t.code,{children:`disabledNext`}),` применяются только к текущему активному режиму стрелок.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const items = ['Item 1', 'Item 2', 'Item 3']
const count = ref(5)
<\/script>

<template>
<!-- Карусель с навигацией -->
<Field
  label="Элемент"
  arrow-carousel
  :disabled-previous="currentIndex === 0"
  :disabled-next="currentIndex === items.length - 1"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="items[currentIndex]"
      readonly
    />
  </template>
</Field>

<!-- Числовой степпер -->
<Field
  label="Количество"
  arrow-stepper
  :disabled-previous="count <= 0"
  :disabled-next="count >= 99"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Степпер со стрелками слева -->
<Field
  label="Значение"
  arrow-stepper
  arrow-align="left"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>

<!-- Степпер с центрированными стрелками -->
<Field
  label="Значение"
  arrow-stepper
  arrow-align="center"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      :value="count"
      readonly
    />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};