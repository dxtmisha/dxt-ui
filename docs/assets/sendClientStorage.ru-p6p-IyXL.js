import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-CKlddtvc.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/sendClientStorage - Сохранение данных в клиентское хранилище`}),`
`,(0,l.jsx)(n.h1,{id:`sendclientstorage`,children:(0,l.jsx)(n.code,{children:`sendClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для сохранения данных в клиентское хранилище Figma (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`). Отправляет сообщение из интерфейса (UI) в основную часть плагина для записи значения по указанному имени.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Ключ (имя) в хранилище.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — Данные для сохранения.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendClientStorage } from '@dxtmisha/figma'

// 1. Сохранение простой строки
sendClientStorage('user-theme', 'dark')

// 2. Сохранение объекта
sendClientStorage('settings', { notifications: true, zoom: 100 })
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};