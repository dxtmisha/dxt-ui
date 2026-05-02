import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/# Межвкладочные сообщения`}),`
`,(0,c.jsx)(n.h1,{id:`межвкладочные-сообщения`,children:`Межвкладочные сообщения`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),` является удобной оберткой над нативным API `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`, позволяя синхронизировать данные и передавать сообщения между различными вкладками или окнами браузера в рамках одного домена.`]}),`
`,(0,c.jsx)(n.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.p,{children:`Для начала работы создайте экземпляр класса, указав имя канала и функцию обратного вызова (callback) для обработки входящих сообщений.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Инициализация канала
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Получено сообщение:', event.data)
})

// 2. Отправка сообщения в другие вкладки
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(n.p,{children:`Библиотека автоматически добавляет уникальный префикс к имени канала для изоляции сообщений разных сессий приложения.`}),`
`,(0,c.jsx)(n.h2,{id:`обработка-сообщений`,children:`Обработка сообщений`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете установить или обновить обработчики сообщений после инициализации с помощью следующих методов:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback)`}),` — устанавливает основной обработчик входящих сообщений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callback)`}),` — устанавливает обработчик ошибок сообщений (например, при проблемах с десериализацией).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`дополнительные-возможности`,children:`Дополнительные возможности`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вам нужен прямой доступ к нативному инстансу `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`, используйте метод `,(0,c.jsx)(n.code,{children:`getChannel()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Имя нативного канала:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};