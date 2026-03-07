import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/BroadcastMessage - Сообщения BroadcastChannel"}),`
`,n.jsx(e.h1,{id:"класс-broadcastmessage",children:"Класс BroadcastMessage"}),`
`,n.jsxs(e.p,{children:["Класс для работы с сообщениями между вкладками или окнами с использованием API ",n.jsx(e.code,{children:"BroadcastChannel"}),". Предоставляет простой интерфейс для отправки и получения сообщений с поддержкой колбэков, обработки ошибок и проверкой среды выполнения."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Межконтекстное взаимодействие"})," — простая отправка сообщений между различными вкладками браузера, окнами или iframe одного и того же источника (origin)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"На основе колбэков"})," — регистрация функций обратного вызова для автоматической обработки входящих сообщений и ошибок."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Учет среды выполнения"})," — автоматическая проверка наличия DOM перед инициализацией, что предотвращает ошибки в средах, отличных от браузера."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Префиксы имен"})," — автоматическое добавление уникального префикса к именам каналов во избежание конфликтов с другими приложениями."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типизация"})," — поддержка универсальных типов (generics) TypeScript для полезной нагрузки сообщений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Прямой доступ"})," — предоставление доступа к базовому экземпляру ",n.jsx(e.code,{children:"BroadcastChannel"})," при необходимости."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создайте новый экземпляр ",n.jsx(e.code,{children:"BroadcastMessage"}),", указав имя канала и, при необходимости, функции обратного вызова для сообщений и ошибок."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// Инициализация с колбэками для сообщений и ошибок
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Получено:', event.data),
  (error) => console.error('Ошибка сообщения:', error)
)
`})}),`
`,n.jsx(e.h2,{id:"отправка-сообщений",children:"Отправка сообщений"}),`
`,n.jsx(e.h3,{id:"post",children:n.jsx(e.code,{children:"post"})}),`
`,n.jsx(e.p,{children:"Отправляет сообщение всем слушателям в том же канале."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"message: Message"})," — данные для отправки."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,n.jsx(e.h2,{id:"настройка-и-доступ",children:"Настройка и доступ"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getChannel(): BroadcastChannel | undefined"})," — Возвращает базовый экземпляр ",n.jsx(e.code,{children:"BroadcastChannel"})," (или ",n.jsx(e.code,{children:"undefined"})," вне среды браузера)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setCallback(callback: (event: MessageEvent<Message>) => void): this"})," — Обновляет или устанавливает функцию обратного вызова для получения сообщений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this"})," — Обновляет или устанавливает функцию обратного вызова для ошибок сообщений."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"синхронизация-состояния-между-вкладками",children:"Синхронизация состояния между вкладками"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,n.jsx(e.h3,{id:"простая-система-уведомлений-с-обработкой-ошибок",children:"Простая система уведомлений с обработкой ошибок"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const notifications = new BroadcastMessage(
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
`})})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
