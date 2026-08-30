import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Интерактивный компонент кадрирования изображений, объединяющий отображение картинки и накладываемую область обрезки.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ImageCrop`}),` совмещает функциональность компонентов `,(0,c.jsx)(t.code,{children:`Image`}),` и `,(0,c.jsx)(t.code,{children:`CropArea`}),` в едином удобном интерфейсе. Он отображает исходное изображение (по URL, из загруженного файла или другого источника) внутри адаптивного контейнера и накладывает поверх него интерактивную рамку кадрирования с маркерами изменения размера. Координаты кадрирования представлены в виде массива процентных отступов (`,(0,c.jsx)(t.code,{children:`[сверху, справа, снизу, слева]`}),`) и синхронизируются через реактивную двустороннюю привязку `,(0,c.jsx)(t.code,{children:`v-model`}),` (или `,(0,c.jsx)(t.code,{children:`v-model:value`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Бесшовная интеграция отображения изображения и интерактивной маски кадрирования`}),`
`,(0,c.jsx)(t.li,{children:`8 направлений маркеров изменения размера (сверху, справа, снизу, слева и 4 угла)`}),`
`,(0,c.jsx)(t.li,{children:`Перемещение всей рамки кадрирования за центральную зону без изменения ее размеров`}),`
`,(0,c.jsxs)(t.li,{children:[`Двусторонняя реактивная привязка координат через `,(0,c.jsx)(t.code,{children:`v-model`}),` (`,(0,c.jsx)(t.code,{children:`[сверху, справа, снизу, слева]`}),` в процентах)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматическая передача свойств и параметров в субкомпоненты `,(0,c.jsx)(t.code,{children:`Image`}),` и `,(0,c.jsx)(t.code,{children:`CropArea`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Гибкая настройка изображения через свойства `,(0,c.jsx)(t.code,{children:`image`}),` и `,(0,c.jsx)(t.code,{children:`imageAttrs`})]}),`
`,(0,c.jsx)(t.li,{children:`Атрибуты доступности ARIA и поддержка взаимодействия мышью и на сенсорных экранах`}),`
`,(0,c.jsxs)(t.li,{children:[`Управление интерактивными состояниями: `,(0,c.jsx)(t.code,{children:`disabled`}),` для полной блокировки, `,(0,c.jsx)(t.code,{children:`readonly`}),` для фиксации границ обрезки`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Диалоговые окна загрузки и кадрирования аватаров пользователей`}),`
`,(0,c.jsx)(t.li,{children:`Инструменты настройки обложек, баннеров и миниатюр`}),`
`,(0,c.jsx)(t.li,{children:`Обрезка фотографий, выравнивание документов и выбор области фокусировки`}),`
`,(0,c.jsx)(t.li,{children:`Панели управления медиа-контентом и формы загрузки изображений`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cropCoordinates = ref([15, 20, 15, 20])
<\/script>

<template>
<div style="position: relative; width: 400px; height: 300px;">
  <ImageCrop
    image="/demo-image.jpg"
    alt="Превью профильной фотографии"
    v-model="cropCoordinates"
  />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};