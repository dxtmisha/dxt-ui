import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaTopLevelFrames - Управление фреймами верхнего уровня`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmatoplevelframes`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaTopLevelFrames`})]}),`
`,(0,c.jsx)(n.p,{children:`Статический утилитарный класс для управления и синхронизации списка фреймов и секций верхнего уровня на текущей странице Figma. Он форматирует узлы в упрощенный список для отображения в интерфейсе плагина.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая генерация списка`}),` — Автоматически определяет фреймы и секции, находящиеся в корне текущей страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Визуальные данные`}),` — Экспортирует скриншоты в формате JPG для каждого фрейма, обеспечивая визуальный предпросмотр в UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция сообщений`}),` — Метод `,(0,c.jsx)(n.code,{children:`send()`}),` настраивает слушателей для автоматического ответа на запросы списка фреймов из UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Поскольку это статический класс, создание экземпляра не требуется. Как правило, достаточно вызвать настройку связи в основном файле плагина.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames } from '@dxtmisha/figma-code'

// Настройка слушателя для запросов из UI
FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static get(): Promise<UiFigmaFramesList>`}),` — Извлекает, форматирует и кэширует список фреймов верхнего уровня.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static send(): void`}),` — Инициализирует слушателей `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` для обработки запросов списка фреймов из UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(n.p,{children:`Массив объектов, представляющих фреймы верхнего уровня.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Имя фрейма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный ID фрейма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Экспортированный скриншот фрейма в формате JPG.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};