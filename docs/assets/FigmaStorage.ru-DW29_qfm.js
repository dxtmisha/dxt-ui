import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaStorage - Работа с хранилищем документа`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmastorage`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Высокоуровневая обертка над API `,(0,c.jsx)(n.code,{children:`setPluginData`}),` и `,(0,c.jsx)(n.code,{children:`getPluginData`}),` в Figma. Позволяет сохранять структурированные данные непосредственно внутри документа Figma — либо глобально (`,(0,c.jsx)(n.code,{children:`figma.root`}),`), либо с привязкой к конкретным узлам. Эти данные синхронизируются между всеми пользователями, работающими с файлом.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Привязка к узлам`}),` — Данные могут быть привязаны к любому узлу Figma (фрейму, группе и т.д.) или к корню документа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Общий доступ`}),` — В отличие от клиентского хранилища, данные плагина сохраняются внутри файла `,(0,c.jsx)(n.code,{children:`.fig`}),` и доступны всем пользователям.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление экземплярами`}),` — Класс использует внутреннее кэширование, гарантируя, что повторные вызовы для одного и того же ключа на одном узле вернут один и тот же экземпляр.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая сериализация`}),` — Прозрачно обрабатывает преобразование сложных структур данных в JSON и обратно.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Доступ к экземпляру осуществляется через статические методы. Можно передать сам узел или его ID.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// Получение экземпляра для всего документа
const globalStorage = FigmaStorage.getInstance<object>('app-settings')

// Получение экземпляра для конкретного узла по его ID
const nodeStorage = await FigmaStorage.getInstanceById<string>('element-name', '1:123')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-данным`,children:`Доступ к данным`}),`
`,(0,c.jsx)(n.p,{children:`Методы для управления данными, хранящимися в документе.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T)): T | undefined`}),` — Извлекает данные. Устанавливает значение по умолчанию, если хранилище пустое.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Обновляет данные и возвращает новое значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Очищает данные плагина для указанного ключа на узле.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-экземплярами-статические`,children:`Управление экземплярами (Статические)`}),`
`,(0,c.jsx)(n.p,{children:`Методы для получения экземпляров класса.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance<T>(name: string, item: UiFigmaNode): FigmaStorage<T>`}),` — Возвращает экземпляр для конкретного узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>`}),` — Асинхронно получает экземпляр, используя ID узла.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};