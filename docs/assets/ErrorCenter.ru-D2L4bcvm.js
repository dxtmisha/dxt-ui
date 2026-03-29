import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenter - Управление ошибками`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenter`,children:`ErrorCenter`}),`
`,(0,c.jsxs)(n.p,{children:[`Статическая обертка для `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),`, предоставляющая централизованное управление хранением, извлечением и обработкой ошибок. Он выступает в роли глобального реестра причин ошибок и предоставляет механизм для регистрации и вызова пользовательских обработчиков для различных групп ошибок.`]}),`
`,(0,c.jsx)(n.p,{children:`Класс следует паттерну "Статического моста", делегируя все операции синглтон-экземпляру, сохраняя при этом чистый, глобально доступный API.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический доступ`}),` — глобальный статус к управлению ошибками без необходимости ручного создания экземпляров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованный реестр`}),` — хранит стандартизированные причины ошибок для единообразной обратной связи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Групповая обработка`}),` — позволяет регистрировать несколько функций обратного вызова для конкретных категорий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — методы добавления причин и обработчиков поддерживают цепочки вызовов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Предустановленные значения`}),` — по умолчанию настроен стандартными сетевыми ошибками (`,(0,c.jsx)(n.code,{children:`timeout`}),`, `,(0,c.jsx)(n.code,{children:`offline`}),`, `,(0,c.jsx)(n.code,{children:`notFound`}),` и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-проверки`,children:`Методы проверки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Проверяет наличие причины ошибки в реестре.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Извлекает полный объект причины ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`получение-инстанса`,children:`Получение инстанса`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Возвращает базовый экземпляр, используемый оберткой.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Добавляет одну причину ошибки в хранилище.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Добавляет список причин ошибок в реестр.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Регистрирует функцию обратного вызова для группы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Регистрирует набор обработчиков.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-действий`,children:`Методы действий`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Запускает обработку указанной ошибки. Метод ищет предварительно зарегистрированные данные для указанного кода ошибки, объединяет их с входной причиной (`,(0,c.jsx)(n.code,{children:`cause`}),`), выполняет все зарегистрированные обработчики для этой группы и выводит ошибку в консоль.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Причина для запуска. Код и группа обязательны, если причина была зарегистрирована ранее через `,(0,c.jsx)(n.code,{children:`add()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`Основной объект, используемый для определения причины ошибки.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — категория/группа, к которой относится ошибка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — уникальный идентификатор ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — понятное человеку название ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — подробное описание ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — необязательный объект для дополнительных данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Простое определение типа для категорий ошибок: `,(0,c.jsx)(n.code,{children:`string | undefined`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`стандартные-причины-ошибок`,children:`Стандартные причины ошибок`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` автоматически наполняется следующими стандартными сетевыми причинами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unknown`}),` — `,(0,c.jsx)(n.strong,{children:`Неизвестная ошибка`}),`: Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout`}),` — `,(0,c.jsx)(n.strong,{children:`Тайм-аут запроса`}),`: Запрос занял слишком много времени. Пожалуйста, проверьте соединение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`offline`}),` — `,(0,c.jsx)(n.strong,{children:`Нет соединения`}),`: Вы находитесь в автономном режиме. Пожалуйста, проверьте интернет-соединение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notFound`}),` — `,(0,c.jsx)(n.strong,{children:`Не найдено`}),`: Запрошенный ресурс не найден.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`server`}),` — `,(0,c.jsx)(n.strong,{children:`Ошибка сервера`}),`: Произошла внутренняя ошибка сервера.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Настройка глобальных обработчиков
ErrorCenter.addHandler('api', (cause) => {
  notification.error({
    title: cause.label,
    message: cause.message
  })
})

// 2. Регистрация специфических причин ошибок
ErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Сессия истекла',
  message: 'Ваша сессия истекла. Пожалуйста, войдите снова.'
})

// 3. Вызов ошибки через реестр
ErrorCenter.on({ group: 'auth', code: 'token_expired' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};