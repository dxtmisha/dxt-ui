import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Classes/FigmaFramesSelected - Управление выбранными фреймами`}),`
`,(0,c.jsxs)(t.h1,{id:`класс-figmaframesselected`,children:[`Класс `,(0,c.jsx)(t.code,{children:`FigmaFramesSelected`})]}),`
`,(0,c.jsx)(t.p,{children:`Статический утилитарный класс для управления списком идентификаторов фреймов, выбранных пользователем в контексте плагина. Он обеспечивает сохранение данных с использованием хранилища Figma и синхронизацию состояния между логикой плагина и пользовательским интерфейсом.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Постоянство данных`}),` — Список выбранных ID сохраняется через `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),`, что позволяет сохранять выборку между сессиями работы плагина.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Двусторонняя синхронизация`}),` — Метод `,(0,c.jsx)(t.code,{children:`send()`}),` инициализирует слушателей сообщений из UI, обеспечивая бесшовное обновление списка выбора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Эффективное кэширование`}),` — Использует внутренний кэш для мгновенного доступа к списку без частого обращения к хранилищу.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Поскольку это статический класс, создание экземпляра не требуется. Как правило, достаточно вызвать настройку связи в основном файле плагина.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaFramesSelected } from '@dxtmisha/figma-code'

// Настройка слушателей для сообщений из UI
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление-выборкой`,children:`Управление выборкой`}),`
`,(0,c.jsx)(t.p,{children:`Методы для взаимодействия с текущим списком идентификаторов выбранных фреймов.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(id: string): boolean`}),` — Проверяет, находится ли конкретный ID фрейма в списке выбора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string[]`}),` — Получает текущий список выбранных ID (использует кэш).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(id: string): void`}),` — Добавляет ID фрейма в список и сохраняет изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(id: string): void`}),` — Удаляет ID фрейма из списка и сохраняет изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(id: string, selected: boolean): void`}),` — Добавляет или удаляет ID в зависимости от флага `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsx)(t.p,{children:`Методы для синхронизации состояния с интерфейсом.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(): void`}),` — Настраивает слушателей `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` для обработки обновлений выборки из UI.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};