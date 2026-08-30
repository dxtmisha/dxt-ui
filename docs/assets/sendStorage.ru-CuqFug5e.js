import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/sendStorage - Сохранение данных в общее хранилище`}),`
`,(0,l.jsx)(t.h1,{id:`sendstorage`,children:(0,l.jsx)(t.code,{children:`sendStorage`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для сохранения данных в общее хранилище Figma. В отличие от клиентского хранилища, эти данные могут быть связаны с конкретными идентификаторами (например, ID узлов) и доступны другим пользователям.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Имя хранилища.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Данные для сохранения.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Опционально) Идентификатор для привязки данных к конкретному объекту (например, ID ноды).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendStorage } from '@dxtmisha/figma'

// 1. Сохранение глобальных данных
sendStorage('app-config', { version: '1.0.0' })

// 2. Сохранение данных для конкретного узла (node)
sendStorage('node-custom-data', { label: 'Header' }, '12:34')
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};