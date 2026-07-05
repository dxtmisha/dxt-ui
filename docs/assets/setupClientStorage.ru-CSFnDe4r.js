import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/setupClientStorage - Настройка обработчиков клиентского хранилища`}),`
`,(0,l.jsx)(n.h1,{id:`setupclientstorage`,children:(0,l.jsx)(n.code,{children:`setupClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для настройки обработчиков запросов к клиентскому хранилищу Figma (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`). Она связывает запросы из интерфейса (UI) на чтение и запись данных с фактическими операциями в основной части плагина.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Параметры:`}),`
Отсутствуют.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupClientStorage } from '@dxtmisha/figma-code'

// Инициализация в основной части плагина (обычно в code.ts)
setupClientStorage()

// Теперь UI может использовать fetchClientStorage и sendClientStorage 
// для взаимодействия с хранилищем Figma.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};