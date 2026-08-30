import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Раскрывающийся контейнер для организации контента с плавными анимациями открытия и закрытия, упрощающий структурирование информации в интерфейсе.`}),`
`,(0,c.jsx)(t.p,{children:`Accordion позволяет создавать раскрывающиеся секции с автоматическими анимациями, интерактивным заголовком и возможностью управления через v-model. Компонент поддерживает настройку отступов, визуальных разделителей и кастомизацию содержимого через слоты.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Плавные анимации раскрытия и сворачивания`}),`
`,(0,c.jsx)(t.li,{children:`Заголовок с меткой, описанием и иконками`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием через v-model:open`}),`
`,(0,c.jsx)(t.li,{children:`Программное управление (toggle, toOpen, toClose)`}),`
`,(0,c.jsx)(t.li,{children:`Настройка внутренних отступов (padding)`}),`
`,(0,c.jsx)(t.li,{children:`Визуальный разделитель между секциями`}),`
`,(0,c.jsx)(t.li,{children:`Кастомизация через слоты head и default`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`FAQ секции`}),`
`,(0,c.jsx)(t.li,{children:`Панели настроек`}),`
`,(0,c.jsx)(t.li,{children:`Фильтры товаров`}),`
`,(0,c.jsx)(t.li,{children:`Информационные блоки`}),`
`,(0,c.jsx)(t.li,{children:`Меню с подразделами`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Базовый аккордеон -->
<Accordion label="Вопрос 1">
  <p>Ответ на вопрос.</p>
</Accordion>

<!-- С управлением состоянием -->
<Accordion
  v-model:open="isOpen"
  label="Настройки"
  icon="settings"
>
  <p>Содержимое настроек.</p>
</Accordion>

<!-- С кастомным заголовком -->
<Accordion>
  <template #head>
    <div>Свой заголовок</div>
  </template>
  <template #default>
    <p>Содержимое секции.</p>
  </template>
</Accordion>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Accordion — компонент для создания раскрывающихся секций с поддержкой анимаций, управления состоянием и гибкой кастомизации.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};