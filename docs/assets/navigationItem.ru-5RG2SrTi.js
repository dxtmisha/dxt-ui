import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Специализированный элемент списка, предназначенный для использования в навигационных меню, сайдбарах и шапках приложений.`}),`
`,(0,c.jsx)(t.p,{children:`NavigationItem является расширением компонента ListItem, адаптированным для навигационных структур. Он полностью наследует функциональность ListItem (поддержка меток, описаний, иконок, значков статуса, состояний выбора и эффекта пульсации) и предоставляет оптимизированную стилизацию для элементов навигации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Наследуемая функциональность и слоты от ListItem (префикс, суффикс, метка, описание, заголовок)`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизированная визуальная стилизация элементов навигационного меню`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок с гибким позиционированием`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция значков (badges) для счетчиков уведомлений и индикаторов статуса`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные состояния (фокус, выбранный, отключенный, только чтение)`}),`
`,(0,c.jsx)(t.li,{children:`Эффект пульсации (ripple) при клике`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка навигации по ссылкам (Router/href) и тегов button, a, div`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Пункты бокового навигационного меню (Sidebar navigation)`}),`
`,(0,c.jsx)(t.li,{children:`Ссылки и элементы верхнего меню (Header menu items)`}),`
`,(0,c.jsx)(t.li,{children:`Элементы навигационных панелей и действий`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<NavigationList>
  <NavigationItem icon="home" selected>Главная</NavigationItem>
  <NavigationItem icon="settings" description="Конфигурация системы">Настройки</NavigationItem>
</NavigationList>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};