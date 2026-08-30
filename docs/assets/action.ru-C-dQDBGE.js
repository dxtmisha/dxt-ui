import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`режим-действий`,children:`Режим действий`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`action`}),`, `,(0,c.jsx)(t.code,{children:`actionLabel`}),`, `,(0,c.jsx)(t.code,{children:`actionDescription`}),` и `,(0,c.jsx)(t.code,{children:`actionBars`}),` предназначены для переключения Bars в контекстный режим действий при выборе элементов или выполнении массовых операций.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action`}),` — активирует режим действий с полной заменой контента`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionLabel`}),` — основной заголовок для режима действий (обычно счётчик выбранных элементов)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionDescription`}),` — дополнительное описание или инструкция для текущего действия`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionBars`}),` — массив кнопок действий для операций над выбранными элементами`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: когда `,(0,c.jsx)(t.code,{children:`action = true`}),`, компонент заменяет стандартный контент (label, description, bars) на варианты для действий (actionLabel, actionDescription, actionBars). Кнопка назад автоматически трансформируется в кнопку выхода (iconClose) для возврата из режима действий. Все общие атрибуты кнопок из `,(0,c.jsx)(t.code,{children:`buttonAttrs`}),` применяются к `,(0,c.jsx)(t.code,{children:`actionBars`}),`, сохраняя согласованную стилизацию. Режим действий обычно контролируется внешним состоянием выбора и используется для временных фокусированных операций с возможностью выхода обратно в обычный вид.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const selectedItems = ref([])
const actionMode = computed(() => selectedItems.value.length > 0)

const handleSelect = (id) => {
const index = selectedItems.value.indexOf(id)
if (index > -1) {
  selectedItems.value.splice(index, 1)
} else {
  selectedItems.value.push(id)
}
}

const handleShare = () => {
console.log('Поделиться выбранными:', selectedItems.value)
}

const handleDelete = () => {
console.log('Удалить выбранные:', selectedItems.value)
selectedItems.value = []
}
<\/script>

<template>
<!-- Стандартный режим с обычной навигацией -->
<Bars
  :action="actionMode"
  label="Контакты"
  description="Управление контактами"
  icon-back="arrow_back"
  icon-close="close"
  :bars="[
    { icon: 'add', label: 'Добавить' },
    { icon: 'search', label: 'Поиск' }
  ]"
  :action-label="\`Выбрано: \${selectedItems.length}\`"
  action-description="Выберите действие"
  :action-bars="[
    { icon: 'share', onClick: handleShare },
    { icon: 'delete', onClick: handleDelete }
  ]"
/>

<!-- Режим действий всегда активен -->
<Bars
  action
  action-label="Выбрано 5 элементов"
  action-description="Выберите действие"
  icon-close="close"
  :action-bars="[
    { icon: 'edit', label: 'Изменить' },
    { icon: 'archive', label: 'Архивировать' },
    { icon: 'delete', label: 'Удалить' }
  ]"
/>

<!-- С v-model для двусторонней привязки -->
<Bars
  v-model:action="actionMode"
  label="Сообщения"
  :action-label="\`Сообщений: \${selectedItems.length}\`"
  :action-bars="[
    { icon: 'mark_email_read' },
    { icon: 'delete' }
  ]"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};