import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# DOM и Элементы`}),`
`,(0,c.jsx)(n.h1,{id:`dom-и-элементы`,children:`DOM и Элементы`}),`
`,(0,c.jsx)(n.p,{children:`Набор утилит для упрощения работы с DOM-деревом. Включает методы для безопасного поиска элементов, динамического создания узлов с атрибутами, умного скролла и проверки состояния объектов в среде браузера.`}),`
`,(0,c.jsx)(n.h2,{id:`поиск-и-получение`,children:`Поиск и получение`}),`
`,(0,c.jsx)(n.p,{children:`Функции для извлечения элементов по селекторам или ссылкам с автоматической проверкой среды выполнения.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { getElement, domQuerySelector } from '@dxtmisha/functional-basic'

// 1. Получение элемента по селектору или ссылке
const container = getElement('#app')

// 2. Поиск внутри конкретного родителя (scoped search)
const button = domQuerySelector('.btn-submit', container)
`})}),`
`,(0,c.jsx)(n.h2,{id:`создание-и-атрибуты`,children:`Создание и атрибуты`}),`
`,(0,c.jsx)(n.p,{children:`Удобный способ генерации HTML-структур и управления их свойствами без использования громоздкого нативного API.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { createElement, setElementItem } from '@dxtmisha/functional-basic'

// 1. Создание элемента div внутри #app с атрибутами
const el = createElement(document.getElementById('app'), 'div', {
  className: 'p-4 active',
  innerHTML: '<span>Hello World</span>',
  id: 'dynamic-node'
})

// 2. Установка/обновление свойств элемента
setElementItem(el, 'title', 'Подсказка при наведении')
`})}),`
`,(0,c.jsx)(n.h2,{id:`навигация-и-скролл`,children:`Навигация и скролл`}),`
`,(0,c.jsx)(n.p,{children:`Утилиты для управления прокруткой контейнеров и обеспечения видимости элементов.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { goScrollTo, goScrollSmooth } from '@dxtmisha/functional-basic'

const list = getElement('.scroll-container')
const item = getElement('.target-item')

// 1. Прокрутка контейнера к конкретному элементу
goScrollTo(list, item, 'smooth')

// 2. Плавный скролл страницы к верху
goScrollSmooth(0)
`})}),`
`,(0,c.jsx)(n.h2,{id:`проверки-состояния`,children:`Проверки состояния`}),`
`,(0,c.jsx)(n.p,{children:`Вспомогательные функции для определения типов элементов и их наличия в текущем документе.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { isInDom, isElementVisible, isInput } from '@dxtmisha/functional-basic'

// 1. Проверка, примонтирован ли элемент к DOM
if (isInDom(el)) {
  console.log('Элемент находится в дереве DOM')
}

// 2. Проверка, является ли элемент видимым (не скрыт через CSS)
if (isElementVisible(el)) {
  console.log('Элемент виден пользователю')
}

// 3. Проверка, является ли узел полем ввода
if (isInput(el)) {
  el.focus()
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};