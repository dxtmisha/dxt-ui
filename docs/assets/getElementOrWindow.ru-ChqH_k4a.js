import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementOrWindow - Получение элемента или объекта window`}),`
`,(0,c.jsx)(t.h1,{id:`getelementorwindow`,children:(0,c.jsx)(t.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Эта утилита аналогична `,(0,c.jsx)(t.code,{children:`getElement`}),`, но с одним существенным отличием: если в качестве аргумента передан глобальный объект `,(0,c.jsx)(t.code,{children:`window`}),`, функция вернёт именно его. `,(0,c.jsx)(t.code,{children:`getElement`}),` в такой же ситуации возвращает `,(0,c.jsx)(t.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если передана строка или другой элемент, функция действует как стандартный `,(0,c.jsx)(t.code,{children:`getElement`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — Селектор для поиска, элемент `,(0,c.jsx)(t.code,{children:`Element`}),` или объект `,(0,c.jsx)(t.code,{children:`Window`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Найденный элемент, изначальный переданный элемент, сам объект `,(0,c.jsx)(t.code,{children:`window`}),` (если он был передан), или `,(0,c.jsx)(t.code,{children:`undefined`}),` если ничего не найдено.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Передача Window вернет Window (для сравнения getElement вернул бы document.body)
const win = getElementOrWindow(window)

// Обычный поиск по селектору
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};