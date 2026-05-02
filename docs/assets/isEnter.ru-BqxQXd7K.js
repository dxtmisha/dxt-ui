import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isEnter - Проверка нажатия Enter или Space`}),`
`,(0,c.jsx)(n.h1,{id:`isenter`,children:(0,c.jsx)(n.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, является ли нажатая клавиша `,(0,c.jsx)(n.code,{children:`Enter`}),` или `,(0,c.jsx)(n.code,{children:`Space`}),`. Функция полезна для обработки событий клавиатуры, когда необходимо реагировать на подтверждение действия или активацию элемента, поддерживая при этом доступность (a11y) и старые браузеры.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если нажата клавиша `,(0,c.jsx)(n.code,{children:`Enter`}),` или `,(0,c.jsx)(n.code,{children:`Space`}),`, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства события для максимальной совместимости:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`' '`}),`, `,(0,c.jsx)(n.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyCode`}),`: `,(0,c.jsx)(n.code,{children:`13`}),`, `,(0,c.jsx)(n.code,{children:`32`})]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Нажат Enter или Space')
    // Выполнить действие
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};