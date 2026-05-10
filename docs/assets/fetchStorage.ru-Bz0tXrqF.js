import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/fetchStorage - Получение данных из общего хранилища`}),`
`,(0,l.jsx)(n.h1,{id:`fetchstorage`,children:(0,l.jsx)(n.code,{children:`fetchStorage`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для получения данных из общего хранилища Figma. В отличие от клиентского хранилища, эти данные могут быть связаны с конкретными идентификаторами (например, ID узлов) и доступны другим пользователям.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Имя хранилища.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: T) => void`}),` — Функция, которая будет вызвана после получения данных.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Опционально) Идентификатор для разделения данных (например, ID ноды).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`defaultValue?: T`}),` — (Опционально) Значение по умолчанию, если данные отсутствуют.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isOnce: boolean = true`}),` — Если `,(0,l.jsx)(n.code,{children:`true`}),`, колбэк будет вызван только один раз.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchStorage } from '@dxtmisha/figma'

// 1. Базовое использование
fetchStorage<string>('project-status', (status) => {
console.log('Статус:', status)
}, undefined, 'active')

// 2. Получение данных для конкретного узла (node)
const nodeId = '12:34'
fetchStorage<object>('node-metadata', (data) => {
console.log('Метаданные узла:', data)
}, nodeId)

// 3. Постоянная подписка
fetchStorage<number>('global-counter', (count) => {
console.log('Обновление счетчика:', count)
}, undefined, 0, false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};