import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент текстового поля с автоматической подстройкой высоты под содержимое.`}),`
`,(0,c.jsx)(t.p,{children:`TextareaAutosize предоставляет многострочное текстовое поле, которое динамически изменяет свою высоту в зависимости от объёма введённого текста. Компонент использует скрытый элемент-клон для точного расчёта необходимой высоты, учитывая все отступы и стили исходного textarea. Это обеспечивает плавное и естественное поведение при вводе текста без ручной настройки высоты.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическая подстройка высоты под содержимое`}),`
`,(0,c.jsx)(t.li,{children:`Точный расчёт размера с учётом padding и стилей`}),`
`,(0,c.jsx)(t.li,{children:`Плавные переходы высоты при изменении контента`}),`
`,(0,c.jsx)(t.li,{children:`Опциональное отключение autosize для фиксированной высоты`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка всех стандартных атрибутов textarea`}),`
`,(0,c.jsx)(t.li,{children:`Реактивная привязка значения с событиями input`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизированная производительность через requestAnimationFrame`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поля для комментариев и отзывов`}),`
`,(0,c.jsx)(t.li,{children:`Формы обратной связи с длинными текстами`}),`
`,(0,c.jsx)(t.li,{children:`Редакторы описаний и заметок`}),`
`,(0,c.jsx)(t.li,{children:`Чаты и мессенджеры`}),`
`,(0,c.jsx)(t.li,{children:`Формы с динамическим контентом`}),`
`,(0,c.jsx)(t.li,{children:`Многострочные поля в адаптивных интерфейсах`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const message = ref('')

const handleInput = (event) => {
console.log('Текущее значение:', event.target.value)
}
<\/script>

<template>
<div class="form">
  <TextareaAutosize
    v-model="message"
    :inputAttrs="{
      placeholder: 'Введите ваше сообщение...',
      maxlength: 500
    }"
    @input="handleInput"
  />

  <TextareaAutosize
    value="Текстовое поле с фиксированной высотой"
    :autosize="false"
    :inputAttrs="{
      placeholder: 'Высота не изменяется',
      rows: 3
    }"
  />

  <TextareaAutosize
    :inputAttrs="{
      placeholder: 'Комментарий',
      'aria-label': 'Поле комментария',
      required: true
    }"
  />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};