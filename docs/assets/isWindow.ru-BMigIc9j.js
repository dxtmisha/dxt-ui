import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isWindow - Проверка объекта Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли переданный элемент или значение глобальным объектом браузера `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Сначала выполняет проверку `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`, чтобы убедиться, что код запущен в DOM-окружении (предотвращая ошибки при серверном рендеринге SSR), а затем сравнивает `,(0,c.jsx)(t.code,{children:`element === window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Проверяемый элемент или значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`element is Extract<E, Window>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если код выполняется в браузере и `,(0,c.jsx)(t.code,{children:`element`}),` строго равен `,(0,c.jsx)(t.code,{children:`window`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`. Выступает в качестве защитника типа (type guard) в TypeScript, сужая `,(0,c.jsx)(t.code,{children:`E`}),` до `,(0,c.jsx)(t.code,{children:`Extract<E, Window>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Другие DOM-узлы и значения
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};