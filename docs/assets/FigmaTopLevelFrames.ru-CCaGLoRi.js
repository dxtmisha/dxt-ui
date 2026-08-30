import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Classes/FigmaTopLevelFrames - Управление фреймами верхнего уровня`}),`
`,(0,c.jsxs)(t.h1,{id:`класс-figmatoplevelframes`,children:[`Класс `,(0,c.jsx)(t.code,{children:`FigmaTopLevelFrames`})]}),`
`,(0,c.jsx)(t.p,{children:`Статический утилитарный класс для управления и синхронизации списка фреймов и секций верхнего уровня на текущей странице Figma. Он форматирует узлы в упрощенный список для отображения в интерфейсе плагина.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая генерация списка`}),` — Автоматически определяет фреймы и секции, находящиеся в корне текущей страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Визуальные данные`}),` — Экспортирует скриншоты в формате JPG для каждого фрейма, обеспечивая визуальный предпросмотр в UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция сообщений`}),` — Метод `,(0,c.jsx)(t.code,{children:`send()`}),` настраивает слушателей для автоматического ответа на запросы списка фреймов из UI.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Поскольку это статический класс, создание экземпляра не требуется. Как правило, достаточно вызвать настройку связи в основном файле плагина.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames } from '@dxtmisha/figma-code'

// Настройка слушателя для запросов из UI
FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(): Promise<UiFigmaFramesList>`}),` — Извлекает, форматирует и кэширует список фреймов верхнего уровня.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static send(): void`}),` — Инициализирует слушателей `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` для обработки запросов списка фреймов из UI.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(t.p,{children:`Массив объектов, представляющих фреймы верхнего уровня.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя фрейма.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Уникальный ID фрейма.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Uint8Array | string`}),` — Экспортированный скриншот фрейма в формате JPG.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};