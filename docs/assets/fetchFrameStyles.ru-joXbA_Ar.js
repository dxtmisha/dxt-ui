import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma/Functions/fetchFrameStyles - Получение стилей фреймов`}),`
`,(0,l.jsx)(t.h1,{id:`fetchframestyles`,children:(0,l.jsx)(t.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для получения информации о стилях указанных фреймов из плагина Figma. Позволяет получить доступ к CSS-стилям, JSON-данным и текстовому содержимому для узлов и их дочерних элементов.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — Функция, которая будет вызвана после получения данных о стилях для запрошенных фреймов.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Получить стили для фреймов и вывести результат в консоль
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('ID фрейма:', item.id)
  console.log('Данные стилей:', item.data)
})
})
`}),`
`,(0,l.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(t.p,{children:[`Массив элементов `,(0,l.jsx)(t.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор фрейма.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`data: UiFigmaFrameStylesList`}),` — Список данных стилей для фрейма.`]}),`
`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(t.p,{children:[`Расширяет `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Название фрейма.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор элемента.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Опционально) Компактные данные узла в формате JSON.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`text?: string`}),` — (Опционально) Текстовое содержимое (для текстовых узлов).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Опционально) Карта CSS-стилей элемента.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Опционально) Карта CSS-стилей дочерних элементов.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};