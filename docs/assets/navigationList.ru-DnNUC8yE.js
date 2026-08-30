import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Специализированный навигационный список для построения сайдбаров, выпадающих меню и навигационных панелей приложения.`}),`
`,(0,c.jsx)(t.p,{children:`NavigationList является расширением компонента List, оптимизированным для навигационных меню. Он использует элементы NavigationItem и предоставляет иерархическую структуру, поддержку клавиатурной навигации, поиск в реальном времени с подсветкой результатов, выравнивание по осям (вертикальное/горизонтальное) и поддержку облегченного режима рендеринга (lite mode).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Наследуемое ядро управления списками от компонента List`}),`
`,(0,c.jsx)(t.li,{children:`Рендеринг специализированных навигационных элементов NavigationItem`}),`
`,(0,c.jsx)(t.li,{children:`Полноценная навигация с клавиатуры со стрелками и горячими клавишами`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация поиска в реальном времени и подсветка совпадений`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иерархических структур с группами и подменю`}),`
`,(0,c.jsx)(t.li,{children:`Ориентация по осям (вертикальная и горизонтальная)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая обработка разделительных линий`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизированный облегченный режим (lite mode) для больших списков`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Главное навигационное меню приложения в сайдбаре`}),`
`,(0,c.jsx)(t.li,{children:`Выпадающие навигационные меню и списки разделов`}),`
`,(0,c.jsx)(t.li,{children:`Панели быстрого доступа и переключатели разделов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<NavigationList
  :list="[
    { label: 'Панель управления', value: 'dashboard', icon: 'dashboard' },
    { label: 'Аналитика', value: 'analytics', icon: 'insights' },
    { label: 'Настройки', value: 'settings', icon: 'settings' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};