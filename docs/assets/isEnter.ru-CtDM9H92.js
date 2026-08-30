import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isEnter - Проверка нажатия Enter или Space`}),`
`,(0,c.jsx)(t.h1,{id:`isenter`,children:(0,c.jsx)(t.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли нажатая клавиша `,(0,c.jsx)(t.code,{children:`Enter`}),` или `,(0,c.jsx)(t.code,{children:`Space`}),`. Функция полезна для обработки событий клавиатуры, когда необходимо реагировать на подтверждение действия или активацию элемента, поддерживая при этом доступность (a11y) и старые браузеры.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если нажата клавиша `,(0,c.jsx)(t.code,{children:`Enter`}),` или `,(0,c.jsx)(t.code,{children:`Space`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства события для максимальной совместимости:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`' '`}),`, `,(0,c.jsx)(t.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyCode`}),`: `,(0,c.jsx)(t.code,{children:`13`}),`, `,(0,c.jsx)(t.code,{children:`32`})]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Нажат Enter или Space')
    // Выполнить действие
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};