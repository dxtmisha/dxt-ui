import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/forEach - Перебор коллекции (Array, Object, Map, Set)`}),`
`,(0,c.jsx)(t.h1,{id:`foreach`,children:(0,c.jsx)(t.code,{children:`forEach`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция выполняет указанную функцию один раз для каждого элемента в коллекции (`,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Object`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),`) и возвращает массив с результатами выполнения функции (пропуская значения `,(0,c.jsx)(t.code,{children:`undefined`}),`, если `,(0,c.jsx)(t.code,{children:`saveUndefined`}),` не равен `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: D`}),` — Объект или коллекция для перебора (`,(0,c.jsx)(t.code,{children:`D extends ForEachData<T> = readonly T[] | Record<string, T> | Map<unknown, T> | Set<T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (item: T, key: K, collection: D) => R`}),` — Функция обратного вызова, выполняемая для каждого элемента (`,(0,c.jsx)(t.code,{children:`key`}),` имеет тип `,(0,c.jsx)(t.code,{children:`number`}),` для массивов, `,(0,c.jsx)(t.code,{children:`string`}),` для объектов, `,(0,c.jsx)(t.code,{children:`K`}),` для `,(0,c.jsx)(t.code,{children:`Map`}),` и `,(0,c.jsx)(t.code,{children:`S`}),` для `,(0,c.jsx)(t.code,{children:`Set`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveUndefined?: S`}),` — Если `,(0,c.jsx)(t.code,{children:`true`}),`, сохраняет возвращаемые значения `,(0,c.jsx)(t.code,{children:`undefined`}),` в результирующем массиве (по умолчанию `,(0,c.jsx)(t.code,{children:`undefined`}),` отфильтровываются).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ForEachReturn<R, S>`}),` (`,(0,c.jsx)(t.code,{children:`(S extends true ? R : Exclude<R, undefined>)[]`}),`) — массив с результатами выполнения функции. При `,(0,c.jsx)(t.code,{children:`saveUndefined: false`}),` (или по умолчанию) тип автоматически исключает `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`). При `,(0,c.jsx)(t.code,{children:`saveUndefined: true`}),` тип сохраняет `,(0,c.jsx)(t.code,{children:`undefined`}),` (`,(0,c.jsx)(t.code,{children:`(R | undefined)[]`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(t.p,{children:`Функция является универсальным инструментом для одновременного перебора, трансформации и фильтрации различных структур данных в один проход O(N).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка коллекций`}),` — нативно работает с `,(0,c.jsx)(t.code,{children:`Array`}),`, `,(0,c.jsx)(t.code,{children:`Map`}),`, `,(0,c.jsx)(t.code,{children:`Set`}),` и объектами-словарями (`,(0,c.jsx)(t.code,{children:`Record<string, T>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор результатов (filterMap / compactMap)`}),` — в отличие от стандартного `,(0,c.jsx)(t.code,{children:`Array.prototype.forEach`}),`, функция возвращает массив собранных значений аналогично `,(0,c.jsx)(t.code,{children:`map`}),`, но без создания промежуточных аллокаций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная фильтрация undefined`}),` — по умолчанию все значения `,(0,c.jsx)(t.code,{children:`undefined`}),` (например, если callback ничего не вернул или вернул `,(0,c.jsx)(t.code,{children:`undefined`}),`) отфильтровываются из итогового массива, а возвращаемый тип сужается до `,(0,c.jsx)(t.code,{children:`Exclude<R, undefined>[]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Параметр saveUndefined`}),` — если передать `,(0,c.jsx)(t.code,{children:`true`}),` третьим аргументом, массив сохранит все результаты, включая `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единый контракт аргументов`}),` — во все callback-функции передаётся `,(0,c.jsx)(t.code,{children:`(item, key, collection)`}),`. Для `,(0,c.jsx)(t.code,{children:`Set`}),` в качестве ключа передаётся сам элемент (`,(0,c.jsx)(t.code,{children:`item`}),`), что согласуется со стандартом ECMAScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от мутаций длины`}),` — для массивов длина фиксируется до начала цикла, предотвращая зацикливание при добавлении элементов во время итерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность объектов`}),` — обход свойств объекта выполняется через `,(0,c.jsx)(t.code,{children:`for...in`}),` с нативной проверкой `,(0,c.jsx)(t.code,{children:`Object.hasOwn`}),`, исключая свойства прототипа и избегая создания лишних промежуточных массивов ключей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { forEach } from '@dxtmisha/functional-basic'

// 1. Массив (Array)
const numbers = [1, 2, 3, 4]
const evens = forEach(numbers, item => (item % 2 === 0 ? item * 10 : undefined))
// [20, 40]

// 2. Объект (Object / Record)
const user = { name: 'Alice', role: 'admin', age: 25 }
const pairs = forEach(user, (value, key) => \`\${key}=\${value}\`)
// ['name=Alice', 'role=admin', 'age=25']

// 3. Отображение (Map)
const map = new Map([['first', 10], ['second', 20]])
const mapResults = forEach(map, (value, key) => \`\${key}:\${value}\`)
// ['first:10', 'second:20']

// 4. Множество (Set)
const set = new Set(['apple', 'banana'])
const setUpper = forEach(set, item => item.toUpperCase())
// ['APPLE', 'BANANA']

// 5. Сохранение undefined (saveUndefined: true)
const withUndefined = forEach([1, 2, 3], item => (item % 2 === 0 ? item : undefined), true)
// [undefined, 2, undefined]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};