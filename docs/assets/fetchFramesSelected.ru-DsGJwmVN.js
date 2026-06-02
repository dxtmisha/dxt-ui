import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/fetchFramesSelected - Получение выбранных фреймов`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframesselected`,children:(0,l.jsx)(n.code,{children:`fetchFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для получения идентификаторов (ID) выбранных в данный момент фреймов в Figma. Обеспечивает связь между интерфейсом (UI) и основной частью плагина для доступа к текущему выбору пользователя.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (selected: string[]) => void`}),` — Функция, которая будет вызвана после получения списка ID выбранных фреймов.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFramesSelected } from '@dxtmisha/figma'

// Получить выбранные фреймы и вывести их ID в консоль
fetchFramesSelected((selectedIds) => {
if (selectedIds.length === 0) {
  console.log('Фреймы не выбраны')
} else {
  console.log('ID выбранных фреймов:', selectedIds)
}
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};