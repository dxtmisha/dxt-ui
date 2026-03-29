import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenterInstance - Экземпляр ошибок`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterinstance`,children:`ErrorCenterInstance`}),`
`,(0,c.jsx)(n.p,{children:`Класс для управления хранилищем ошибок и их обработкой внутри конкретного экземпляра. Он обеспечивает основную логику для ведения реестра причин ошибок и организации уведомлений о них через менеджер обработчиков.`}),`
`,(0,c.jsxs)(n.p,{children:[`Хотя `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` предоставляет глобальный статический мост, `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` можно использовать напрямую для изолированного отслеживания ошибок или создания пользовательских систем управления.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изолированное хранилище`}),` — Ведение локального списка причин ошибок отдельно от глобального состояния.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объединение данных`}),` — Автоматически дополняет возникающие ошибки данными о заголовках и сообщениях из реестра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Делегирование обработки`}),` — Использует выделенный `,(0,c.jsx)(n.code,{children:`ErrorCenterHandler`}),` для выполнения функций обратного вызова.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Предопределенные причины`}),` — Может быть инициализирован со списком причин ошибок по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Поддерживает удобную конфигурацию для добавления причин и обработчиков.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-проверки`,children:`Методы проверки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Проверяет, существует ли причина с конкретным кодом в реестре.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Извлекает сохраненный объект причины ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Добавляет одну причину ошибки в хранилище экземпляра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Добавляет список причин ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Регистрирует обработчик для конкретной группы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Регистрирует список обработчиков.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-действий`,children:`Методы действий`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Запускает обработку ошибки. Метод ищет предварительно зарегистрированные данные для указанного кода ошибки, объединяет их с входной причиной (`,(0,c.jsx)(n.code,{children:`cause`}),`) и передает внутреннему обработчику.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Информация об ошибке для запуска.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`Основной объект, используемый для определения причины ошибки в этом экземпляре.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — категория/группа, к которой относится ошибка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — уникальный идентификатор ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — понятное человеку название ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — подробное описание ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — необязательный объект для дополнительных данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`руководство-управление-причинами-ошибок-и-обработчиками`,children:`Руководство: Управление причинами ошибок и обработчиками`}),`
`,(0,c.jsxs)(n.p,{children:[`Использование `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` включает три основных шага: определение причин ошибок, настройка слушателей (обработчиков) и вызов ошибок.`]}),`
`,(0,c.jsx)(n.h3,{id:`1-добавление-причин-ошибок`,children:`1. Добавление причин ошибок`}),`
`,(0,c.jsx)(n.p,{children:`Причины ошибок действуют как словарь для вашего приложения. Предварительно регистрируя их, вы обеспечиваете единообразие заголовков и сообщений по всей платформе.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance()

// Регистрация одной причины ошибки
myErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Сессия истекла',
  message: 'Срок действия вашей сессии истек. Пожалуйста, войдите снова.'
})

// Регистрация нескольких причин сразу
myErrorCenter.addList([
  { group: 'api', code: '404', label: 'Не найдено', message: 'Запрошенные данные не существуют.' },
  { group: 'api', code: '500', label: 'Ошибка сервера', message: 'На сервере что-то пошло не так.' }
])
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-добавление-слушателей`,children:`2. Добавление слушателей`}),`
`,(0,c.jsxs)(n.p,{children:[`Слушатели (обработчики) — это функции обратного вызова, которые выполняются при возникновении определенной ошибки. Вы назначаете слушателей для конкретной группы (`,(0,c.jsx)(n.code,{children:`group`}),`), чтобы они реагировали только на соответствующие ошибки.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Добавление слушателя специально для группы "auth"
myErrorCenter.addHandler('auth', (cause) => {
  // Например, перенаправление на страницу входа или показ уведомления
  console.log(\`[ОШИБКА АВТОРИЗАЦИИ] \${cause.label}: \${cause.message}\`)
})

// Добавление слушателя для группы "api"
myErrorCenter.addHandler('api', (cause) => {
  // Например, показ всплывающего уведомления
  console.error(\`[ОШИБКА API \${cause.code}] \${cause.message}\`)
})

// Добавление глобального запасного слушателя (перехватывает ошибки без специфического обработчика)
myErrorCenter.addHandler(undefined, (cause) => {
  console.warn(\`[НЕИЗВЕСТНАЯ ОШИБКА]\`, cause)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-вызов-ошибок`,children:`3. Вызов ошибок`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда в вашем приложении происходит ошибка, вы запускаете процесс обработки с помощью метода `,(0,c.jsx)(n.code,{children:`on`}),`. Вам нужно указать только код (`,(0,c.jsx)(n.code,{children:`code`}),`) и группу (`,(0,c.jsx)(n.code,{children:`group`}),`). `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` автоматически объединит это с предварительно зарегистрированными данными (`,(0,c.jsx)(n.code,{children:`label`}),` и `,(0,c.jsx)(n.code,{children:`message`}),`) перед передачей слушателям.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Запуск ошибки авторизации
// Слушатели для "auth" получат полный объект ErrorCenterCauseItem
myErrorCenter.on({
  group: 'auth',
  code: 'token_expired'
})

// Запуск незарегистрированной ошибки (сработает обработчик группы undefined)
myErrorCenter.on({
  group: 'database',
  code: 'connection_lost',
  message: 'Потеряно соединение с БД.' // Данные можно передавать "на лету"
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};