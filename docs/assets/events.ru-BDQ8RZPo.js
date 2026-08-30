import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`ok`,children:(0,c.jsx)(t.code,{children:`ok`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку подтверждения (OK) в диалоговом окне.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Параметры:`}),`
Событие не передаёт параметров.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleOk = () => {
console.log('Пользователь подтвердил действие')
showDialog.value = false
// Выполнение действия после подтверждения
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonOk="Подтвердить"
  label="Удаление файла"
  description="Вы действительно хотите удалить этот файл?"
  @ok="handleOk"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`close`,children:(0,c.jsx)(t.code,{children:`close`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку закрытия в диалоговом окне.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Параметры:`}),`
Событие не передаёт параметров.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleClose = () => {
console.log('Пользователь отменил действие')
showDialog.value = false
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonClose="Отмена"
  label="Подтверждение"
  @close="handleClose"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Кнопки можно настроить через свойства `,(0,c.jsx)(t.code,{children:`buttonOk`}),` и `,(0,c.jsx)(t.code,{children:`buttonClose`}),`, либо скрыть, передав `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};