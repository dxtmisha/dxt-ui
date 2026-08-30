import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/fetchTopLevelFrames - Получение фреймов верхнего уровня`}),`
`,(0,l.jsx)(t.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(t.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для получения списка всех фреймов верхнего уровня, присутствующих в документе Figma. Обеспечивает связь между интерфейсом (UI) и основной частью плагина для доступа к структуре документа.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Функция, которая будет вызвана после получения списка фреймов верхнего уровня.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(t.p,{children:[`Массив элементов `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`image?: Uint8Array | string`}),` — (Опционально) Изображение фрейма в виде байтового массива или строки Base64.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Получить все фреймы верхнего уровня и вывести информацию о них
fetchTopLevelFrames((frames) => {
console.log('Найдено фреймов верхнего уровня:', frames.length)

frames.forEach(frame => {
  console.log(\`Фрейм: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};