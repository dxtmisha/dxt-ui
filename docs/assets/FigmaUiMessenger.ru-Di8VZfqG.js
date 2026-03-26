import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma/Classes/FigmaUiMessenger - Мессенджер UI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmauimessenger`,children:`Класс FigmaUiMessenger`}),`
`,(0,c.jsxs)(n.p,{children:[`Мессенджер для стороны UI Figma (frontend). Обрабатывает отправку сообщений в плагин Figma и прослушивание сообщений из плагина, используя API браузера `,(0,c.jsx)(n.code,{children:`postMessage`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Наследует `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaUiMessenger } from '@dxtmisha/figma'

const messenger = new FigmaUiMessenger()
  .make()
  .add('plugin-update', (data) => console.log('Плагин:', data))
`})}),`
`,(0,c.jsx)(n.h2,{id:`публичные-методы`,children:`Публичные методы`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализирует слушатель сообщений, используя событие `,(0,c.jsx)(n.code,{children:`message`}),` объекта `,(0,c.jsx)(n.code,{children:`window`}),`. Должен быть вызван один раз для начала приема сообщений из плагина (backend).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Регистрирует слушатель для определенного типа сообщения, поступающего из плагина (backend).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Уникальный идентификатор типа сообщения для прослушивания.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (message: Message) => void`}),` — функция, которую необходимо выполнить при получении соответствующего сообщения из плагина.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.add('selection-changed', (data) => {
  renderSidebar(data.nodes)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Отправляет сообщение в плагин Figma.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Идентификатор сообщения (тип).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — (Опционально) Полезные данные для отправки в плагин.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post('create-rectangles', { count: 5, color: '#FF0000' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};