import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/setupStorage - Настройка обработчиков общего хранилища`}),`
`,(0,l.jsx)(n.h1,{id:`setupstorage`,children:(0,l.jsx)(n.code,{children:`setupStorage`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для настройки обработчиков запросов к общему хранилищу Figma. Она связывает запросы из интерфейса (UI) на чтение и запись данных с фактическими операциями в плагине, поддерживая привязку к конкретным идентификаторам объектов (например, ID нод).`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Параметры:`}),`
Отсутствуют.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupStorage } from '@dxtmisha/figma-code'

// Инициализация в основной части плагина (обычно в code.ts)
setupStorage()

// Теперь UI может использовать fetchStorage и sendStorage 
// для взаимодействия с общим хранилищем Figma.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};