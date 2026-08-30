import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Универсальный компонент панели для заголовков приложений, панелей инструментов и контекстных панелей действий с поддержкой навигации, кнопок действий и режимов массовых операций.`}),`
`,(0,c.jsx)(t.p,{children:`Bars предоставляет комплексное решение для создания согласованных элементов интерфейса верхнего уровня со структурированным макетом для заголовков, описаний, обратной навигации и интерактивных наборов кнопок. Компонент интегрирует переключение режима действий для контекстных операций, единую конфигурацию кнопок и состояния загрузки скелетонов для создания современных заголовков приложений и панелей инструментов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Структурированная текстовая иерархия (метка и описание с динамическим обновлением)`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемая кнопка назад с навигацией и переключением иконки закрытия`}),`
`,(0,c.jsx)(t.li,{children:`Гибкие массивы кнопок (bars) для основных действий справа`}),`
`,(0,c.jsx)(t.li,{children:`Режим действий с отдельным контентом и набором кнопок для массовых операций`}),`
`,(0,c.jsx)(t.li,{children:`Двусторонняя привязка (v-model:action) для синхронизации состояния`}),`
`,(0,c.jsx)(t.li,{children:`Единые атрибуты кнопок (buttonAttrs) для согласованной стилизации`}),`
`,(0,c.jsx)(t.li,{children:`Обработка событий для взаимодействий кликов и навигации`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция системы скелетонов для состояний загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Кастомизация иконок для кнопок назад и закрытия`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Заголовки экранов приложения с навигацией и действиями`}),`
`,(0,c.jsx)(t.li,{children:`Панели инструментов для разделов и страниц`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные панели действий для операций с выбранными элементами`}),`
`,(0,c.jsx)(t.li,{children:`Заголовки поиска с элементами управления фильтрами и сортировкой`}),`
`,(0,c.jsx)(t.li,{children:`Экраны настроек с обратной навигацией`}),`
`,(0,c.jsx)(t.li,{children:`Заголовки списков с поддержкой массовых действий`}),`
`,(0,c.jsx)(t.li,{children:`Интерфейсы множественного выбора с режимом действий`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const actionMode = ref(false)
const selectedCount = ref(0)

const handleSearch = () => {
console.log('Нажат поиск')
}

const handleFilter = () => {
console.log('Нажат фильтр')
}

const handleDelete = () => {
console.log('Удалить выбранные элементы')
actionMode.value = false
selectedCount.value = 0
}
<\/script>

<template>
<div class="app-layout">
  <!-- Стандартный заголовок с навигацией и действиями -->
  <Bars
    label="Сообщения"
    description="Ваши беседы"
    icon-back="arrow_back"
    :bars="[
      { icon: 'search', onClick: handleSearch },
      { icon: 'filter_list', onClick: handleFilter },
      { icon: 'more_vert' }
    ]"
  />

  <!-- Заголовок с режимом действий для массовых операций -->
  <Bars
    v-model:action="actionMode"
    label="Контакты"
    description="Управление контактами"
    :action-label="\`Выбрано: \${selectedCount}\`"
    action-description="Выберите действие"
    icon-back="arrow_back"
    icon-close="close"
    :bars="[
      { icon: 'add' },
      { icon: 'search' }
    ]"
    :action-bars="[
      { icon: 'share' },
      { icon: 'delete', onClick: handleDelete }
    ]"
  />

  <!-- Панель инструментов с пользовательскими атрибутами кнопок -->
  <Bars
    label="Настройки"
    :button-attrs="{ secondary: true }"
    :bars="[
      { icon: 'sync', label: 'Синхр.' },
      { icon: 'info', label: 'Инфо' }
    ]"
  />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Bars разработан как UI-компонент верхнего уровня для создания согласованных заголовков приложений, панелей инструментов и контекстных интерфейсов действий с комплексной поддержкой навигации, управления действиями и массовых операций.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};