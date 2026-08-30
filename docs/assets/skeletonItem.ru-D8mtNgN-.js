import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Отдельный элемент скелетона, используемый для создания пользовательских заглушек загрузки, текстовых строк, контейнеров или рамок внутри компонента Skeleton.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Настраиваемые стили заглушек (text, textVariant, background, backgroundVariant, border, borderVariant)`}),`
`,(0,c.jsxs)(t.li,{children:[`Генератор случайного текста с настраиваемой длиной или диапазоном длин `,(0,c.jsx)(t.code,{children:`[min, max]`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка статического текста через `,(0,c.jsx)(t.code,{children:`label`}),` или переопределение через слот по умолчанию`]}),`
`,(0,c.jsxs)(t.li,{children:[`Гибкая настройка HTML-тега (`,(0,c.jsx)(t.code,{children:`tag`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<Skeleton :active="isLoading">
  <!-- Текстовая строка скелетона -->
  <SkeletonItem text />

  <!-- Текстовая строка со случайной длиной от 4 до 10 слов -->
  <SkeletonItem text :length="[4, 10]" />

  <!-- Контейнер скелетона с фоновым токеном -->
  <SkeletonItem background style="width: 100px; height: 100px;" />
</Skeleton>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`SkeletonItem предоставляет базовые строительные блоки для создания уникальных заглушек загрузки во время ожидания данных.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};