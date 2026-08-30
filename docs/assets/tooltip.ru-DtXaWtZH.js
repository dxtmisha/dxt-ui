import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения всплывающих подсказок, предоставляющих дополнительную информацию об элементе при наведении или фокусировке.`}),`
`,(0,c.jsx)(t.p,{children:`Tooltip автоматически позиционируется относительно целевого элемента и может содержать текстовое описание или произвольный контент. Компонент поддерживает настройку задержек появления и скрытия, а также может быть оснащен указателем (стрелкой) для визуальной связи.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое позиционирование`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка указателя (стрелки)`}),`
`,(0,c.jsx)(t.li,{children:`Настройка задержек (delay, delayHide)`}),`
`,(0,c.jsx)(t.li,{children:`Управление видимостью через свойства или события`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для кастомизации контента`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивность и доступность`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Пояснения к иконкам и кнопкам`}),`
`,(0,c.jsx)(t.li,{children:`Отображение полного текста для сокращенных элементов`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные подсказки для полей ввода`}),`
`,(0,c.jsx)(t.li,{children:`Дополнительная информация в интерфейсе`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { Tooltip } from 'dxt-ui'
<\/script>

<template>
<div class="p-4">
  <Tooltip label="Подсказка">
    <button>Наведи на меня</button>
  </Tooltip>
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};