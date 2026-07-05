import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/fetchTopLevelFrames - Получение фреймов верхнего уровня`}),`
`,(0,l.jsx)(n.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(n.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для получения списка всех фреймов верхнего уровня, присутствующих в документе Figma. Обеспечивает связь между интерфейсом (UI) и основной частью плагина для доступа к структуре документа.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Функция, которая будет вызвана после получения списка фреймов верхнего уровня.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(n.p,{children:[`Массив элементов `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — (Опционально) Изображение фрейма в виде байтового массива или строки Base64.`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Получить все фреймы верхнего уровня и вывести информацию о них
fetchTopLevelFrames((frames) => {
console.log('Найдено фреймов верхнего уровня:', frames.length)

frames.forEach(frame => {
  console.log(\`Фрейм: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};