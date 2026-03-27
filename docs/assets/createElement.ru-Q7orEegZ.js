import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/createElement - Создание HTML-элемента`}),`
`,(0,c.jsx)(n.h1,{id:`createelement`,children:(0,c.jsx)(n.code,{children:`createElement`})}),`
`,(0,c.jsx)(n.p,{children:`В браузерном окружении создаёт новый HTML-элемент с указанным тегом и вставляет его в DOM-дерево.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет наличие DOM-окружения с помощью `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. Если код выполняется не в браузере (например, на сервере во время SSR), функция вернёт `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parentElement?: HTMLElement`}),` — Родительский элемент, в который будет вставлен новый узел.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tagName: string = 'div'`}),` — Строка, определяющая тип создаваемого элемента (по умолчанию `,(0,c.jsx)(n.code,{children:`'div'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)`}),` — Объект с атрибутами и свойствами для элемента (например, `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, обработчики событий), или функция-колбэк для тонкой настройки элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`referenceElement?: HTMLElement`}),` — Элемент, перед которым будет вставлен новый `,(0,c.jsx)(n.code,{children:`element`}),`. Если не передан (или равен `,(0,c.jsx)(n.code,{children:`null`}),`), элемент будет добавлен в конец дочерних узлов родителя (`,(0,c.jsx)(n.code,{children:`appendChild`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — Созданный HTML-элемент, или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если DOM недоступен.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createElement } from '@dxtmisha/functional-basic'

const container = document.getElementById('app')

// Создание элемента с атрибутами
const btn = createElement(container, 'button', {
  className: 'primary-btn',
  textContent: 'Нажми меня',
  onclick: () => alert('Клик!')
})

// Тонкая настройка через функцию
createElement(container, 'span', (el) => {
  el.style.color = 'red'
  el.dataset.customId = '123'
  el.textContent = 'Текст с ошибкой'
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};