import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/BroadcastMessage - Сообщения BroadcastChannel`}),`
`,(0,c.jsx)(n.h1,{id:`класс-broadcastmessage`,children:`Класс BroadcastMessage`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для работы с сообщениями между различными контекстами браузера (вкладками, окнами, iframe) с использованием API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`. Предоставляет удобный интерфейс для отправки и получения данных с автоматическим управлением жизненным циклом канала и обработкой ошибок.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Включает автоматическое префиксное именование для предотвращения конфликтов и интегрируется с `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` для мониторинга сбоев инициализации.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Межконтекстное взаимодействие`}),` — простая синхронизация данных между всеми окнами одного и того же источника (origin).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На основе колбэков`}),` — автоматическая обработка входящих сообщений и ошибок через регистрируемые функции обратного вызова.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность выполнения`}),` — встроенная проверка среды DOM предотвращает ошибки при серверном рендеринге (SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция каналов`}),` — автоматическое добавление уникального префикса к именам каналов через `,(0,c.jsx)(n.code,{children:`DataStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Строгая типизация`}),` — полная поддержка TypeScript дженериков для обеспечения целостности данных сообщения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Message = any`}),` — тип полезной нагрузки сообщения.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальное имя канала связи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова при получении сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова при ошибке сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — экземпляр центра ошибок (по умолчанию: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

const messenger = new BroadcastMessage<string>(
  'my-channel',
  (event) => console.log('Получено:', event.data)
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post(message: Message): this`}),` — Отправляет сообщение всем слушателям в том же канале.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroy(): this`}),` — Закрывает канал и прекращает прослушивание сообщений.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-и-доступ`,children:`Настройка и доступ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Возвращает базовый экземпляр `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: Function): this`}),` — Обновляет функцию обработки входящих сообщений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: Function): this`}),` — Обновляет функцию обработки ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`синхронизация-состояния-между-вкладками`,children:`Синхронизация состояния между вкладками`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Во всех вкладках приложения
const authChannel = new BroadcastMessage<string>('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.reload()
  }
})

// При выходе пользователя в одной из вкладок
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`обновление-обработчика-на-лету`,children:`Обновление обработчика на лету`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const messenger = new BroadcastMessage('data-sync')

messenger.setCallback((event) => {
  console.log('Данные получены:', event.data)
})

messenger.post({ id: 1, status: 'active' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};