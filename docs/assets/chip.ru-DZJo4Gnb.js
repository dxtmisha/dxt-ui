import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компактный интерактивный элемент для представления ввода, атрибутов, действий и фильтров в пользовательском интерфейсе.`}),`
`,(0,c.jsx)(t.p,{children:`Chip предоставляет унифицированный компонент для отображения дискретной информации в компактном формате с поддержкой состояний выбора, иконок, адаптивного поведения и различных визуальных вариантов (input, assistive). Наследует функциональность Button, добавляя специализированную стилизацию и семантику для работы с тегами, фильтрами, статусами и пользовательским вводом. Обеспечивает согласованный API для создания интерактивных чипов с поддержкой кликов, состояния disabled/selected и интеграцией иконок.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Наследование от Button (иконки, прогресс, события клика)`}),`
`,(0,c.jsx)(t.li,{children:`Визуальные варианты (input, assistive) для разных контекстов`}),`
`,(0,c.jsx)(t.li,{children:`Управление состояниями (selected, disabled, focus, readonly)`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивное поведение (adaptive, container) для разных размеров экрана`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемое выравнивание текста (textAlign: left/center/right)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок (icon, iconTrailing) и прогресс-индикатора`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция скелетон-состояния для загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Передача value и detail для идентификации элементов`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Теги и метки для категоризации контента`}),`
`,(0,c.jsx)(t.li,{children:`Фильтры в поисковых интерфейсах и каталогах`}),`
`,(0,c.jsx)(t.li,{children:`Отображение введенных пользователем данных (email, контакты)`}),`
`,(0,c.jsx)(t.li,{children:`Статусы и индикаторы состояния`}),`
`,(0,c.jsx)(t.li,{children:`Вспомогательные элементы (подсказки, рекомендации)`}),`
`,(0,c.jsx)(t.li,{children:`Выбираемые опции в формах и списках`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedFilters = ref(['active', 'verified'])
const tags = ref(['Vue', 'TypeScript', 'UI'])

const toggleFilter = (filter) => {
const index = selectedFilters.value.indexOf(filter)
if (index > -1) {
  selectedFilters.value.splice(index, 1)
} else {
  selectedFilters.value.push(filter)
}
}
<\/script>

<template>
<!-- Базовый чип -->
<Chip>Стандарт</Chip>

<!-- Input чип для пользовательского ввода -->
<Chip input icon="person">Контакт</Chip>

<!-- Assistive чип для подсказок -->
<Chip assistive icon="lightbulb">Рекомендация</Chip>

<!-- Фильтры с состоянием выбора -->
<Chip
  v-for="filter in ['active', 'pending', 'verified']"
  :key="filter"
  :selected="selectedFilters.includes(filter)"
  @click="toggleFilter(filter)"
>
  {{ filter }}
</Chip>

<!-- С передачей данных -->
<Chip
  value="filter-tag"
  :detail="{ category: 'status', type: 'active' }"
  @click="handleChipClick"
>
  Активный
</Chip>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Chip наследует всю функциональность Button, включая события, иконки и прогресс-индикаторы, добавляя специализированную стилизацию для компактных элементов интерфейса.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};