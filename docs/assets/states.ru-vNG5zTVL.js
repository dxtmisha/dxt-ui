import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`состояния-успеха-и-ошибки`,children:`Состояния успеха и ошибки`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`success`}),`, `,(0,c.jsx)(t.code,{children:`error`}),`, `,(0,c.jsx)(t.code,{children:`iconSuccess`}),` и `,(0,c.jsx)(t.code,{children:`iconError`}),` предназначены для управления визуальным состоянием диалога и автоматического отображения соответствующих иконок.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`success`}),` — переводит диалог в состояние успеха с автоматической иконкой`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`error`}),` — переводит диалог в состояние ошибки с автоматической иконкой`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconSuccess`}),` — задаёт иконку для состояния успеха (по умолчанию 'check_circle')`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconError`}),` — задаёт иконку для состояния ошибки (по умолчанию 'error')`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,c.jsx)(t.code,{children:`success`}),` или `,(0,c.jsx)(t.code,{children:`error`}),` не заданы или равны `,(0,c.jsx)(t.code,{children:`false`}),`, диалог отображается в нейтральном состоянии. При активации `,(0,c.jsx)(t.code,{children:`success="true"`}),`, компонент автоматически отображает иконку успеха из `,(0,c.jsx)(t.code,{children:`iconSuccess`}),`. При активации `,(0,c.jsx)(t.code,{children:`error="true"`}),`, отображается иконка ошибки из `,(0,c.jsx)(t.code,{children:`iconError`}),`. Свойства `,(0,c.jsx)(t.code,{children:`iconSuccess`}),` и `,(0,c.jsx)(t.code,{children:`iconError`}),` позволяют переопределить стандартные иконки на пользовательские, обеспечивая гибкость визуального оформления диалоговых сообщений.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showSuccess = ref(false)
const showError = ref(false)
<\/script>

<template>
<!-- Диалог успеха -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Операция выполнена"
  description="Ваши изменения успешно сохранены."
/>

<!-- Диалог ошибки -->
<Dialog
  v-model:open="showError"
  :error="true"
  label="Ошибка выполнения"
  description="Не удалось выполнить операцию. Попробуйте ещё раз."
/>

<!-- С пользовательскими иконками -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  iconSuccess="done_all"
  label="Всё готово"
  description="Процесс завершён успешно."
/>

<!-- Ошибка с кастомной иконкой -->
<Dialog
  v-model:open="showError"
  :error="true"
  iconError="warning"
  label="Внимание"
  description="Обнаружены проблемы при обработке данных."
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};