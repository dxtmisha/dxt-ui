import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaPluginMessenger - Мессенджер плагина (Backend)`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmapluginmessenger`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированный мессенджер для фоновой части (backend) плагина Figma. Он расширяет `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),`, обеспечивая надежный уровень связи между основной логикой плагина (сторона кода) и его пользовательским интерфейсом (UI).`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Архитектура Синглтон`}),` — Используйте `,(0,c.jsx)(n.code,{children:`getInstance()`}),`, чтобы гарантировать, что все части плагина используют один и тот же центр связи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Упрощенный API`}),` — Оборачивает стандартные методы `,(0,c.jsx)(n.code,{children:`figma.ui.postMessage`}),` и `,(0,c.jsx)(n.code,{children:`figma.ui.onmessage`}),` в более удобный интерфейс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типобезопасность`}),` — Поддерживает генерики для сообщений, обеспечивая согласованность данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Доступ к единственному экземпляру осуществляется через статический метод `,(0,c.jsx)(n.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsx)(n.p,{children:`Методы для отправки и получения сообщений.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Отправляет сообщение определенного типа в UI Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Наследуется) Регистрирует слушателя для сообщений из UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(type: string): this`}),` — (Наследуется) Удаляет слушателя.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};