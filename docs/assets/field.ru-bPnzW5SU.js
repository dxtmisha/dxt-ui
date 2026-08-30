import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Базовый контейнер для полей формы, который композирует метку, сообщения, счётчик, иконки и прогресс в единую структуру.`}),`
`,(0,c.jsx)(t.p,{children:`Field централизует управление визуальным представлением полей ввода, обрабатывает состояния фокуса и валидации, координирует расположение вспомогательных элементов и предоставляет согласованный API для построения любых типов инпутов. Является фундаментальной основой для создания консистентных форм с поддержкой слотов, иконок управления и интеграцией подкомпонентов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Композиция подкомпонентов (FieldLabel, FieldMessage, FieldCounter, Progress)`}),`
`,(0,c.jsx)(t.li,{children:`Управление состояниями (focus, disabled, readonly, selected, block)`}),`
`,(0,c.jsx)(t.li,{children:`Координация слотов (caption, prefix, suffix, leading, trailing)`}),`
`,(0,c.jsx)(t.li,{children:`Подсветка валидации на основе validationMessage и forceShowMessage`}),`
`,(0,c.jsx)(t.li,{children:`Иконки управления с настраиваемой видимостью (cancel, arrows)`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование счётчика через counterTop`}),`
`,(0,c.jsx)(t.li,{children:`Встроенные помощники для размеров и иконок (FieldSize, FieldIcons)`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция прогресса загрузки и скелетон-состояния`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Базовый контейнер для Input, Select, Textarea и других полей ввода`}),`
`,(0,c.jsx)(t.li,{children:`Построение кастомных компонентов форм с единым стилем`}),`
`,(0,c.jsx)(t.li,{children:`Создание полей с валидацией и счётчиками символов`}),`
`,(0,c.jsx)(t.li,{children:`Разработка библиотек компонентов с консистентным UI`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Field } from '@dxtmisha/constructor'

const value = ref('')

// Field предоставляет структуру и управление
<\/script>

<template>
<Field
  label="Имя пользователя"
  helper-message="Введите ваше имя"
  :counter="value.length"
  counter-max="50"
>
  <template #default="{ id, className }">
    <input
      :id="id"
      :class="className"
      v-model="value"
      maxlength="50"
    />
  </template>
</Field>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Field — это контейнер-конструктор: он не обрабатывает ввод данных напрямую, а организует структуру, классы и отображение вспомогательных элементов для любых типов полей ввода.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};