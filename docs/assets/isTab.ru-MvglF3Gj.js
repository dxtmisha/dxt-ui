import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isTab - Проверка нажатия Tab`}),`
`,(0,c.jsx)(t.h1,{id:`istab`,children:(0,c.jsx)(t.code,{children:`isTab`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли нажатая клавиша `,(0,c.jsx)(t.code,{children:`Tab`}),`. Функция полезна для обработки событий клавиатуры, когда необходимо реагировать на навигацию по фокусу или захватывать фокус, поддерживая при этом доступность (a11y) и старые браузеры.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если нажата клавиша `,(0,c.jsx)(t.code,{children:`Tab`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства события для максимальной совместимости:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code`}),`: `,(0,c.jsx)(t.code,{children:`'Tab'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key`}),`: `,(0,c.jsx)(t.code,{children:`'Tab'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyCode`}),`: `,(0,c.jsx)(t.code,{children:`9`})]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isTab } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isTab(event)) {
    console.log('Нажат Tab')
    // Выполнить действие
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};