import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для динамического переключения контента на основе контекста области (area).`}),`
`,(0,c.jsx)(t.p,{children:`Area выступает в роли умного переключателя слотов. Он получает текущее значение области из контекста внедрения или использует значение по умолчанию. Затем компонент отображает тот слот, имя которого совпадает с текущим значением области. Если подходящий слот не найден, отображается слот по умолчанию.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматический выбор слота на основе внедренного значения области`}),`
`,(0,c.jsxs)(t.li,{children:[`Возможность указания области по умолчанию через свойство `,(0,c.jsx)(t.code,{children:`areaDefault`})]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка вложенных областей и наследования контекста`}),`
`,(0,c.jsx)(t.li,{children:`Плавная интеграция в сложные макеты (например, Window)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Создание динамических шапок и подвалов`}),`
`,(0,c.jsx)(t.li,{children:`Адаптация контента в зависимости от места размещения компонента`}),`
`,(0,c.jsx)(t.li,{children:`Организация сложных макетов с динамическими зонами контента`}),`
`,(0,c.jsx)(t.li,{children:`Реализация слотов расширения в базовых компонентах`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Area area-default="header">
  <template #header>
    Контент для шапки
  </template>
  <template #footer>
    Контент для подвала
  </template>
  <template #default>
    Контент по умолчанию
  </template>
</Area>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Area является важным инструментом для создания гибких и расширяемых интерфейсов, позволяя компонентам реагировать на их окружение.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};