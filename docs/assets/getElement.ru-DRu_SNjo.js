import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getElement - Получение HTML-элемента`}),`
`,(0,c.jsx)(n.h1,{id:`getelement`,children:(0,c.jsx)(n.code,{children:`getElement`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает `,(0,c.jsx)(n.code,{children:`Element`}),` (HTML-узел) документа. Утилита принимает на вход строку-селектор, объект `,(0,c.jsx)(n.code,{children:`Window`}),` или готовый `,(0,c.jsx)(n.code,{children:`Element`}),` и возвращает соответствующий DOM-узел, если выполнение происходит в браузере. В средах без DOM (например, SSR) возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — CSS-селектор (например, `,(0,c.jsx)(n.code,{children:`'.btn'`}),`), объект `,(0,c.jsx)(n.code,{children:`Window`}),` или уже существующий узел `,(0,c.jsx)(n.code,{children:`Element`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — найденный или переданный DOM-узел, либо `,(0,c.jsx)(n.code,{children:`document.body`}),` если был передан `,(0,c.jsx)(n.code,{children:`Window`}),`. Возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`, если элемент не найден или DOM недоступен.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElement } from '@dxtmisha/functional-basic'

// Поиск по селектору
const btn = getElement('.submit-btn')

// Передача существующего элемента
const sameBtn = getElement(btn)

// Передача Window вернет document.body
const body = getElement(window)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};