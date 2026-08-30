import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для управления рендерингом контента исключительно на стороне клиента.`}),`
`,(0,c.jsx)(t.p,{children:`ClientOnly является важным инструментом для обеспечения совместимости с Server-Side Rendering (SSR) и Static Site Generation (SSG). Он предотвращает попытки выполнения кода, зависящего от браузерных API (например, window или document), на стороне сервера, тем самым избегая ошибок гидратации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отложенный рендеринг до момента монтирования в браузере`}),`
`,(0,c.jsx)(t.li,{children:`Предотвращение ошибок рассогласования гидратации (hydration mismatch)`}),`
`,(0,c.jsx)(t.li,{children:`Возможность принудительного включения/выключения через свойство clientOnly`}),`
`,(0,c.jsx)(t.li,{children:`Легкая интеграция любых сторонних библиотек, не поддерживающих SSR`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Интерактивные карты и графики`}),`
`,(0,c.jsx)(t.li,{children:`Компоненты, использующие localStorage или другие Web API`}),`
`,(0,c.jsx)(t.li,{children:`Сторонние виджеты, требующие наличия объекта window`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизация производительности в средах SSR`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ClientOnly } from 'your-library'
<\/script>

<template>
<ClientOnly>
  <!-- Этот контент появится только в браузере -->
  <MyBrowserSpecificComponent />
</ClientOnly>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`ClientOnly — незаменимый помощник при разработке современных изоморфных приложений.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};