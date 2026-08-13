import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/# Центр ошибок (Error Center)`}),`
`,(0,c.jsx)(t.h1,{id:`центр-ошибок`,children:`Центр ошибок`}),`
`,(0,c.jsxs)(t.p,{children:[`Модуль `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` предоставляет централизованную надежную систему для управления ошибками приложения. Он позволяет создавать словарные сопоставления кодов ошибок с понятными для пользователя сообщениями, распределять ошибки по группам и подключать целевые слушатели для их обработки там, где это необходимо.`]}),`
`,(0,c.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,c.jsxs)(t.p,{children:[`Самый быстрый способ начать работу — использовать статический класс `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`, который выступает в роли глобального синглтона для всего вашего приложения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Добавление определений ошибок
ErrorCenter.add({
  group: 'network',
  code: '503',
  label: 'Сервис недоступен',
  message: 'В настоящее время сервер не может обработать запрос.'
})

// 2. Подключение слушателя к определенным группам ошибок
ErrorCenter.addHandler('network', (cause) => {
  // Выполнение реакции UI (например, показ уведомления)
  alert(\`[СЕТЕВАЯ ОШИБКА] \${cause.label}: \${cause.message}\`)
})

// 3. Вызов ошибки в любом месте кода приложения
ErrorCenter.on({ group: 'network', code: '503' })
`})}),`
`,(0,c.jsxs)(t.h2,{id:`архитектура-errorcenter-против-errorcenterinstance`,children:[`Архитектура: `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` против `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance`})]}),`
`,(0,c.jsx)(t.p,{children:`В основе модуля лежат два уровня: статическая обертка (мост) и базовый инстанцируемый движок. Понимание того, какой из них использовать, имеет решающее значение для поддержания чистой архитектуры.`}),`
`,(0,c.jsxs)(t.h3,{id:`когда-использовать-errorcenter-статическая-обертка`,children:[`Когда использовать `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` (Статическая обертка)`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenter`}),` — это глобально доступный статический класс, который управляет ошибками на уровне приложения. Внутри себя он автоматически инициализирует один экземпляр `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальные сетевые запросы:`}),` Перехват необработанных HTTP-статусов (`,(0,c.jsx)(t.code,{children:`401`}),`, `,(0,c.jsx)(t.code,{children:`403`}),`, `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация приложения:`}),` Регистрация проблем с авторизацией или устареванием сессии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация микрофронтендов:`}),` Глобальный обмен контекстом ошибок без необходимости передачи пропсов или инъекции зависимостей.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`когда-использовать-new-errorcenterinstance`,children:[`Когда использовать `,(0,c.jsx)(t.code,{children:`new ErrorCenterInstance()`})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),` — это базовый движок, который фактически управляет состояниями и обработчиками. Вы можете создать его экземпляр напрямую, чтобы сформировать `,(0,c.jsx)(t.strong,{children:`изолированные`}),` зоны управления ошибками.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сложные формы и валидации:`}),` Конкретный компонент формы должен отслеживать и реагировать исключительно на свои локальные ошибки валидации, не загрязняя глобальные логи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модульные подсистемы:`}),` Независимые плагины, виджеты или сторонние интеграции, работающие внутри приложения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модульное тестирование:`}),` Безопасное мокирование и проверка поведения обработчиков ошибок без побочных эффектов между наборами тестов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

// Изолированная среда ошибок для конкретного модуля
const formErrorCenter = new ErrorCenterInstance()

formErrorCenter.add({
  group: 'validation',
  code: 'missing_field',
  message: 'Это поле обязательно для заполнения.'
})

formErrorCenter.addHandler('validation', (cause) => {
  // Обновляет локальное состояние UI специально для этой формы
  showLocalFieldError(cause)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};