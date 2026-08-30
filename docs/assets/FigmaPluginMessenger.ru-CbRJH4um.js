import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Classes/FigmaPluginMessenger - Мессенджер плагина (Backend)`}),`
`,(0,c.jsxs)(t.h1,{id:`класс-figmapluginmessenger`,children:[`Класс `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Специализированный мессенджер для фоновой части (backend) плагина Figma. Он расширяет `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),`, обеспечивая надежный уровень связи между основной логикой плагина (сторона кода) и его пользовательским интерфейсом (UI).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Архитектура Синглтон`}),` — Используйте `,(0,c.jsx)(t.code,{children:`getInstance()`}),`, чтобы гарантировать, что все части плагина используют один и тот же центр связи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Упрощенный API`}),` — Оборачивает стандартные методы `,(0,c.jsx)(t.code,{children:`figma.ui.postMessage`}),` и `,(0,c.jsx)(t.code,{children:`figma.ui.onmessage`}),` в более удобный интерфейс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типобезопасность`}),` — Поддерживает генерики для сообщений, обеспечивая согласованность данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Доступ к единственному экземпляру осуществляется через статический метод `,(0,c.jsx)(t.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`связь`,children:`Связь`}),`
`,(0,c.jsx)(t.p,{children:`Методы для отправки и получения сообщений.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Отправляет сообщение определенного типа в UI Figma.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Наследуется) Регистрирует слушателя для сообщений из UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(type: string): this`}),` — (Наследуется) Удаляет слушателя.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};