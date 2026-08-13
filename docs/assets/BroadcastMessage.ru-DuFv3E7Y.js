import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/BroadcastMessage - Сообщения BroadcastChannel`}),`
`,(0,c.jsx)(t.h1,{id:`класс-broadcastmessage`,children:`Класс BroadcastMessage`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для работы с сообщениями между различными контекстами браузера (вкладками, окнами, iframe) с использованием API `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`. Предоставляет удобный интерфейс для отправки и получения данных с автоматическим управлением жизненным циклом канала и обработкой ошибок.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Включает автоматическое префиксное именование для предотвращения конфликтов и интегрируется с `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` для мониторинга сбоев инициализации.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Межконтекстное взаимодействие`}),` — простая синхронизация данных между всеми окнами одного и того же источника (origin).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`На основе колбэков`}),` — автоматическая обработка входящих сообщений и ошибок через регистрируемые функции обратного вызова.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность выполнения`}),` — встроенная проверка среды DOM предотвращает ошибки при серверном рендеринге (SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция каналов`}),` — автоматическое добавление уникального префикса к именам каналов через `,(0,c.jsx)(t.code,{children:`DataStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгая типизация`}),` — полная поддержка TypeScript дженериков для обеспечения целостности данных сообщения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Message = any`}),` — тип полезной нагрузки сообщения.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальное имя канала связи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова при получении сообщения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова при ошибке сообщения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCenter: ErrorCenterInstance`}),` — экземпляр центра ошибок (по умолчанию: `,(0,c.jsx)(t.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

const messenger = new BroadcastMessage<string>(
  'my-channel',
  (event) => console.log('Получено:', event.data)
)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post(message: Message): this`}),` — Отправляет сообщение всем слушателям в том же канале.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroy(): this`}),` — Закрывает канал и прекращает прослушивание сообщений.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-и-доступ`,children:`Настройка и доступ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Возвращает базовый экземпляр `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallback(callback: Function): this`}),` — Обновляет функцию обработки входящих сообщений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallbackError(callbackError: Function): this`}),` — Обновляет функцию обработки ошибок.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`синхронизация-состояния-между-вкладками`,children:`Синхронизация состояния между вкладками`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,(0,c.jsx)(t.h3,{id:`обновление-обработчика-на-лету`,children:`Обновление обработчика на лету`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const messenger = new BroadcastMessage('data-sync')

messenger.setCallback((event) => {
  console.log('Данные получены:', event.data)
})

messenger.post({ id: 1, status: 'active' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};