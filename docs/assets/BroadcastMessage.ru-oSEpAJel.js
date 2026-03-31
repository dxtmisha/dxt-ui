import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/BroadcastMessage - Сообщения BroadcastChannel`}),`
`,(0,c.jsx)(n.h1,{id:`класс-broadcastmessage`,children:`Класс BroadcastMessage`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для работы с сообщениями между вкладками или окнами с использованием API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`. Предоставляет простой интерфейс для отправки и получения сообщений с поддержкой колбэков, обработки ошибок и проверкой среды выполнения.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Межконтекстное взаимодействие`}),` — простая отправка сообщений между различными вкладками браузера, окнами или iframe одного и того же источника (origin).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На основе колбэков`}),` — регистрация функций обратного вызова для автоматической обработки входящих сообщений и ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Учет среды выполнения`}),` — автоматическая проверка наличия DOM перед инициализацией, что предотвращает ошибки в средах, отличных от браузера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Префиксы имен`}),` — автоматическое добавление уникального префикса к именам каналов во избежание конфликтов с другими приложениями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизация`}),` — поддержка универсальных типов (generics) TypeScript для полезной нагрузки сообщений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с ErrorCenter`}),` — централизованная отчетность об ошибках в случае сбоя инициализации `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Прямой доступ`}),` — предоставление доступа к базовому экземпляру `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` при необходимости.`]}),`
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
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова, выполняемая при получении сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — функция обратного вызова, выполняемая при возникновении ошибки сообщения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — экземпляр центра ошибок для вызова событий (по умолчанию: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// 1. Инициализация с обработкой входящих данных
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Получено:', event.data),
  (error) => console.error('Ошибка:', error)
)

// 2. Отправка сообщения
messenger.post({ type: 'UPDATE', value: 100 })
`})}),`
`,(0,c.jsx)(n.h2,{id:`отправка-сообщений`,children:`Отправка сообщений`}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Отправляет сообщение всем слушателям в том же канале.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — данные для отправки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — для цепочки вызовов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-доступ`,children:`Настройка и доступ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Возвращает базовый экземпляр `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` (или `,(0,c.jsx)(n.code,{children:`undefined`}),` вне среды браузера).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: (event: MessageEvent<Message>) => void): this`}),` — Обновляет или устанавливает функцию обратного вызова для получения сообщений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this`}),` — Обновляет или устанавливает функцию обратного вызова для ошибок сообщений.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`синхронизация-состояния-между-вкладками`,children:`Синхронизация состояния между вкладками`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Во вкладке А и вкладке Б
const authChannel = new BroadcastMessage('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.href = '/login'
  }
})

// При выходе пользователя из системы во вкладке А
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`простая-система-уведомлений-с-обработкой-ошибок`,children:`Простая система уведомлений с обработкой ошибок`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const notifications = new BroadcastMessage(
  'notifications',
  (event) => showToast(event.data.message),
  (error) => console.error('Не удалось получить уведомление:', error)
)

// Обновление обработчика ошибок позже
notifications.setCallbackError((error) => {
  logToService(error)
})

// Вызов уведомления из любой части приложения
notifications.post({ message: 'Получено новое сообщение!' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};