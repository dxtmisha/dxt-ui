import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения меток полей ввода с поддержкой индикатора обязательности, счетчика символов и прогресс-индикатора.`}),`
`,(0,c.jsx)(t.p,{children:`FieldLabel предоставляет единообразное отображение подписей к полям форм, автоматически интегрируется с FieldCounter для подсчета символов и Progress для индикации загрузки. Компонент поддерживает скелетон-загрузку, настраиваемые слоты и обеспечивает согласованное визуальное оформление элементов формы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение текстовой метки для полей ввода`}),`
`,(0,c.jsx)(t.li,{children:`Индикатор обязательности поля (required marker)`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция со счетчиком символов FieldCounter`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка прогресс-индикатора Progress`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка скелетон-загрузки для состояния ожидания`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая настройка через слоты (leading, trailing)`}),`
`,(0,c.jsx)(t.li,{children:`Единообразные отступы и стили в составе форм`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Подписи к текстовым полям и textarea`}),`
`,(0,c.jsx)(t.li,{children:`Формы с обязательными полями`}),`
`,(0,c.jsx)(t.li,{children:`Поля с ограничением количества символов`}),`
`,(0,c.jsx)(t.li,{children:`Формы с индикацией процесса загрузки файлов`}),`
`,(0,c.jsx)(t.li,{children:`Динамические формы со скелетон-загрузкой`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовая метка -->
<Component label="Username" />

<!-- Обязательное поле -->
<Component label="Email" required />

<!-- С прогрессом и счетчиком -->
<Component
  label="Загрузка"
  :progress="45"
  :counter="10"
  :maxlength="100"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};