import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/8. Межвкладочные сообщения`}),`
`,(0,c.jsx)(t.h1,{id:`межвкладочные-сообщения`,children:`Межвкладочные сообщения`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),` является удобной оберткой над нативным API `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`, позволяя синхронизировать данные и передавать сообщения между различными вкладками или окнами браузера в рамках одного домена.`]}),`
`,(0,c.jsx)(t.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(t.p,{children:`Для начала работы создайте экземпляр класса, указав имя канала и функцию обратного вызова (callback) для обработки входящих сообщений.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Инициализация канала
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Получено сообщение:', event.data)
})

// 2. Отправка сообщения в другие вкладки
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(t.p,{children:`Библиотека автоматически добавляет уникальный префикс к имени канала для изоляции сообщений разных сессий приложения.`}),`
`,(0,c.jsx)(t.h2,{id:`обработка-сообщений`,children:`Обработка сообщений`}),`
`,(0,c.jsx)(t.p,{children:`Вы можете установить или обновить обработчики сообщений после инициализации с помощью следующих методов:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallback(callback)`}),` — устанавливает основной обработчик входящих сообщений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallbackError(callback)`}),` — устанавливает обработчик ошибок сообщений (например, при проблемах с десериализацией).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`дополнительные-возможности`,children:`Дополнительные возможности`}),`
`,(0,c.jsxs)(t.p,{children:[`Если вам нужен прямой доступ к нативному инстансу `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`, используйте метод `,(0,c.jsx)(t.code,{children:`getChannel()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Имя нативного канала:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};