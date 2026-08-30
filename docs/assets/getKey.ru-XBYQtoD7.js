import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getKey - Получение кода нажатой клавиши`}),`
`,(0,c.jsx)(t.h1,{id:`getkey`,children:(0,c.jsx)(t.code,{children:`getKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает код или имя клавиши, которая была нажата, на основе объекта `,(0,c.jsx)(t.code,{children:`KeyboardEvent`}),`. Эта утилита стандартизирует способ извлечения ключа, безопасно пытаясь получить значения свойств в следующем порядке приоритета: `,(0,c.jsx)(t.code,{children:`event.key`}),` → `,(0,c.jsx)(t.code,{children:`event.code`}),` → строковое значение `,(0,c.jsx)(t.code,{children:`event.keyCode`}),`. Если ничего не найдено, возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — Событие клавиатуры (возникающее при `,(0,c.jsx)(t.code,{children:`keydown`}),`, `,(0,c.jsx)(t.code,{children:`keyup`}),` или `,(0,c.jsx)(t.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Название или код нажатой клавиши (например, `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'Escape'`}),`, `,(0,c.jsx)(t.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Пользователь нажал Escape! Закрываем меню.')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};