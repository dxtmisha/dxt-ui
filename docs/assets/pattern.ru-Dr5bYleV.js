import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`валидация-и-паттерны`,children:`Валидация и паттерны`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`pattern`}),` и `,(0,c.jsx)(t.code,{children:`check`}),` предназначены для управления валидацией ввода в маске.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern`}),` — определяет паттерны валидации для отдельных групп маски, проверяя введённые значения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`check`}),` — глобальный паттерн валидации, применяемый после полного заполнения маски`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают последовательно: `,(0,c.jsx)(t.code,{children:`pattern`}),` проверяет введённые значения на уровне групп маски, подсвечивая ошибки валидации после ввода. Символы вводятся в поле, но при несоответствии паттерну отображается сообщение об ошибке. Каждая группа (определённая специальными символами) получает свой паттерн. После полного заполнения маски `,(0,c.jsx)(t.code,{children:`check`}),` выполняет финальную валидацию всего значения, обеспечивая дополнительный слой проверки для сложной бизнес-логики. Оба свойства опциональны и могут использоваться независимо или совместно для многоуровневой защиты от некорректных данных.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
<!-- Pattern для групп: только цифры -->
<Mask
  v-model="phone"
  mask="+7 (***) ***-**-**"
  pattern="\\d"
/>

<!-- Pattern с функцией для разных групп -->
<Mask
  v-model="phone"
  mask="DD/MM/YYYY"
  :special="{
    'D': {
      pattern: (masks) => {
        const value = masks['D']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '3') return '[0-1]'
        return '\\d'
      }
    },
    'M': {
      pattern: (masks) => {
        const value = masks['M']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '1') return '[0-2]'
        return '\\d'
      }
    },
    'Y': { pattern: '\\d' }
  }"
/>

<!-- Check для финальной валидации -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  pattern="\\d"
  :check="(maskData) => {
    const number = maskData.value.replace(/s/g, '')
    return isValidLuhn(number) ? {} : {
      validationMessage: 'Неверный номер карты'
    }
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};