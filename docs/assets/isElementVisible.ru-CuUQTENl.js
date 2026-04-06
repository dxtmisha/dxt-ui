import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isElementVisible - Проверка видимости элемента`}),`
`,(0,c.jsx)(n.h1,{id:`iselementvisible`,children:(0,c.jsx)(n.code,{children:`isElementVisible`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли элемент видимым (не скрыт через CSS и находится в DOM).
Элемент может находиться за пределами экрана и при этом считаться видимым.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelectors: ElementOrString<E>`}),` — селекторов для сопоставления или Element.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если элемент является видимым, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isElementVisible } from '@dxtmisha/functional-basic'

const div = document.createElement('div')
document.body.appendChild(div)
console.log(isElementVisible(div)) // true

div.style.display = 'none'
console.log(isElementVisible(div)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};