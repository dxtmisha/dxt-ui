import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-состоянием-через-v-model`,children:`Управление состоянием через v-model`}),`
`,(0,c.jsxs)(t.p,{children:[`Двусторонняя привязка выбранного слайда через `,(0,c.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор выбранного слайда`]}),`
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

<MotionAxis v-model:selected="selected">
  <template #slide1>
    <div>Контент слайда 1</div>
  </template>
  <template #slide2>
    <div>Контент слайда 2</div>
  </template>
</MotionAxis>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};