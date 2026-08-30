import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`автоматическое-изменение-размера`,children:`Автоматическое изменение размера`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`autosize`}),` управляет автоматическим изменением высоты текстового поля в зависимости от содержимого.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`autosize`}),` — включает режим автоматического изменения размера (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rows`}),` — количество видимых строк (атрибут HTML).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Когда `,(0,c.jsx)(t.code,{children:`autosize`}),` включен, `,(0,c.jsx)(t.code,{children:`Textarea`}),` будет динамически изменять свою высоту, чтобы вместить весь введенный текст.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const text = ref('')
<\/script>

<template>
<!-- Автоматическое изменение размера по умолчанию -->
<Textarea
  v-model="text"
  label="Комментарий"
  placeholder="Введите текст..."
/>

<!-- Отключенное авто-изменение размера -->
<Textarea
  v-model="text"
  label="Фиксированный размер"
  :autosize="false"
  rows="5"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};