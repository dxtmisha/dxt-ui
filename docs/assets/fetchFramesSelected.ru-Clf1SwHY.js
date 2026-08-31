import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/fetchFramesSelected - Получение выбранных фреймов`}),`
`,(0,l.jsx)(t.h1,{id:`fetchframesselected`,children:(0,l.jsx)(t.code,{children:`fetchFramesSelected`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для получения идентификаторов (ID) выбранных в данный момент фреймов в Figma. Обеспечивает связь между интерфейсом (UI) и основной частью плагина для доступа к текущему выбору пользователя.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (selected: string[]) => void`}),` — Функция, которая будет вызвана после получения списка ID выбранных фреймов.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchFramesSelected } from '@dxtmisha/figma'

// Получить выбранные фреймы и вывести их ID в консоль
fetchFramesSelected((selectedIds) => {
if (selectedIds.length === 0) {
  console.log('Фреймы не выбраны')
} else {
  console.log('ID выбранных фреймов:', selectedIds)
}
})
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};