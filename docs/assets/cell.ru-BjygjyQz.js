import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и интерактивными действиями в списках и элементах интерфейса.`}),`
`,(0,c.jsx)(t.p,{children:`Cell обеспечивает единообразное представление информационных блоков с поддержкой текстовой иерархии (метка, описание, подпись), интерактивных состояний, иконок и индикаторов прогресса. Компонент интегрирует эффекты ripple, состояния скелетонов и гибкое позиционирование контента для создания современных интерфейсных списков.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Структурированная иерархия контента (метка, описание, подпись)`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные состояния (focus, selected, disabled, readonly)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка иконок и индикаторов прогресса`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция эффекта ripple для тактильной обратной связи`}),`
`,(0,c.jsx)(t.li,{children:`Система скелетонов для состояний загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемые разделители и динамическое поведение`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая система слотов для пользовательского контента`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизирован для списковых и меню интерфейсов`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Элементы списков в меню навигации и настройках`}),`
`,(0,c.jsx)(t.li,{children:`Карточки контактов и профильные записи`}),`
`,(0,c.jsx)(t.li,{children:`Списки действий и выбора элементов`}),`
`,(0,c.jsx)(t.li,{children:`Панели настроек и элементы конфигурации`}),`
`,(0,c.jsx)(t.li,{children:`Таблицы данных и структурированные информационные блоки`}),`
`,(0,c.jsx)(t.li,{children:`Компоненты интерфейса mobile-first`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(false)
const loading = ref(false)

const handleClick = () => {
console.log('Ячейка нажата')
selected.value = !selected.value
}
<\/script>

<template>
<Cell
  label="Настройки уведомлений"
  description="Управление способами получения уведомлений"
  caption="Обновлено сегодня"
  icon="notifications"
  :selected="selected"
  :skeleton="loading"
  @click="handleClick"
>
  <template #trailing>
    <Icon name="chevron_right" />
  </template>
</Cell>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Cell разработан как универсальный строительный блок для создания единообразных списковых интерфейсов с богатым контентом и интерактивными состояниями.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};