import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma-code/Functions/setupStorage - Настройка обработчиков общего хранилища`}),`
`,(0,l.jsx)(t.h1,{id:`setupstorage`,children:(0,l.jsx)(t.code,{children:`setupStorage`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для настройки обработчиков запросов к общему хранилищу Figma. Она связывает запросы из интерфейса (UI) на чтение и запись данных с фактическими операциями в плагине, поддерживая привязку к конкретным идентификаторам объектов (например, ID нод).`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Параметры:`}),`
Отсутствуют.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { setupStorage } from '@dxtmisha/figma-code'

// Инициализация в основной части плагина (обычно в code.ts)
setupStorage()

// Теперь UI может использовать fetchStorage и sendStorage 
// для взаимодействия с общим хранилищем Figma.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};