import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getElementOrWindow - Получение элемента или объекта window`}),`
`,(0,c.jsx)(n.h1,{id:`getelementorwindow`,children:(0,c.jsx)(n.code,{children:`getElementOrWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Эта утилита аналогична `,(0,c.jsx)(n.code,{children:`getElement`}),`, но с одним существенным отличием: если в качестве аргумента передан глобальный объект `,(0,c.jsx)(n.code,{children:`window`}),`, функция вернёт именно его. `,(0,c.jsx)(n.code,{children:`getElement`}),` в такой же ситуации возвращает `,(0,c.jsx)(n.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если передана строка или другой элемент, функция действует как стандартный `,(0,c.jsx)(n.code,{children:`getElement`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — Селектор для поиска, элемент `,(0,c.jsx)(n.code,{children:`Element`}),` или объект `,(0,c.jsx)(n.code,{children:`Window`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Найденный элемент, изначальный переданный элемент, сам объект `,(0,c.jsx)(n.code,{children:`window`}),` (если он был передан), или `,(0,c.jsx)(n.code,{children:`undefined`}),` если ничего не найдено.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Передача Window вернет Window (для сравнения getElement вернул бы document.body)
const win = getElementOrWindow(window)

// Обычный поиск по селектору
const btn = getElementOrWindow('.submit-btn')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};