import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компактный визуальный индикатор для отображения статуса, количества уведомлений или маркеров на элементах интерфейса с поддержкой различных режимов отображения и автоматическим управлением переполнением.`}),`
`,(0,c.jsx)(t.p,{children:`Badge предоставляет универсальное решение для создания информативных индикаторов с гибкой настройкой содержимого, позиционирования и внешнего вида. Компонент поддерживает отображение текста, чисел с ограничением максимального значения, иконок и точечных индикаторов, автоматически скрывается при отсутствии контента и интегрируется с системой слотов для кастомизации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Множественные режимы отображения (текст, числа, иконки, точечный индикатор)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое управление переполнением с настройкой максимального значения`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое скрытие при отсутствии контента (dot, icon, label)`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с LabelNumberInclude для обработки числовых значений`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок через IconInclude`}),`
`,(0,c.jsx)(t.li,{children:`Цветовые варианты для различных типов статуса`}),`
`,(0,c.jsx)(t.li,{children:`Управление видимостью через свойство hide`}),`
`,(0,c.jsx)(t.li,{children:`Кастомизация через слоты для полного контроля над содержимым`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Индикаторы количества непрочитанных уведомлений`}),`
`,(0,c.jsx)(t.li,{children:`Маркеры статуса на аватарах пользователей (онлайн/оффлайн)`}),`
`,(0,c.jsx)(t.li,{children:`Счетчики элементов в корзине или списках`}),`
`,(0,c.jsx)(t.li,{children:`Индикаторы новых сообщений в чатах`}),`
`,(0,c.jsx)(t.li,{children:`Статусные маркеры на карточках товаров`}),`
`,(0,c.jsx)(t.li,{children:`Визуальные подсказки о наличии обновлений`}),`
`,(0,c.jsx)(t.li,{children:`Числовые индикаторы на вкладках и пунктах меню`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const cartCount = ref(5)
const unreadMessages = ref(127)
const isOnline = ref(true)

const addToCart = () => {
cartCount.value++
}
<\/script>

<template>
<div class="badge-examples">
  <!-- Базовый бейдж с числом -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="shopping_cart" @click="addToCart"/>
    <Badge :label="cartCount"/>
  </div>

  <!-- Бейдж с ограничением максимального значения -->
  <div style="position: relative; display: inline-block;">
    <IconButton icon="notifications"/>
    <Badge :label="unreadMessages" :label-max="99"/>
  </div>

  <!-- Точечный индикатор статуса -->
  <div style="position: relative; display: inline-block;">
    <Avatar src="/user-avatar.jpg"/>
    <Badge
      dot
      :selected="isOnline"
      overlap="circular"
    />
  </div>

  <!-- Бейдж с иконкой и текстом -->
  <div style="position: relative; display: inline-block;">
    <Button>Профиль</Button>
    <Badge
      icon="verified"
      label="Pro"
      overlap="static"
    />
  </div>

  <!-- Бейдж с кастомным позиционированием -->
  <div style="position: relative; display: inline-block;">
    <Card>Контент</Card>
    <Badge
      label="Новое"
      vertical="bottom"
      horizontal="left"
    />
  </div>
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Badge разработан как универсальный UI-компонент для создания компактных визуальных индикаторов с комплексной поддержкой различных типов контента, автоматическим управлением отображением и гибкими настройками позиционирования.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};