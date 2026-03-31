import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/toBinds - Объединение нескольких объектов свойств`}),`
`,(0,c.jsx)(n.h1,{id:`tobinds`,children:(0,c.jsx)(n.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(n.p,{children:[`Последовательно объединяет несколько объектов свойств с помощью `,(0,c.jsx)(n.code,{children:`toBind`}),`. Эта функция полезна для объединения нескольких уровней свойств (например, значений по умолчанию, свойств компонентов и модификаторов состояния), гарантируя правильное объединение свойств `,(0,c.jsx)(n.code,{children:`class`}),` и `,(0,c.jsx)(n.code,{children:`style`}),`, а не их перезапись.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...values: (ItemList | undefined)[]`}),` — Список объектов свойств для объединения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Конечный объединенный объект свойств.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

const defaults = { class: 'btn', id: 'gen-id' }
const props = { class: 'btn--primary', title: 'Нажми меня' }
const state = { class: 'is-loading', style: { opacity: 0.5 } }

const finalBind = toBinds(defaults, props, state)
/* 
Результат: { 
  id: 'gen-id', 
  title: 'Нажми меня',
  class: [['btn', 'btn--primary'], 'is-loading'], 
  style: { opacity: 0.5 } 
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};