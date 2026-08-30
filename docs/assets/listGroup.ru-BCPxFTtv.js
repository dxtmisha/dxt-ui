import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для группировки и организации элементов списка со сворачиваемой структурой.`}),`
`,(0,c.jsx)(t.p,{children:`ListGroup является вспомогательным компонентом для List, управляющим иерархической организацией контента с возможностью разворачивания/сворачивания групп. Компонент интегрируется с MotionTransform для плавных анимаций, поддерживает неограниченную вложенность групп и обеспечивает удобную навигацию по структурированным данным.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Иерархическая организация контента с неограниченной вложенностью`}),`
`,(0,c.jsx)(t.li,{children:`Анимации разворачивания/сворачивания групп через MotionTransform`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием открытия через props или внутренний state`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое управление видимостью содержимого группы`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с экосистемой компонентов List`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка кастомизации через слоты head и list`}),`
`,(0,c.jsx)(t.li,{children:`События изменения состояния группы`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Группировка элементов списка по категориям`}),`
`,(0,c.jsx)(t.li,{children:`Создание древовидных структур навигации`}),`
`,(0,c.jsx)(t.li,{children:`Организация настроек и опций по разделам`}),`
`,(0,c.jsx)(t.li,{children:`Многоуровневые меню и каталоги`}),`
`,(0,c.jsx)(t.li,{children:`FAQ секции с раскрывающимися ответами`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = [
{ text: 'Элемент 1', value: '1' },
{ text: 'Элемент 2', value: '2' },
{ text: 'Элемент 3', value: '3' }
]

const isOpen = ref(true)
<\/script>

<template>
<List>
  <ListGroup v-model:open="isOpen">
    <template #head="{ open }">
      <div class="group-header">
        <span>{{ open ? '▼' : '▶' }}</span>
        <span>Группа элементов</span>
      </div>
    </template>

    <template #list>
      <ListItem
        v-for="item in items"
        :key="item.value"
        :text="item.text"
      />
    </template>
  </ListGroup>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};