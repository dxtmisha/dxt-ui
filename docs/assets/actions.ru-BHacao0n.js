import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Контейнер для организации кнопок действий с поддержкой основной и вторичной группировки, различных режимов выравнивания и адаптивного поведения.`}),`
`,(0,c.jsx)(t.p,{children:`Actions централизует управление расположением интерактивных кнопок в диалогах, формах и панелях, автоматически распределяет пространство между группами, поддерживает гибкую адаптацию к доступному месту и предоставляет единый API для создания консистентных наборов действий. Является фундаментальным компонентом для построения пользовательских интерфейсов с четкой иерархией кнопок.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Группировка кнопок (основная группа через list, вторичная через listSecondary)`}),`
`,(0,c.jsx)(t.li,{children:`Управление выравниванием (left, right, center, block, none)`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивное поведение через свойство flexible (adaptive/container)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматический спейсер между группами кнопок`}),`
`,(0,c.jsx)(t.li,{children:`Раздельная настройка атрибутов (buttonAttrs, buttonSecondaryAttrs)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слотов для кастомного контента (default, secondary)`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с компонентом Button со всеми его возможностями`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая раскладка с автоматическим переходом в блочный режим`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Панели действий в диалоговых окнах и модальных окнах`}),`
`,(0,c.jsx)(t.li,{children:`Наборы кнопок в формах (отмена, сохранение, применение)`}),`
`,(0,c.jsx)(t.li,{children:`Панели управления с основными и дополнительными действиями`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивные интерфейсы с автоматической перестройкой на мобильных устройствах`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Actions } from '@dxtmisha/constructor'

const isLoading = ref(false)

const handleSave = async () => {
isLoading.value = true
await saveData()
isLoading.value = false
}
<\/script>

<template>
<Actions
  align="right"
  :list="[
    { label: 'Отмена' },
    { label: 'Сохранить', primary: true, loading: isLoading }
  ]"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Actions — это умный контейнер: он автоматически управляет расположением кнопок, адаптируется к размеру экрана и обеспечивает визуальную иерархию между основными и вторичными действиями.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};