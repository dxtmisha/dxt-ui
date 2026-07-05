import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/sendFramesSelected - Обновление состояния выбора фрейма`}),`
`,(0,l.jsx)(n.h1,{id:`sendframesselected`,children:(0,l.jsx)(n.code,{children:`sendFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для уведомления плагина Figma об изменении состояния выбора конкретного фрейма. Обычно используется для добавления или удаления фреймов из списка множественного выбора, управляемого плагином.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Идентификатор (ID) фрейма.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selected: boolean`}),` — Желаемое состояние выбора (true — выбрать, false — отменить выбор).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendFramesSelected } from '@dxtmisha/figma'

// Добавить фрейм в список выбранных
sendFramesSelected('12:34', true)

// Удалить фрейм из списка выбранных
sendFramesSelected('12:34', false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};