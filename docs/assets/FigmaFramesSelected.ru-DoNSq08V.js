import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaFramesSelected - Управление выбранными фреймами`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmaframesselected`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`})]}),`
`,(0,c.jsx)(n.p,{children:`Статический утилитарный класс для управления списком идентификаторов фреймов, выбранных пользователем в контексте плагина. Он обеспечивает сохранение данных с использованием хранилища Figma и синхронизацию состояния между логикой плагина и пользовательским интерфейсом.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Постоянство данных`}),` — Список выбранных ID сохраняется через `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),`, что позволяет сохранять выборку между сессиями работы плагина.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Двусторонняя синхронизация`}),` — Метод `,(0,c.jsx)(n.code,{children:`send()`}),` инициализирует слушателей сообщений из UI, обеспечивая бесшовное обновление списка выбора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эффективное кэширование`}),` — Использует внутренний кэш для мгновенного доступа к списку без частого обращения к хранилищу.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Поскольку это статический класс, создание экземпляра не требуется. Как правило, достаточно вызвать настройку связи в основном файле плагина.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFramesSelected } from '@dxtmisha/figma-code'

// Настройка слушателей для сообщений из UI
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление-выборкой`,children:`Управление выборкой`}),`
`,(0,c.jsx)(n.p,{children:`Методы для взаимодействия с текущим списком идентификаторов выбранных фреймов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(id: string): boolean`}),` — Проверяет, находится ли конкретный ID фрейма в списке выбора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string[]`}),` — Получает текущий список выбранных ID (использует кэш).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(id: string): void`}),` — Добавляет ID фрейма в список и сохраняет изменения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(id: string): void`}),` — Удаляет ID фрейма из списка и сохраняет изменения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(id: string, selected: boolean): void`}),` — Добавляет или удаляет ID в зависимости от флага `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsx)(n.p,{children:`Методы для синхронизации состояния с интерфейсом.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(): void`}),` — Настраивает слушателей `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` для обработки обновлений выборки из UI.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};