import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания анимированных заглушек интерфейса во время загрузки контента.`}),`
`,(0,c.jsxs)(t.p,{children:[`Skeleton обеспечивает плавный переход между состоянием загрузки и отображением реального контента. Компонент автоматически управляет видимостью дочерних элементов через свойство `,(0,c.jsx)(t.code,{children:`active`}),` и поддерживает систему CSS-классов для создания различных типов заглушек.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое управление видимостью контента`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка специальных CSS-классов для заглушек`}),`
`,(0,c.jsxs)(t.li,{children:[`Работа с компонентами через флаг `,(0,c.jsx)(t.code,{children:`isSkeleton`})]}),`
`,(0,c.jsx)(t.li,{children:`Гибкая настройка типов заглушек (текст, фон, границы)`}),`
`,(0,c.jsx)(t.li,{children:`Анимированные эффекты загрузки`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Заглушки карточек товаров и пользователей`}),`
`,(0,c.jsx)(t.li,{children:`Скелетоны списков и таблиц`}),`
`,(0,c.jsx)(t.li,{children:`Заглушки изображений и аватаров`}),`
`,(0,c.jsx)(t.li,{children:`Текстовые блоки во время загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Сложные формы с множественными полями`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isLoading = ref(true)

setTimeout(() => {
isLoading.value = false
}, 2000)
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Заглушки, видимые во время загрузки -->
  <div class="skeleton__background avatar"></div>
  <div class="skeleton__text title"></div>
  <div class="skeleton__textVariant subtitle"></div>

  <!-- Реальный контент -->
  <img src="/avatar.jpg" alt="Аватар пользователя" />
  <h3>{{ user.name }}</h3>
  <p>{{ user.description }}</p>
</Skeleton>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};