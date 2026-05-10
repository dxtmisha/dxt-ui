import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/# Система мессенджеров`}),`
`,(0,c.jsx)(n.h1,{id:`работа-с-сообщениями-messenger`,children:`Работа с сообщениями (Messenger)`}),`
`,(0,c.jsxs)(n.p,{children:[`Механизм сообщений — центральное звено архитектуры Figma-плагинов. Поскольку «сторона кода» (Sandbox) и «сторона интерфейса» (UI) работают в изолированных средах, любое взаимодействие между ними требует использования системы `,(0,c.jsx)(n.code,{children:`postMessage`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Библиотека упрощает этот процесс, предоставляя стандартизированные мессенджеры и автоматическую маршрутизацию.`}),`
`,(0,c.jsx)(n.h2,{id:`инициализация-и-безопасность`,children:`Инициализация и безопасность`}),`
`,(0,c.jsxs)(n.p,{children:[`Плагины Figma работают в среде, где одновременно могут быть активны несколько плагинов. Чтобы предотвратить конфликты сообщений и гарантировать, что ваш UI обрабатывает данные только от вашего конкретного плагина, библиотека использует систему `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Обе стороны (`,(0,c.jsx)(n.strong,{children:`Бэкенд`}),` и `,(0,c.jsx)(n.strong,{children:`Интерфейс`}),`) должны быть инициализированы одним и тем же уникальным идентификатором (обычно это `,(0,c.jsx)(n.code,{children:`id`}),` из вашего `,(0,c.jsx)(n.code,{children:`manifest.json`}),`) перед использованием мессенджеров.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// Необходимо вызвать на обеих сторонах (Code и UI)
FigmaPostCode.set(manifest.id)
`})}),`
`,(0,c.jsx)(n.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`На стороне кода используется класс `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` для подписки на события и отправки данных в UI.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaPluginMessenger } from '@dxtmisha/figma-code'
import manifest from '../manifest.json'

// 1. Инициализация идентификации
FigmaPostCode.set(manifest.id)

// 2. Работа с мессенджером
const messenger = FigmaPluginMessenger.getInstance()

messenger.add('my-action', (data) => {
  console.log('Данные получены:', data)
  messenger.post('my-action', { status: 'success' })
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsxs)(n.p,{children:[`В интерфейсе используется зеркальный класс `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),` для взаимодействия с бэкендом.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaUiMessenger } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// 1. Инициализация идентификации (тот же ID, что и в бэкенде)
FigmaPostCode.set(manifest.id)

// 2. Работа с мессенджером
const messenger = FigmaUiMessenger.getInstance()

messenger.post('my-action', { payload: 'hello' })

messenger.add('my-action', (result) => {
  console.log('Результат:', result)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};