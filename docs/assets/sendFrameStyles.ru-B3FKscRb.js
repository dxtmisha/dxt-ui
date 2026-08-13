import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/sendFrameStyles - Запрос стилей фреймов`}),`
`,(0,l.jsx)(t.h1,{id:`sendframestyles`,children:(0,l.jsx)(t.code,{children:`sendFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для отправки запроса в плагин Figma на получение информации о стилях указанных фреймов.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`attributes: UiFigmaFrameStylesMessengerAttributes`}),` — Атрибуты запроса, включая ID фреймов и дополнительные параметры.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendFrameStyles } from '@dxtmisha/figma'

// Запросить стили для конкретного фрейма
sendFrameStyles({
ids: '12:34'
})

// Запросить стили для нескольких фреймов, включая дочерние элементы
sendFrameStyles({
ids: ['12:34', '56:78'],
children: true
})
`}),`
`,(0,l.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerattributes`,children:`UiFigmaFrameStylesMessengerAttributes`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`ids: string | string[]`}),` — Уникальный ID фрейма или массив ID.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`children?: boolean`}),` — (Опционально) Включать ли стили дочерних элементов.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};