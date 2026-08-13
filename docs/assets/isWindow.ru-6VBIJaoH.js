import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isWindow - Проверка объекта Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, предназначенная для проверки того, является ли переданный элемент или переменная глобальным объектом браузера `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция сначала проводит проверку `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`, чтобы убедиться, что код вообще запущен в браузере и объект `,(0,c.jsx)(t.code,{children:`window`}),` доступен (для предотвращения ошибок в серверной среде SSR). Затем выполняется прямое сравнение переданного аргумента с глобальным объектом `,(0,c.jsx)(t.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Любой элемент, узел или переменная для сопоставления.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если код выполняется в браузере и переданный элемент строго равен объекту `,(0,c.jsx)(t.code,{children:`window`}),`. Служит тайпгардом (type guard), сужающим тип проверяемого значения до `,(0,c.jsx)(t.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Типичные DOM узлы и другие значения
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};