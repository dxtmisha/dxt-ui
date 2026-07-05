import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma/Functions/fetchFrameStyles - Получение стилей фреймов`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframestyles`,children:(0,l.jsx)(n.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для получения информации о стилях указанных фреймов из плагина Figma. Позволяет получить доступ к CSS-стилям, JSON-данным и текстовому содержимому для узлов и их дочерних элементов.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — Функция, которая будет вызвана после получения данных о стилях для запрошенных фреймов.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Получить стили для фреймов и вывести результат в консоль
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('ID фрейма:', item.id)
  console.log('Данные стилей:', item.data)
})
})
`}),`
`,(0,l.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(n.p,{children:[`Массив элементов `,(0,l.jsx)(n.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор фрейма.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`data: UiFigmaFrameStylesList`}),` — Список данных стилей для фрейма.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(n.p,{children:[`Расширяет `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Опционально) Компактные данные узла в формате JSON.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text?: string`}),` — (Опционально) Текстовое содержимое (для текстовых узлов).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Опционально) Карта CSS-стилей элемента.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Опционально) Карта CSS-стилей дочерних элементов.`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};