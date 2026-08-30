import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания интерактивных элементов списков с гибкой структурой контента и множественными областями отображения.`}),`
`,(0,c.jsx)(t.p,{children:`ListItem обеспечивает единообразное представление элементов в списках, меню и навигационных структурах. Компонент поддерживает метки, описания, иконки, значки состояния, интерактивные состояния (фокус, выбор, отключение), загрузку с прогрессом и скелетоном, а также эффект пульсации для улучшенной обратной связи.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Множественные области контента (метка, описание, префикс, суффикс, заголовок)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок с гибким позиционированием и выравниванием`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция значков для индикаторов статуса`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные состояния (фокус, выбранный, отключенный, только чтение)`}),`
`,(0,c.jsx)(t.li,{children:`Состояния загрузки с прогрессом и скелетоном`}),`
`,(0,c.jsx)(t.li,{children:`Эффект пульсации для визуальной обратной связи`}),`
`,(0,c.jsx)(t.li,{children:`Гибкие варианты тегов (button, link, div, span)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка доступности`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Элементы списков и меню навигации`}),`
`,(0,c.jsx)(t.li,{children:`Пункты настроек и конфигурации`}),`
`,(0,c.jsx)(t.li,{children:`Списки с множественным выбором`}),`
`,(0,c.jsx)(t.li,{children:`Контактные списки и каталоги`}),`
`,(0,c.jsx)(t.li,{children:`Мобильные интерфейсы и action lists`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ text: 'Элемент списка 1', value: '1', selected: false },
{ text: 'Элемент списка 2', value: '2', selected: true },
{ text: 'Элемент списка 3', value: '3', selected: false }
])

const handleClick = (item) => {
item.selected = !item.selected
console.log('Элемент выбран:', item.text)
}
<\/script>

<template>
<List>
  <ListItem
    v-for="item in items"
    :key="item.value"
    :text="item.text"
    :selected="item.selected"
    @click="handleClick(item)"
  >
    <template #prefix>
      <Icon name="check" v-if="item.selected" />
    </template>
  </ListItem>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};