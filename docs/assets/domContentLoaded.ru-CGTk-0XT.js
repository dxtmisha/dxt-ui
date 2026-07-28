import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-CKlddtvc.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/domContentLoaded - Выполнение callback при DOMContentLoaded`}),`
`,(0,c.jsx)(n.h1,{id:`domcontentloaded`,children:(0,c.jsx)(n.code,{children:`domContentLoaded`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет функцию обратного вызова при наступлении события `,(0,c.jsx)(n.code,{children:`DOMContentLoaded`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если DOM уже загружен (`,(0,c.jsx)(n.code,{children:`document.readyState`}),` равен `,(0,c.jsx)(n.code,{children:`'interactive'`}),` или `,(0,c.jsx)(n.code,{children:`'complete'`}),`) или код выполняется вне браузера (например, при SSR), функция обратного вызова выполняется немедленно.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T | Promise<T>`}),` — Функция обратного вызова для выполнения при загрузке DOM.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — Промис, разрешающийся результатом выполнения функции обратного вызова.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domContentLoaded } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};