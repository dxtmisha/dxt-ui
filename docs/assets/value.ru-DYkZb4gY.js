import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-значениями`,children:`Управление значениями`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`valueVariant`}),` и `,(0,c.jsx)(t.code,{children:`valueVariantHide`}),` предназначены для управления значениями чекбокса при отправке форм и работе с двусторонней привязкой данных.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — текущее состояние чекбокса (true/false или пользовательские значения)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueVariant`}),` — значение, которое передаётся при отмеченном чекбоксе`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`valueVariantHide`}),` — значение, которое передаётся при неотмеченном чекбоксе (по умолчанию: "0")`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`value`}),` определяет текущее состояние чекбокса и работает с `,(0,c.jsx)(t.code,{children:`v-model`}),` для двусторонней привязки. `,(0,c.jsx)(t.code,{children:`valueVariant`}),` позволяет установить пользовательское значение для отмеченного состояния (например, "yes", "1", "active"), которое будет передано при отправке формы. `,(0,c.jsx)(t.code,{children:`valueVariantHide`}),` автоматически создаёт скрытое поле input с указанным значением, которое отправляется, когда чекбокс не отмечен, обеспечивая наличие данных в форме даже при неактивном чекбоксе.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const agreed = ref(false)
const formData = ref({})

const handleSubmit = () => {
console.log('Form data:', formData.value)
}
<\/script>

<template>
<!-- Стандартное использование с boolean -->
<Checkbox
  v-model="agreed"
  name="terms"
  label="Согласен с условиями"
/>
<!-- value: true/false -->

<!-- Пользовательские значения для формы -->
<Checkbox
  name="subscribe"
  label="Подписаться на рассылку"
  valueVariant="yes"
  valueVariantHide="no"
/>
<!-- При отметке отправит: subscribe=yes -->
<!-- Без отметки отправит: subscribe=no -->

<!-- Числовые значения -->
<Checkbox
  name="notification"
  label="Включить уведомления"
  valueVariant="1"
  valueVariantHide="0"
/>
<!-- При отметке отправит: notification=1 -->
<!-- Без отметки отправит: notification=0 -->

<!-- Без скрытого значения -->
<Checkbox
  name="optional"
  label="Опциональная настройка"
  valueVariant="enabled"
  :valueVariantHide="null"
/>
<!-- Отправляется только при отметке: optional=enabled -->
<!-- Без отметки поле не отправляется -->
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};