import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Центр ошибок (Error Center)`}),`
`,(0,c.jsx)(n.h1,{id:`центр-ошибок`,children:`Центр ошибок`}),`
`,(0,c.jsxs)(n.p,{children:[`Модуль `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` предоставляет централизованную надежную систему для управления ошибками приложения. Он позволяет создавать словарные сопоставления кодов ошибок с понятными для пользователя сообщениями, распределять ошибки по группам и подключать целевые слушатели для их обработки там, где это необходимо.`]}),`
`,(0,c.jsx)(n.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,c.jsxs)(n.p,{children:[`Самый быстрый способ начать работу — использовать статический класс `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),`, который выступает в роли глобального синглтона для всего вашего приложения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

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
`,(0,c.jsxs)(n.h2,{id:`архитектура-errorcenter-против-errorcenterinstance`,children:[`Архитектура: `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` против `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`})]}),`
`,(0,c.jsx)(n.p,{children:`В основе модуля лежат два уровня: статическая обертка (мост) и базовый инстанцируемый движок. Понимание того, какой из них использовать, имеет решающее значение для поддержания чистой архитектуры.`}),`
`,(0,c.jsxs)(n.h3,{id:`когда-использовать-errorcenter-статическая-обертка`,children:[`Когда использовать `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` (Статическая обертка)`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` — это глобально доступный статический класс, который управляет ошибками на уровне приложения. Внутри себя он автоматически инициализирует один экземпляр `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Сценарии использования:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальные сетевые запросы:`}),` Перехват необработанных HTTP-статусов (`,(0,c.jsx)(n.code,{children:`401`}),`, `,(0,c.jsx)(n.code,{children:`403`}),`, `,(0,c.jsx)(n.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация приложения:`}),` Регистрация проблем с авторизацией или устареванием сессии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация микрофронтендов:`}),` Глобальный обмен контекстом ошибок без необходимости передачи пропсов или инъекции зависимостей.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`когда-использовать-new-errorcenterinstance`,children:[`Когда использовать `,(0,c.jsx)(n.code,{children:`new ErrorCenterInstance()`})]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` — это базовый движок, который фактически управляет состояниями и обработчиками. Вы можете создать его экземпляр напрямую, чтобы сформировать `,(0,c.jsx)(n.strong,{children:`изолированные`}),` зоны управления ошибками.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Сценарии использования:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сложные формы и валидации:`}),` Конкретный компонент формы должен отслеживать и реагировать исключительно на свои локальные ошибки валидации, не загрязняя глобальные логи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Модульные подсистемы:`}),` Независимые плагины, виджеты или сторонние интеграции, работающие внутри приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Модульное тестирование:`}),` Безопасное мокирование и проверка поведения обработчиков ошибок без побочных эффектов между наборами тестов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};