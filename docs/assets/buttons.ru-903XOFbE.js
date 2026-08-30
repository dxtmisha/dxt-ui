import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`кнопки-действий`,children:`Кнопки действий`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`buttonOk`}),`, `,(0,c.jsx)(t.code,{children:`buttonClose`}),` и `,(0,c.jsx)(t.code,{children:`actionsList`}),` управляют кнопками действий в диалоговом окне через встроенный компонент Actions.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`buttonOk`}),` — кнопка подтверждения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`buttonClose`}),` — кнопка закрытия`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clickOkAndClose`}),` — автоматическое закрытие диалога при нажатии кнопки OK`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionsList`}),` — прямой доступ к списку кнопок компонента Actions`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При `,(0,c.jsx)(t.code,{children:`clickOkAndClose="true"`}),` кнопка OK автоматически закрывает диалог после нажатия.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<!-- Базовое использование -->
<Dialog
  buttonOk="Подтвердить"
  buttonClose="Отмена"
  label="Удаление файла"
  @ok="handleDelete"
/>

<!-- Скрытие кнопки закрытия -->
<Dialog
  buttonOk="Понятно"
  :buttonClose="null"
  label="Информация"
/>

<!-- Использование actionsList -->
<Dialog
  :actionsList="[
    { label: 'Сохранить', onClick: handleSave },
    { label: 'Отмена', outline: true, onClick: handleCancel }
  ]"
  label="Сохранение"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};