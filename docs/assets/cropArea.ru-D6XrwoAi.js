import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Интерактивный компонент прямоугольной области кадрирования и рамки для манипуляции графическим и медиа-контентом.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`CropArea`}),` накладывает интерактивную маску кадрирования и рамку с маркерами изменения размера поверх изображений, холстов или медиа-контейнеров. Компонент вычисляет отступы координат в процентах (`,(0,c.jsx)(t.code,{children:`[top, right, bottom, left]`}),`) относительно родительского элемента и автоматически синхронизирует их через пользовательские CSS-переменные и реактивные события модели Vue. Компонент поддерживает 8 направлений изменения размера, перемещение всей области кадрирования за центральную зону, контроль минимального размера сторон и выборочное отключение отдельных направлений.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`8 маркеров изменения размера (4 края: top, right, bottom, left; 4 угла: top-left, top-right, bottom-left, bottom-right)`}),`
`,(0,c.jsxs)(t.li,{children:[`Перемещение всей рамки кадрирования за центральную область (`,(0,c.jsx)(t.code,{children:`center`}),`) без изменения ее размеров`]}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматическая привязка пользовательских CSS-переменных (`,(0,c.jsx)(t.code,{children:`--sys-crop-top`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-right`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-bottom`}),`, `,(0,c.jsx)(t.code,{children:`--sys-crop-left`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Формат массива координат в процентах (`,(0,c.jsx)(t.code,{children:`[сверху, справа, снизу, слева]`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ограничение минимального размера сторон через свойство `,(0,c.jsx)(t.code,{children:`min`}),` (по умолчанию: 8%)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выборочное отключение направлений (`,(0,c.jsx)(t.code,{children:`disabledTop`}),`, `,(0,c.jsx)(t.code,{children:`disabledRight`}),`, `,(0,c.jsx)(t.code,{children:`disabledBottom`}),`, `,(0,c.jsx)(t.code,{children:`disabledLeft`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматическая блокировка выделения текста на `,(0,c.jsx)(t.code,{children:`document.body`}),` во время перетаскивания`]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка событий мыши и сенсорных экранов с удержанием в границах контейнера`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Диалоговые окна кадрирования аватаров и профильных фотографий`}),`
`,(0,c.jsx)(t.li,{children:`Редакторы изображений и генераторы миниатюр`}),`
`,(0,c.jsx)(t.li,{children:`Инструменты сканирования документов и обрезки фотографий`}),`
`,(0,c.jsx)(t.li,{children:`Настройка областей фокусировки и пользовательских видовых экранов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cropCoordinates = ref([10, 15, 10, 15])
<\/script>

<template>
<div style="position: relative; width: 400px; height: 300px; overflow: hidden;">
  <img
    src="/demo-image.jpg"
    style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"
    alt="Превью"
  />
  <CropArea v-model:value="cropCoordinates" />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};