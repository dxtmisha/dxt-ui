import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Составной компонент ввода изображений, объединяющий загрузку через Drag and Drop, автоматическое клиентское масштабирование и интерактивное кадрирование.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`InputImage`}),` объединяет полный цикл выбора и подготовки изображения в единый элемент формы. Он включает встроенный `,(0,c.jsx)(t.code,{children:`Dropzone`}),` для удобного перетаскивания файлов или выбора через системный диалог, проверяет формат, автоматически масштабирует изображение до заданного `,(0,c.jsx)(t.code,{children:`maxPixel`}),` и отображает интерактивную область `,(0,c.jsx)(t.code,{children:`ImageCrop`}),` для процентного кадрирования. Панель быстрых действий позволяет легко заменить или сбросить текущее изображение.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Drag-and-Drop и диалог выбора:`}),` Встроенный `,(0,c.jsx)(t.code,{children:`Dropzone`}),` с поддержкой перетаскивания и открытия диалога выбора файла`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое масштабирование:`}),` Клиентская обработка и уменьшение больших изображений до `,(0,c.jsx)(t.code,{children:`maxPixel`}),` (по умолчанию: 1280px)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интерактивное кадрирование:`}),` Встроенный `,(0,c.jsx)(t.code,{children:`ImageCrop`}),` с маркерами изменения размера по 8 направлениям и центральной зоной перемещения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Панель быстрых действий:`}),` Накладываемые кнопки для быстрой замены изображения и его очистки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Двусторонняя привязка данных:`}),` Поддержка `,(0,c.jsx)(t.code,{children:`v-model`}),` для структурированного значения `,(0,c.jsx)(t.code,{children:`{ value?: string, crop?: CropAreaCoordinator }`}),` или обычной строки URL`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с полями формы:`}),` Встроенная поддержка текстовой метки, счетчика символов, ошибок валидации и подсказок`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Программный API:`}),` Экспорт методов `,(0,c.jsx)(t.code,{children:`open()`}),` для открытия диалога выбора файла и `,(0,c.jsx)(t.code,{children:`clear()`}),` для сброса изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Доступность и состояния:`}),` Атрибуты ARIA, поддержка управления с клавиатуры и полная поддержка состояний `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`readonly`}),` и `,(0,c.jsx)(t.code,{children:`isSkeleton`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Формы загрузки и редактирования аватаров пользователей`}),`
`,(0,c.jsx)(t.li,{children:`Инструменты обрезки фотографий и подготовки баннеров`}),`
`,(0,c.jsx)(t.li,{children:`Загрузка изображений товаров в интернет-магазинах с фиксированным соотношением сторон`}),`
`,(0,c.jsx)(t.li,{children:`Панели управления медиа-контентом и формы загрузки файлов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const image = ref({
value: '/demo-photo.jpg',
crop: [10, 10, 10, 10]
})
<\/script>

<template>
<InputImage
  label="Фотография профиля"
  helper-message="PNG, JPG до 10MB"
  :max-size="1280"
  v-model="image"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};