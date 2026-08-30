import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`Компонент `,(0,c.jsx)(t.code,{children:`Dropzone`}),` предоставляет доступную интерактивную область для загрузки файлов путем перетаскивания (Drag and Drop) или открытия стандартного диалога выбора файлов. Он объединяет вспомогательные классы для работы с элементом ввода инпута, событиями перетаскивания, иконками, метками, описанием и двусторонней привязкой `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Интерактивная область сброса файлов (Drag and Drop)`}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка одиночного и множественного выбора файлов (свойство `,(0,c.jsx)(t.code,{children:`multiple`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Фильтрация типов файлов с помощью свойства `,(0,c.jsx)(t.code,{children:`accept`})]}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемые под-элементы и слоты для иконки, метки и описания`}),`
`,(0,c.jsxs)(t.li,{children:[`Полная доступность и поддержка ARIA-атрибутов (`,(0,c.jsx)(t.code,{children:`aria-disabled`}),`, `,(0,c.jsx)(t.code,{children:`aria-labelledby`}),`, `,(0,c.jsx)(t.code,{children:`aria-describedby`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Экспонируемые методы `,(0,c.jsx)(t.code,{children:`open()`}),` и `,(0,c.jsx)(t.code,{children:`clear()`}),` для программного управления`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типовые сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поля прикрепления файлов в формах`}),`
`,(0,c.jsx)(t.li,{children:`Области загрузки изображений и документов`}),`
`,(0,c.jsx)(t.li,{children:`Панели импорта файлов в систему`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Dropzone
  accept="image/*"
  label="Перетащите файлы сюда или нажмите для выбора"
  description="PNG, JPG или WebP до 5 МБ"
  icon="upload"
  @drop="handleDrop"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Dropzone обеспечивает удобный интерфейс загрузки файлов методом перетаскивания с соблюдением всех стандартов доступности и архитектуры библиотеки.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};