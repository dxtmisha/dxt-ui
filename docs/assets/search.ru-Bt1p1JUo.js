import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`поиск-и-фильтрация`,children:`Поиск и фильтрация`}),`
`,(0,c.jsx)(t.p,{children:`Компонент таблицы имеет встроенную функцию поиска, которая позволяет легко фильтровать ваш набор данных локально.`}),`
`,(0,c.jsx)(t.h3,{id:`использование-автоматического-локального-поиска`,children:`Использование автоматического локального поиска`}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы использовать встроенный поиск, просто привяжите реактивную строковую переменную к свойству `,(0,c.jsx)(t.code,{children:`search`}),`. По мере ввода текста в ваше поле поиска, таблица автоматически отфильтрует строки из свойства `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию таблица ищет по всем значениям. Если вы хотите ограничить поиск конкретными ключами объектов, вы можете передать массив имен свойств в `,(0,c.jsx)(t.code,{children:`searchColumns`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const columns = ['name', 'role']
const header = [
{
  name: 'Имя',
  role: 'Должность'
}
]
const list = [
{ name: 'Алиса', role: 'Разработчик' },
{ name: 'Боб', role: 'Дизайнер' },
{ name: 'Чарли', role: 'Менеджер' }
]
<\/script>

<template>
<div>
  <!-- Ваше поле поиска -->
  <input v-model="searchQuery" placeholder="Поиск..." />

  <!-- Таблица автоматически фильтруется на основе searchQuery -->
  <Table
    :columns="columns"
    :header="header"
    :list="list"
    :search="searchQuery"
    :searchColumns="['name', 'role']"
  />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`продвинутая-настройка`,children:`Продвинутая настройка`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете передать объект конфигурации в свойство `,(0,c.jsx)(t.code,{children:`searchOptions`}),` для более сложных сценариев (например, строгое соответствие, учет регистра), использующих поисковый движок из библиотеки `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};