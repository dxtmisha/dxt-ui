import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getKey - Получение кода нажатой клавиши`}),`
`,(0,c.jsx)(n.h1,{id:`getkey`,children:(0,c.jsx)(n.code,{children:`getKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает код или имя клавиши, которая была нажата, на основе объекта `,(0,c.jsx)(n.code,{children:`KeyboardEvent`}),`. Эта утилита стандартизирует способ извлечения ключа, безопасно пытаясь получить значения свойств в следующем порядке приоритета: `,(0,c.jsx)(n.code,{children:`event.key`}),` → `,(0,c.jsx)(n.code,{children:`event.code`}),` → строковое значение `,(0,c.jsx)(n.code,{children:`event.keyCode`}),`. Если ничего не найдено, возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — Событие клавиатуры (возникающее при `,(0,c.jsx)(n.code,{children:`keydown`}),`, `,(0,c.jsx)(n.code,{children:`keyup`}),` или `,(0,c.jsx)(n.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Название или код нажатой клавиши (например, `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Escape'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Пользователь нажал Escape! Закрываем меню.')
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};