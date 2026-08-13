import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiHeaders - Заголовки API-запросов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apiheaders`,children:`Класс ApiHeaders`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для управления и слияния заголовков HTTP-запросов. Он обрабатывает заголовки по умолчанию для всего приложения, пользовательские заголовки для конкретных запросов и автоматическое назначение `,(0,c.jsx)(t.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiHeaders`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для управления HTTP-заголовками. В большинстве случаев рекомендуется определять глобальные заголовки через параметр `,(0,c.jsx)(t.code,{children:`headers`}),` в глобальной конфигурации `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Заголовки по умолчанию`}),` — Установите глобальные заголовки, такие как `,(0,c.jsx)(t.code,{children:`Authorization`}),` или `,(0,c.jsx)(t.code,{children:`X-App-Version`}),`, один раз.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамический Content-Type`}),` — Автоматически управляет заголовком `,(0,c.jsx)(t.code,{children:`Content-Type`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасное слияние`}),` — Объединяет несколько источников заголовков без изменения исходных объектов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Валидация`}),` — Гарантирует, что для заголовков используются только допустимые объекты.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объединяет заголовки по умолчанию с пользовательскими и добавляет `,(0,c.jsx)(t.code,{children:`Content-Type`}),`. Если параметр `,(0,c.jsx)(t.code,{children:`value`}),` равен `,(0,c.jsx)(t.code,{children:`null`}),`, заголовки отключаются.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Record<string, string> | null`}),` — Пользовательские заголовки для слияния.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | undefined | null`}),` — Значение `,(0,c.jsx)(t.code,{children:`Content-Type`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Record<string, string> | undefined`}),` — Объект объединенных заголовков.`]}),`
`,(0,c.jsx)(t.h4,{id:`getbyrequest`,children:(0,c.jsx)(t.code,{children:`getByRequest`})}),`
`,(0,c.jsxs)(t.p,{children:[`Специализированная версия метода `,(0,c.jsx)(t.code,{children:`get`}),`, которая корректирует заголовки в зависимости от типа запроса. В частности, она гарантирует, что `,(0,c.jsx)(t.code,{children:`Content-Type`}),` не устанавливается вручную для `,(0,c.jsx)(t.code,{children:`FormData`}),`, чтобы обеспечить корректную генерацию `,(0,c.jsx)(t.code,{children:`boundary`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: ApiFetch['request']`}),` — Данные запроса (Объект, FormData или Строка).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Record<string, string> | null`}),` — Пользовательские заголовки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Желаемый `,(0,c.jsx)(t.code,{children:`Content-Type`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Record<string, string> | undefined`}),` — Обработанный объект заголовков.`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(headers: Record<string, string>): this`}),` — Устанавливает или обновляет заголовки по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apiheadersvalue`,children:(0,c.jsx)(t.code,{children:`ApiHeadersValue`})}),`
`,(0,c.jsx)(t.p,{children:`Обычный объект, представляющий HTTP-заголовки.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key: string]: string`}),` — Пары ключ-значение, где ключ — имя заголовка, а значение — содержимое заголовка.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};