import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания горизонтально прокручиваемого контейнера с поддержкой плавного скролла и автоматического позиционирования.`}),`
`,(0,c.jsx)(t.p,{children:`HorizontalScroll предоставляет удобный способ отображения контента, который не помещается по ширине экрана, например, галерей изображений, списков карточек или навигационных меню. Компонент поддерживает автоматическую прокрутку к выбранному элементу при инициализации и предоставляет методы для программного управления скроллом.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Горизонтальная прокрутка контента`}),`
`,(0,c.jsx)(t.li,{children:`Плавный скролл (smooth scrolling)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая прокрутка к активному элементу при загрузке`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка пользовательских тегов для контейнера`}),`
`,(0,c.jsx)(t.li,{children:`Слот с передачей привязок (binds) для дочерних элементов`}),`
`,(0,c.jsx)(t.li,{children:`Управление видимостью скроллбара (flush режим)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Галереи изображений и медиа-контента`}),`
`,(0,c.jsx)(t.li,{children:`Горизонтальные списки карточек товаров`}),`
`,(0,c.jsx)(t.li,{children:`Навигационные меню с прокруткой (табы)`}),`
`,(0,c.jsx)(t.li,{children:`Списки тегов или категорий`}),`
`,(0,c.jsx)(t.li,{children:`Таймлайны и последовательности шагов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ id: 1, title: 'Элемент 1' },
{ id: 2, title: 'Элемент 2' },
{ id: 3, title: 'Элемент 3' },
{ id: 4, title: 'Элемент 4' },
{ id: 5, title: 'Элемент 5' }
])
<\/script>

<template>
<HorizontalScroll>
  <template #default="{ binds }">
    <div
      v-for="item in items"
      :key="item.id"
      v-bind="binds"
      class="scroll-item"
    >
      {{ item.title }}
    </div>
  </template>
</HorizontalScroll>
</template>

<style scoped>
.scroll-item {
min-width: 150px;
height: 100px;
margin-right: 16px;
background: #f5f5f5;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
}
</style>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};