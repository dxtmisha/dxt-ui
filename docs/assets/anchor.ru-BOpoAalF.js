import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания якорных ссылок с плавной прокруткой и возможностью копирования URL.`}),`
`,(0,c.jsx)(t.p,{children:`Anchor предоставляет интерактивные якорные ссылки для навигации по разделам страницы. Компонент автоматически обрабатывает клики, обновляет URL-адрес, поддерживает плавную прокрутку с настраиваемым отступом и интегрируется с Tooltip для отображения уведомлений при копировании. Может работать как в режиме обычной навигации, так и в режиме копирования ссылки в буфер обмена.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Плавная прокрутка к целевому элементу с настройкой параметров`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая навигация при загрузке страницы по хешу в URL`}),`
`,(0,c.jsx)(t.li,{children:`Режим копирования полной ссылки в буфер обмена`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с Tooltip для уведомлений о копировании`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок для визуального оформления`}),`
`,(0,c.jsx)(t.li,{children:`Скрытые якоря для создания невидимых точек навигации`}),`
`,(0,c.jsx)(t.li,{children:`Обновление URL через history API без перезагрузки страницы`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Навигация по разделам документации и длинных страниц`}),`
`,(0,c.jsx)(t.li,{children:`Якоря для заголовков с кнопкой копирования ссылки`}),`
`,(0,c.jsx)(t.li,{children:`Оглавление и меню навигации по странице`}),`
`,(0,c.jsx)(t.li,{children:`Кнопки "Поделиться ссылкой на раздел"`}),`
`,(0,c.jsx)(t.li,{children:`Создание невидимых якорных точек для программной навигации`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Обычный якорь -->
<Anchor name="section-1" text="Перейти к разделу" />

<!-- С копированием -->
<Anchor name="section-2" text="Скопировать ссылку" isCopy />

<!-- Скрытый якорь -->
<Anchor name="section-3" hide />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};