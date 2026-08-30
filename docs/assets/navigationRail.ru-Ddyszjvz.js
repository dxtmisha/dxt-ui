import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент вертикальной панели навигации (Navigation Rail) для основных сайдбаров, мини-панелей и навигационных меню веб-приложений.`}),`
`,(0,c.jsx)(t.p,{children:`NavigationRail отображает варианты вертикальной навигации для приложений. Поддерживает навигацию с клавиатуры, фокус на элементах, отслеживание выбора, иерархические меню, разделители, настраиваемые атрибуты элементов и полный набор ARIA-ролей доступности.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Компактный вертикальный макет для сайдбаров и навигационных панелей`}),`
`,(0,c.jsx)(t.li,{children:`Рендеринг иерархических данных с элементами и вложенными меню`}),`
`,(0,c.jsx)(t.li,{children:`Навигация с клавиатуры (стрелки, Enter, Пробел) и управление фокусом`}),`
`,(0,c.jsxs)(t.li,{children:[`Отслеживание состояния выбора (`,(0,c.jsx)(t.code,{children:`v-model:selected`}),` или `,(0,c.jsx)(t.code,{children:`selected`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Разделители секций и настраиваемые атрибуты элементов`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка доступности с ARIA-атрибутами`}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка режима внешнего управления (`,(0,c.jsx)(t.code,{children:`control`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типовые сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Основная панель навигации в десктопных веб-приложениях`}),`
`,(0,c.jsx)(t.li,{children:`Компактный сайдбар с иконками и подписями в адаптивных интерфейсах`}),`
`,(0,c.jsx)(t.li,{children:`Многоуровневые панели настроек и рабочих пространств`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<NavigationRail
  v-model:selected="selected"
  :list="[
    { label: 'Главная', value: 'home', icon: 'home' },
    { label: 'Панель управления', value: 'dashboard', icon: 'dashboard' },
    { label: 'Настройки', value: 'settings', icon: 'settings' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};