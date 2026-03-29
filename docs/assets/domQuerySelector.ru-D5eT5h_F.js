import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/domQuerySelector - Выбор элемента в DOM`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselector`,children:(0,c.jsx)(n.code,{children:`domQuerySelector`})}),`
`,(0,c.jsx)(n.p,{children:`Ищет и возвращает первый HTML-элемент, соответствующий указанному CSS-селектору.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет наличие браузерного (DOM) окружения с помощью `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. Если код выполняется на сервере (SSR) или DOM недоступен, функция безопасно вернёт `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — Строка с одним или несколькими CSS-селекторами для поиска.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Первый найденный элемент, или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если совпадений нет либо DOM недоступен.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Поиск по классу
const btn = domQuerySelector('.submit-button')

// Поиск по ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Отправить'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};