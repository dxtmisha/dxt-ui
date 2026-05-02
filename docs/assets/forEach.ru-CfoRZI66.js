import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/forEach - Перебор объекта или массива`}),`
`,(0,c.jsx)(n.h1,{id:`foreach`,children:(0,c.jsx)(n.code,{children:`forEach`})}),`
`,(0,c.jsx)(n.p,{children:`Функция выполняет указанную функцию один раз для каждого элемента в объекте. И возвращает массив с результатами выполнения функции.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: D`}),` — объект для перебора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (item: T, key: K, dataMain: typeof data) => R`}),` — функция, которая будет вызвана для каждого элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveUndefined?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, функция вернет массив, включая `,(0,c.jsx)(n.code,{children:`undefined`}),` значения (по умолчанию фильтруются).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`R[]`}),` — массив с результатами выполнения функции.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(n.p,{children:`Функция является универсальным инструментом для перебора различных структур данных и сбора результатов в массив.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка типов`}),` — работает с `,(0,c.jsx)(n.code,{children:`Array`}),`, `,(0,c.jsx)(n.code,{children:`Map`}),`, `,(0,c.jsx)(n.code,{children:`Set`}),` и обычными объектами (`,(0,c.jsx)(n.code,{children:`Object`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сбор результатов`}),` — в отличие от стандартного `,(0,c.jsx)(n.code,{children:`forEach`}),`, эта функция собирает значения, возвращаемые из `,(0,c.jsx)(n.code,{children:`callback`}),`, в новый массив.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация undefined`}),` — по умолчанию все значения `,(0,c.jsx)(n.code,{children:`undefined`}),` (например, если callback ничего не вернул для элемента) отфильтровываются из итогового массива.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Параметр saveUndefined`}),` — если передать `,(0,c.jsx)(n.code,{children:`true`}),` третьим аргументом, массив сохранит все результаты, включая `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// По умолчанию undefined фильтруются
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// С сохранением undefined
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};