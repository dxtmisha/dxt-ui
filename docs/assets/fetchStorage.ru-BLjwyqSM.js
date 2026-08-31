import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/fetchStorage - Получение данных из общего хранилища`}),`
`,(0,l.jsx)(t.h1,{id:`fetchstorage`,children:(0,l.jsx)(t.code,{children:`fetchStorage`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для получения данных из общего хранилища Figma. В отличие от клиентского хранилища, эти данные могут быть связаны с конкретными идентификаторами (например, ID узлов) и доступны другим пользователям.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Имя хранилища.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: T) => void`}),` — Функция, которая будет вызвана после получения данных.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Опционально) Идентификатор для разделения данных (например, ID ноды).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`defaultValue?: T`}),` — (Опционально) Значение по умолчанию, если данные отсутствуют.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isOnce: boolean = true`}),` — Если `,(0,l.jsx)(t.code,{children:`true`}),`, колбэк будет вызван только один раз.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};