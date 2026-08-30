import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Универсальный компонент для отображения изображений, иконок, флагов и PDF-документов с расширенными возможностями управления размером, позиционированием и адаптивностью.`}),`
`,(0,c.jsxs)(t.p,{children:[`Image предоставляет гибкий API для работы с различными типами визуального контента. Компонент автоматически определяет тип источника (изображение, иконка, цвет, файл), выбирает оптимальный способ рендеринга (`,(0,c.jsx)(t.code,{children:`<img>`}),`, `,(0,c.jsx)(t.code,{children:`background-image`}),`, `,(0,c.jsx)(t.code,{children:`<picture>`}),`, `,(0,c.jsx)(t.code,{children:`<object>`}),` или иконочный шрифт) и поддерживает продвинутые функции кадрирования и адаптации.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Поддержка множества типов источников (URL, File, PDF, Material Icons, флаги, цвета)`}),`
`,(0,c.jsx)(t.li,{children:`Гибкий рендеринг с автоматическим выбором между фоном и тегом img`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивное масштабирование с сохранением пропорций и поддержкой srcset`}),`
`,(0,c.jsx)(t.li,{children:`Управление отображением через режимы заполнения и координатное кадрирование`}),`
`,(0,c.jsx)(t.li,{children:`Стилизация с поддержкой масок и заливки цветом`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с Material Symbols и системными флагами`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Адаптивные изображения с picture и srcset`}),`
`,(0,c.jsx)(t.li,{children:`Иконки интерфейса (Material Design или SVG маски)`}),`
`,(0,c.jsx)(t.li,{children:`Аватары пользователей с автоматическим кадрированием`}),`
`,(0,c.jsx)(t.li,{children:`Превью загружаемых файлов и PDF документов`}),`
`,(0,c.jsx)(t.li,{children:`Фоновые изображения со сложным позиционированием`}),`
`,(0,c.jsx)(t.li,{children:`Отображение флагов стран через CSS спрайты`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { Image } from '@dxtmisha/constructor'

const imageUrl = ref('https://example.com/image.jpg')
<\/script>

<template>
<!-- Фоновое изображение с кадрированием -->
<Image
  :value="imageUrl"
  size="cover"
  :coordinator="[10, 10, 10, 10]"
/>

<!-- SEO-дружественное изображение -->
<Image
  :value="imageUrl"
  tag-img
  alt="Описание"
/>

<!-- Иконка Material Design -->
<Image value="filled-home" />
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Компонент автоматически управляет типом контента и оптимизирует отображение в зависимости от источника.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};