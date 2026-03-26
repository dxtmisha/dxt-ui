import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isInput - Проверка на элемент ввода`}),`
`,(0,c.jsx)(n.h1,{id:`isinput`,children:(0,c.jsx)(n.code,{children:`isInput`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, является ли элемент полем ввода (`,(0,c.jsx)(n.code,{children:`input`}),`, `,(0,c.jsx)(n.code,{children:`textarea`}),`, `,(0,c.jsx)(n.code,{children:`select`}),`) или элементом с атрибутом `,(0,c.jsx)(n.code,{children:`contenteditable`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: HTMLElement | EventTarget | null`}),` — проверяемый элемент.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если элемент является полем ввода или редактируемым, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};