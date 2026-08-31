import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/domContentLoaded - Выполнение callback при DOMContentLoaded`}),`
`,(0,c.jsx)(t.h1,{id:`domcontentloaded`,children:(0,c.jsx)(t.code,{children:`domContentLoaded`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет функцию обратного вызова при наступлении события `,(0,c.jsx)(t.code,{children:`DOMContentLoaded`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если DOM уже загружен (`,(0,c.jsx)(t.code,{children:`document.readyState`}),` равен `,(0,c.jsx)(t.code,{children:`'interactive'`}),` или `,(0,c.jsx)(t.code,{children:`'complete'`}),`) или код выполняется вне браузера (например, при SSR), функция обратного вызова выполняется немедленно.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T | Promise<T>`}),` — Функция обратного вызова для выполнения при загрузке DOM.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — Промис, разрешающийся результатом выполнения функции обратного вызова.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domContentLoaded } from '@dxtmisha/functional-basic'

// 1. Базовое использование с синхронной функцией
domContentLoaded(() => {
  console.log('DOM готов!')
  document.getElementById('app')?.classList.add('ready')
})

// 2. Ожидание результата асинхронной функции
const data = await domContentLoaded(async () => {
  const element = document.querySelector('#content')
  return element?.textContent
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};