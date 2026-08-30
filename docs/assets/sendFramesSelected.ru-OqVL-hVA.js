import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/sendFramesSelected - Обновление состояния выбора фрейма`}),`
`,(0,l.jsx)(t.h1,{id:`sendframesselected`,children:(0,l.jsx)(t.code,{children:`sendFramesSelected`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для уведомления плагина Figma об изменении состояния выбора конкретного фрейма. Обычно используется для добавления или удаления фреймов из списка множественного выбора, управляемого плагином.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Идентификатор (ID) фрейма.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`selected: boolean`}),` — Желаемое состояние выбора (true — выбрать, false — отменить выбор).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendFramesSelected } from '@dxtmisha/figma'

// Добавить фрейм в список выбранных
sendFramesSelected('12:34', true)

// Удалить фрейм из списка выбранных
sendFramesSelected('12:34', false)
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};