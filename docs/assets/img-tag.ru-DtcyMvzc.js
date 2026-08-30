import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`использование-тега-img`,children:`Использование тега img`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`tagImg`}),`, `,(0,c.jsx)(t.code,{children:`srcset`}),`, `,(0,c.jsx)(t.code,{children:`picture`}),`, `,(0,c.jsx)(t.code,{children:`alt`}),`, `,(0,c.jsx)(t.code,{children:`lazy`}),`, `,(0,c.jsx)(t.code,{children:`preloadOffset`}),` и `,(0,c.jsx)(t.code,{children:`fetchPriority`}),` предназначены для управления режимом отображения изображения через HTML-тег `,(0,c.jsx)(t.code,{children:`<img>`}),` вместо фонового изображения.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tagImg`}),` — использовать тег `,(0,c.jsx)(t.code,{children:`<img>`}),` вместо фонового изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`srcset`}),` — набор источников изображения для разных разрешений экрана`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`picture`}),` — источники для разных условий отображения с использованием тега `,(0,c.jsx)(t.code,{children:`<picture>`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alt`}),` — альтернативный текст для изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazy`}),` — включает ленивую загрузку изображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preloadOffset`}),` — смещение для предзагрузки изображения (по умолчанию `,(0,c.jsx)(t.code,{children:`1024px`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fetchPriority`}),` — приоритет загрузки изображения (`,(0,c.jsx)(t.code,{children:`low`}),`, `,(0,c.jsx)(t.code,{children:`high`}),`, `,(0,c.jsx)(t.code,{children:`auto`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,c.jsx)(t.code,{children:`tagImg`}),` не задан или равен `,(0,c.jsx)(t.code,{children:`false`}),`, изображение отображается как CSS-фон через `,(0,c.jsx)(t.code,{children:`background-image`}),`. При активации `,(0,c.jsx)(t.code,{children:`tagImg`}),` (значение `,(0,c.jsx)(t.code,{children:`true`}),`), компонент использует семантический HTML-тег `,(0,c.jsx)(t.code,{children:`<img>`}),`, обеспечивая лучшую доступность и SEO-оптимизацию. Свойство `,(0,c.jsx)(t.code,{children:`alt`}),` определяет альтернативный текст, который отображается при недоступности изображения и используется программами чтения с экрана для людей с ограниченными возможностями.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`srcset`}),` позволяет предоставить несколько версий изображения для разных плотностей пикселей и размеров экрана. Принимает строку в формате стандартного атрибута `,(0,c.jsx)(t.code,{children:`srcset`}),` или объект, где ключи — это дескрипторы ширины (числа или строки вроде `,(0,c.jsx)(t.code,{children:`'2x'`}),`), а значения — URL изображений. При использовании числовых ключей автоматически добавляется суффикс `,(0,c.jsx)(t.code,{children:`w`}),` (width descriptor). Браузер самостоятельно выбирает оптимальное изображение на основе размера экрана и плотности пикселей.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`picture`}),` позволяет использовать HTML-тег `,(0,c.jsx)(t.code,{children:`<picture>`}),` для art direction — когда требуется загружать разные изображения в зависимости от размера экрана или других условий медиа-запросов. Принимает объект, где ключи — это медиа-условия (например, ширина экрана в пикселях), а значения — URL изображений, или массив объектов с атрибутами `,(0,c.jsx)(t.code,{children:`<source>`}),`. При использовании объекта автоматически генерируются медиа-запросы вида `,(0,c.jsx)(t.code,{children:`(width >= 768px)`}),`. Тег `,(0,c.jsx)(t.code,{children:`<picture>`}),` обеспечивает более гибкий контроль над выбором изображения по сравнению с `,(0,c.jsx)(t.code,{children:`srcset`}),`, позволяя загружать изображения разных пропорций или содержания для различных условий просмотра.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`lazy`}),` активирует нативную ленивую загрузку браузера через атрибут `,(0,c.jsx)(t.code,{children:`loading="lazy"`}),`. Изображения с этим атрибутом загружаются только при приближении к видимой области экрана, что значительно ускоряет начальную загрузку страницы и снижает потребление трафика. Особенно эффективно для страниц с большим количеством изображений или длинных списков.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`preloadOffset`}),` определяет смещение в пикселях для предварительной загрузки изображений при использовании ленивой загрузки. По умолчанию установлено значение `,(0,c.jsx)(t.code,{children:`1024px`}),`, что означает начало загрузки изображения за 1024 пикселя до того, как оно попадет в видимую область. Это обеспечивает плавную загрузку изображений без задержек при прокрутке. Можно указать как числовое значение, так и строку с единицей измерения.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`fetchPriority`}),` позволяет управлять приоритетом загрузки изображения браузером. Принимает три значения: `,(0,c.jsx)(t.code,{children:`high`}),` — высокий приоритет для критически важных изображений (например, главный баннер или hero-изображение), `,(0,c.jsx)(t.code,{children:`low`}),` — низкий приоритет для второстепенных изображений, `,(0,c.jsx)(t.code,{children:`auto`}),` — браузер самостоятельно определяет приоритет (значение по умолчанию). Правильное использование этого свойства помогает оптимизировать загрузку страницы, обеспечивая быструю загрузку важного контента.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const productImage = ref('/images/product.jpg')
<\/script>

<template>
<!-- Базовое использование -->
<Image
  :value="productImage"
  tag-img
  alt="Описание продукта"
/>

<!-- С ленивой загрузкой -->
<Image
  :value="productImage"
  tag-img
  alt="Товар"
  lazy
/>

<!-- С srcset объектом -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg'
  }"
/>

<!-- С picture для разных размеров экрана -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение для разных устройств"
  :picture="{
    768: '/images/product-tablet.jpg',
    1024: '/images/product-desktop.jpg'
  }"
/>

<!-- С настройкой предзагрузки -->
<Image
  :value="productImage"
  tag-img
  alt="Изображение с ранней предзагрузкой"
  lazy
  preload-offset="2048px"
/>

<!-- С высоким приоритетом загрузки -->
<Image
  :value="productImage"
  tag-img
  alt="Главное изображение страницы"
  fetch-priority="high"
/>

<!-- Комплексный пример -->
<Image
  :value="productImage"
  tag-img
  alt="Адаптивное изображение товара"
  lazy
  preload-offset="1536px"
  fetch-priority="low"
  :srcset="{
    '1x': '/images/product.jpg',
    '2x': '/images/product@2x.jpg',
    '3x': '/images/product@3x.jpg'
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};