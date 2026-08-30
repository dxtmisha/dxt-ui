import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/toBinds - Объединение нескольких объектов свойств`}),`
`,(0,c.jsx)(t.h1,{id:`tobinds`,children:(0,c.jsx)(t.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(t.p,{children:[`Последовательно объединяет несколько объектов свойств с помощью `,(0,c.jsx)(t.code,{children:`toBind`}),`. Эта функция полезна для объединения нескольких уровней свойств (например, значений по умолчанию, свойств компонентов и модификаторов состояния), гарантируя правильное объединение свойств `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`style`}),`, а не их перезапись.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...values: (ItemList | undefined)[]`}),` — Список объектов свойств для объединения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Конечный объединенный объект свойств.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};