import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElement - Получение HTML-элемента`}),`
`,(0,c.jsx)(t.h1,{id:`getelement`,children:(0,c.jsx)(t.code,{children:`getElement`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает `,(0,c.jsx)(t.code,{children:`Element`}),` (HTML-узел) документа. Утилита принимает на вход строку-селектор, объект `,(0,c.jsx)(t.code,{children:`Window`}),` или готовый `,(0,c.jsx)(t.code,{children:`Element`}),` и возвращает соответствующий DOM-узел, если выполнение происходит в браузере. В средах без DOM (например, SSR) возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — CSS-селектор (например, `,(0,c.jsx)(t.code,{children:`'.btn'`}),`), объект `,(0,c.jsx)(t.code,{children:`Window`}),` или уже существующий узел `,(0,c.jsx)(t.code,{children:`Element`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`R | undefined`}),` — найденный или переданный DOM-узел, либо `,(0,c.jsx)(t.code,{children:`document.body`}),` если был передан `,(0,c.jsx)(t.code,{children:`Window`}),`. Возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`, если элемент не найден или DOM недоступен.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElement } from '@dxtmisha/functional-basic'

// Поиск по селектору
const btn = getElement('.submit-btn')

// Передача существующего элемента
const sameBtn = getElement(btn)

// Передача Window вернет document.body
const body = getElement(window)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};