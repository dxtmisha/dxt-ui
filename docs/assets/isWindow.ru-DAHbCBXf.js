import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isWindow - Проверка объекта Window`}),`
`,(0,c.jsx)(n.h1,{id:`iswindow`,children:(0,c.jsx)(n.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, предназначенная для проверки того, является ли переданный элемент или переменная глобальным объектом браузера `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Функция сначала проводит проверку `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`, чтобы убедиться, что код вообще запущен в браузере и объект `,(0,c.jsx)(n.code,{children:`window`}),` доступен (для предотвращения ошибок в серверной среде SSR). Затем выполняется прямое сравнение переданного аргумента с глобальным объектом `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — Любой элемент, узел или переменная для сопоставления.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если код выполняется в браузере и переданный элемент строго равен объекту `,(0,c.jsx)(n.code,{children:`window`}),`. Служит тайпгардом (type guard), сужающим тип проверяемого значения до `,(0,c.jsx)(n.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Типичные DOM узлы и другие значения
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};