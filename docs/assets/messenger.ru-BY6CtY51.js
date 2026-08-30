import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/3. Figma/1. Система мессенджеров`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-сообщениями-messenger`,children:`Работа с сообщениями (Messenger)`}),`
`,(0,c.jsxs)(t.p,{children:[`Механизм сообщений — центральное звено архитектуры Figma-плагинов. Поскольку «сторона кода» (Sandbox) и «сторона интерфейса» (UI) работают в изолированных средах, любое взаимодействие между ними требует использования системы `,(0,c.jsx)(t.code,{children:`postMessage`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Библиотека упрощает этот процесс, предоставляя стандартизированные мессенджеры и автоматическую маршрутизацию.`}),`
`,(0,c.jsx)(t.h2,{id:`инициализация-и-безопасность`,children:`Инициализация и безопасность`}),`
`,(0,c.jsxs)(t.p,{children:[`Плагины Figma работают в среде, где одновременно могут быть активны несколько плагинов. Чтобы предотвратить конфликты сообщений и гарантировать, что ваш UI обрабатывает данные только от вашего конкретного плагина, библиотека использует систему `,(0,c.jsx)(t.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Обе стороны (`,(0,c.jsx)(t.strong,{children:`Бэкенд`}),` и `,(0,c.jsx)(t.strong,{children:`Интерфейс`}),`) должны быть инициализированы одним и тем же уникальным идентификатором (обычно это `,(0,c.jsx)(t.code,{children:`id`}),` из вашего `,(0,c.jsx)(t.code,{children:`manifest.json`}),`) перед использованием мессенджеров.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// Необходимо вызвать на обеих сторонах (Code и UI)
FigmaPostCode.set(manifest.id)
`})}),`
`,(0,c.jsx)(t.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsxs)(t.p,{children:[`На стороне кода используется класс `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` для подписки на события и отправки данных в UI.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
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
`,(0,c.jsx)(t.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsxs)(t.p,{children:[`В интерфейсе используется зеркальный класс `,(0,c.jsx)(t.code,{children:`FigmaUiMessenger`}),` для взаимодействия с бэкендом.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};