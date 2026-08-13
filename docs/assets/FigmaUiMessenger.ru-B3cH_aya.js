import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma/Classes/FigmaUiMessenger - Мессенджер UI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-figmauimessenger`,children:`Класс FigmaUiMessenger`}),`
`,(0,c.jsxs)(t.p,{children:[`Мессенджер для стороны UI Figma (frontend). Обрабатывает отправку сообщений в плагин Figma и прослушивание сообщений из плагина, используя API браузера `,(0,c.jsx)(t.code,{children:`postMessage`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Наследует `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaUiMessenger } from '@dxtmisha/figma'

const messenger = new FigmaUiMessenger()
  .make()
  .add('plugin-update', (data) => console.log('Плагин:', data))
`})}),`
`,(0,c.jsx)(t.h2,{id:`публичные-методы`,children:`Публичные методы`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализирует слушатель сообщений, используя событие `,(0,c.jsx)(t.code,{children:`message`}),` объекта `,(0,c.jsx)(t.code,{children:`window`}),`. Должен быть вызван один раз для начала приема сообщений из плагина (backend).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`add`,children:(0,c.jsx)(t.code,{children:`add`})}),`
`,(0,c.jsx)(t.p,{children:`Регистрирует слушатель для определенного типа сообщения, поступающего из плагина (backend).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Уникальный идентификатор типа сообщения для прослушивания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (message: Message) => void`}),` — функция, которую необходимо выполнить при получении соответствующего сообщения из плагина.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.add('selection-changed', (data) => {
  renderSidebar(data.nodes)
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`post`,children:(0,c.jsx)(t.code,{children:`post`})}),`
`,(0,c.jsx)(t.p,{children:`Отправляет сообщение в плагин Figma.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Идентификатор сообщения (тип).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message: Message`}),` — (Опционально) Полезные данные для отправки в плагин.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.post('create-rectangles', { count: 5, color: '#FF0000' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};