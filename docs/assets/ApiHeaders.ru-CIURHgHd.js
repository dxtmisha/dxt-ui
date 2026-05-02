import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiHeaders - Заголовки API-запросов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apiheaders`,children:`Класс ApiHeaders`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для управления и слияния заголовков HTTP-запросов. Он обрабатывает заголовки по умолчанию для всего приложения, пользовательские заголовки для конкретных запросов и автоматическое назначение `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiHeaders`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для управления HTTP-заголовками. В большинстве случаев рекомендуется определять глобальные заголовки через параметр `,(0,c.jsx)(n.code,{children:`headers`}),` в глобальной конфигурации `,(0,c.jsx)(n.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Заголовки по умолчанию`}),` — Установите глобальные заголовки, такие как `,(0,c.jsx)(n.code,{children:`Authorization`}),` или `,(0,c.jsx)(n.code,{children:`X-App-Version`}),`, один раз.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамический Content-Type`}),` — Автоматически управляет заголовком `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное слияние`}),` — Объединяет несколько источников заголовков без изменения исходных объектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Валидация`}),` — Гарантирует, что для заголовков используются только допустимые объекты.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объединяет заголовки по умолчанию с пользовательскими и добавляет `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. Если параметр `,(0,c.jsx)(n.code,{children:`value`}),` равен `,(0,c.jsx)(n.code,{children:`null`}),`, заголовки отключаются.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Record<string, string> | null`}),` — Пользовательские заголовки для слияния.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | undefined | null`}),` — Значение `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Record<string, string> | undefined`}),` — Объект объединенных заголовков.`]}),`
`,(0,c.jsx)(n.h4,{id:`getbyrequest`,children:(0,c.jsx)(n.code,{children:`getByRequest`})}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированная версия метода `,(0,c.jsx)(n.code,{children:`get`}),`, которая корректирует заголовки в зависимости от типа запроса. В частности, она гарантирует, что `,(0,c.jsx)(n.code,{children:`Content-Type`}),` не устанавливается вручную для `,(0,c.jsx)(n.code,{children:`FormData`}),`, чтобы обеспечить корректную генерацию `,(0,c.jsx)(n.code,{children:`boundary`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch['request']`}),` — Данные запроса (Объект, FormData или Строка).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Record<string, string> | null`}),` — Пользовательские заголовки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Желаемый `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Record<string, string> | undefined`}),` — Обработанный объект заголовков.`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(headers: Record<string, string>): this`}),` — Устанавливает или обновляет заголовки по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h4,{id:`apiheadersvalue`,children:(0,c.jsx)(n.code,{children:`ApiHeadersValue`})}),`
`,(0,c.jsx)(n.p,{children:`Обычный объект, представляющий HTTP-заголовки.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: string`}),` — Пары ключ-значение, где ключ — имя заголовка, а значение — содержимое заголовка.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};