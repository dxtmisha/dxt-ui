import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-состоянием-через-v-model`,children:`Управление состоянием через v-model`}),`
`,(0,c.jsxs)(t.p,{children:[`Двусторонняя привязка выбранной вкладки через `,(0,c.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number | array`}),` — значение выбранной вкладки (или вкладок)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Главная', value: 'home' },
{ label: 'Профиль', value: 'profile' }
]
<\/script>

<template>
<p>Выбрано: {{ selectedTab }}</p>

<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};