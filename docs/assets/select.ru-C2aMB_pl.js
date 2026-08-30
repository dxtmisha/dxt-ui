import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания выпадающих списков выбора с поддержкой поиска, фильтрации, множественного выбора и валидации.`}),`
`,(0,c.jsx)(t.p,{children:`Select представляет собой полнофункциональный элемент выбора, объединяющий компоненты Field, Menu, SelectValue и Input для создания продвинутого интерфейса выбора. Компонент автоматически отображает выбранные значения в виде текста или чипов (для множественного выбора), предоставляет встроенный поиск и фильтрацию опций, поддерживает AJAX загрузку данных с кешированием. Интегрируется со всеми возможностями компонента Field, включая валидацию, подписи, счётчики и сообщения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Одиночный или множественный выбор значений`}),`
`,(0,c.jsx)(t.li,{children:`Встроенный поиск и фильтрация опций в реальном времени`}),`
`,(0,c.jsx)(t.li,{children:`AJAX загрузка данных с поддержкой кеширования`}),`
`,(0,c.jsx)(t.li,{children:`Режим редактирования выбранного значения (editValue)`}),`
`,(0,c.jsx)(t.li,{children:`Валидация со стандартными функциями Field`}),`
`,(0,c.jsx)(t.li,{children:`Клавиатурная навигация и поддержка accessibility`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое отображение выбранных значений (текст или чипы)`}),`
`,(0,c.jsx)(t.li,{children:`Ограничение максимального количества выбранных элементов`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок для стрелки выпадающего списка и поиска`}),`
`,(0,c.jsx)(t.li,{children:`Управление автозакрытием для множественного выбора`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с компонентами Field, Menu, SelectValue, Input`}),`
`,(0,c.jsx)(t.li,{children:`Кастомизация через слоты и атрибуты`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивный дизайн для мобильных устройств`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выбор значений из предопределённого списка опций`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация и поиск в больших списках данных`}),`
`,(0,c.jsx)(t.li,{children:`Множественный выбор элементов с ограничением количества`}),`
`,(0,c.jsx)(t.li,{children:`Выбор с AJAX загрузкой данных с сервера`}),`
`,(0,c.jsx)(t.li,{children:`Формы с валидацией выбранных значений`}),`
`,(0,c.jsx)(t.li,{children:`Комбо-боксы с возможностью редактирования`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedCountry = ref('ru')
const selectedLanguages = ref(['js', 'ts'])

const countries = [
{ label: 'Россия', value: 'ru' },
{ label: 'США', value: 'us' },
{ label: 'Германия', value: 'de' }
]

const languages = [
{ label: 'JavaScript', value: 'js' },
{ label: 'TypeScript', value: 'ts' },
{ label: 'Python', value: 'py' }
]
<\/script>

<template>
<!-- Простой выбор -->
<Select
  v-model="selectedCountry"
  label="Страна"
  placeholder="Выберите страну"
  :option="countries"
/>

<!-- Множественный выбор -->
<Select
  v-model="selectedLanguages"
  label="Языки программирования"
  :multiple="true"
  :max="3"
  helper-message="Выберите до 3 языков"
  :option="languages"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};