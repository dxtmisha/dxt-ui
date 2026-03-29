import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenterHandler - Управление обработчиками`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterhandler`,children:`ErrorCenterHandler`}),`
`,(0,c.jsx)(n.p,{children:`Основной вспомогательный класс для управления и вызова обработчиков ошибок на основе определенных групп. Он позволяет реализовывать гибкие стратегии реагирования на ошибки, такие как отображение глобальных уведомлений для ошибок API при выполнении скрытого логирования для фоновых задач.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регистрация обработчиков`}),` — Удобное добавление нескольких функций обратного вызова к конкретным группам.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Групповая фильтрация`}),` — Возможность нацеливаться на конкретные категории ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальный обработчик`}),` — Поддержка группы `,(0,c.jsx)(n.code,{children:`undefined`}),`, которая перехватывает любую ошибку без специфического обработчика.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Последовательное выполнение`}),` — Запускает все зарегистрированные функции в порядке их добавления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интегрированное логирование`}),` — Автоматически выводит детали ошибки в консоль браузера.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-проверки`,children:`Методы проверки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Проверяет, зарегистрированы ли обработчики для группы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Извлекает элемент обработчика для группы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Добавляет одну функцию обратного вызова в группу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Регистрирует пакет обработчиков.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-действий`,children:`Методы действий`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Запускает все зарегистрированные обработчики для группы предоставленной причины ошибки. Если специфические обработчики не найдены, метод переходит к обработчикам, зарегистрированным для группы `,(0,c.jsx)(n.code,{children:`undefined`}),` (если они есть). Всегда выводит детали ошибки в консоль внутри.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Детали ошибки для передачи обработчикам.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsx)(n.p,{children:`Сигнатура функции для обратных вызовов обработки ошибок.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — получает объединенный объект причины ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlerManager = new ErrorCenterHandler()

// 1. Регистрация обработчика конкретной группы
handlerManager.add('api', (cause) => {
  console.log('[API Handler]', cause.message)
})

// 2. Регистрация глобального обработчика
handlerManager.add(undefined, (cause) => {
  console.error('[Global Fallback]', cause.code)
})

// 3. Вызов ошибки
handlerManager.on({
  group: 'api',
  code: '500',
  message: 'Внутренняя ошибка сервера'
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};