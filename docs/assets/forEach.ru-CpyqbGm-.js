import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/forEach - Перебор объекта или массива`}),`
`,(0,c.jsx)(t.h1,{id:`foreach`,children:(0,c.jsx)(t.code,{children:`forEach`})}),`
`,(0,c.jsx)(t.p,{children:`Функция выполняет указанную функцию один раз для каждого элемента в объекте. И возвращает массив с результатами выполнения функции.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: D`}),` — объект для перебора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (item: T, key: K, dataMain: typeof data) => R`}),` — функция, которая будет вызвана для каждого элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveUndefined?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, функция вернет массив, включая `,(0,c.jsx)(t.code,{children:`undefined`}),` значения (по умолчанию фильтруются).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`R[]`}),` — массив с результатами выполнения функции.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(t.p,{children:`Функция является универсальным инструментом для перебора различных структур данных и сбора результатов в массив.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка типов`}),` — работает с `,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),` и обычными объектами (`,(0,c.jsx)(t.code,{children:`Object`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор результатов`}),` — в отличие от стандартного `,(0,c.jsx)(t.code,{children:`forEach`}),`, эта функция собирает значения, возвращаемые из `,(0,c.jsx)(t.code,{children:`callback`}),`, в новый массив.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация undefined`}),` — по умолчанию все значения `,(0,c.jsx)(t.code,{children:`undefined`}),` (например, если callback ничего не вернул для элемента) отфильтровываются из итогового массива.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Параметр saveUndefined`}),` — если передать `,(0,c.jsx)(t.code,{children:`true`}),` третьим аргументом, массив сохранит все результаты, включая `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// По умолчанию undefined фильтруются
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// С сохранением undefined
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};