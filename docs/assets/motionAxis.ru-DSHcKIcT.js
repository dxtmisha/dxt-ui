import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для организации переходов между элементами (слайдами).`}),`
`,(0,c.jsx)(t.p,{children:`MotionAxis позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Анимация смены слайдов по осям X, Y, Z`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое или ручное управление направлением (вперед/назад)`}),`
`,(0,c.jsx)(t.li,{children:`Плавная анимация высоты контейнера под контент`}),`
`,(0,c.jsx)(t.li,{children:`Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для каждого слайда`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Слайдеры и карусели`}),`
`,(0,c.jsx)(t.li,{children:`Пошаговые формы (wizards)`}),`
`,(0,c.jsx)(t.li,{children:`Переключение вкладок с анимацией`}),`
`,(0,c.jsx)(t.li,{children:`Галереи изображений`}),`
`,(0,c.jsx)(t.li,{children:`Онбординг экраны`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('slide1')
<\/script>

<template>
<div class="buttons">
  <button @click="selected = 'slide1'">Слайд 1</button>
  <button @click="selected = 'slide2'">Слайд 2</button>
</div>

<MotionAxis :selected="selected">
  <template #slide1>
    <div class="slide">Контент слайда 1</div>
  </template>
  <template #slide2>
    <div class="slide">Контент слайда 2</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};