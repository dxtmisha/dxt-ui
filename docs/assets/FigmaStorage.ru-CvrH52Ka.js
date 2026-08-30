import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Classes/FigmaStorage - Работа с хранилищем документа`}),`
`,(0,c.jsxs)(t.h1,{id:`класс-figmastorage`,children:[`Класс `,(0,c.jsx)(t.code,{children:`FigmaStorage`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Высокоуровневая обертка над API `,(0,c.jsx)(t.code,{children:`setPluginData`}),` и `,(0,c.jsx)(t.code,{children:`getPluginData`}),` в Figma. Позволяет сохранять структурированные данные непосредственно внутри документа Figma — либо глобально (`,(0,c.jsx)(t.code,{children:`figma.root`}),`), либо с привязкой к конкретным узлам. Эти данные синхронизируются между всеми пользователями, работающими с файлом.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Привязка к узлам`}),` — Данные могут быть привязаны к любому узлу Figma (фрейму, группе и т.д.) или к корню документа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Общий доступ`}),` — В отличие от клиентского хранилища, данные плагина сохраняются внутри файла `,(0,c.jsx)(t.code,{children:`.fig`}),` и доступны всем пользователям.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление экземплярами`}),` — Класс использует внутреннее кэширование, гарантируя, что повторные вызовы для одного и того же ключа на одном узле вернут один и тот же экземпляр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая сериализация`}),` — Прозрачно обрабатывает преобразование сложных структур данных в JSON и обратно.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Доступ к экземпляру осуществляется через статические методы. Можно передать сам узел или его ID.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// Получение экземпляра для всего документа
const globalStorage = FigmaStorage.getInstance<object>('app-settings')

// Получение экземпляра для конкретного узла по его ID
const nodeStorage = await FigmaStorage.getInstanceById<string>('element-name', '1:123')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ-к-данным`,children:`Доступ к данным`}),`
`,(0,c.jsx)(t.p,{children:`Методы для управления данными, хранящимися в документе.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(defaultValue?: T | (() => T)): T | undefined`}),` — Извлекает данные. Устанавливает значение по умолчанию, если хранилище пустое.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Обновляет данные и возвращает новое значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(): this`}),` — Очищает данные плагина для указанного ключа на узле.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление-экземплярами-статические`,children:`Управление экземплярами (Статические)`}),`
`,(0,c.jsx)(t.p,{children:`Методы для получения экземпляров класса.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getInstance<T>(name: string, item: UiFigmaNode): FigmaStorage<T>`}),` — Возвращает экземпляр для конкретного узла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>`}),` — Асинхронно получает экземпляр, используя ID узла.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};