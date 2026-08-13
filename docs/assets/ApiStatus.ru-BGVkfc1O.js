import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiStatus - Управление статусом API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apistatus`,children:`Класс ApiStatus`}),`
`,(0,c.jsx)(t.p,{children:`Класс, предназначенный для отслеживания и управления состоянием API-запроса. Он надежно хранит текущий HTTP-статус, сообщения об ошибках и тело ответа, позволяя приложениям реагировать на изменения в реальном времени с помощью абстракций состояния.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiStatus`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для отслеживания состояний запросов. В большинстве случаев рекомендуется взаимодействовать со статусом запроса через свойство `,(0,c.jsx)(t.code,{children:`status`}),` результата `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` или глобальный цикл выполнения `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованное состояние`}),` — содержит всё, что связано с результатом вызова API: HTTP-статус, пользовательские тексты, необработанные данные ответа и сгенерированные сообщения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — сеттеры возвращают `,(0,c.jsx)(t.code,{children:`this`}),`, что позволяет элегантно выстраивать цепочки изменений состояния.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое извлечение сообщений`}),` — интеллектуально пытается разобрать и извлечь человекочитаемые поля `,(0,c.jsx)(t.code,{children:`message`}),` напрямую из структурированных ответов сервера.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getResponse<T>(): T | undefined`}),` — Возвращает необработанный объем данных из последнего успешного запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMessage(): string`}),` — Возвращает сообщение сервера, извлеченное из успешного ответа, или сообщение, установленное вручную.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): ApiStatusItem | undefined`}),` — Возвращает полный объект данных статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatus(): number | undefined`}),` — Возвращает код HTTP-статуса (например, `,(0,c.jsx)(t.code,{children:`200`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusText(): string | undefined`}),` — Возвращает текст статуса (например, `,(0,c.jsx)(t.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Возвращает последний тип валидации статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getError(): string | undefined`}),` — Возвращает записанное сообщение об ошибке.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(data: ApiStatusItem): this`}),` — Устанавливает несколько полей статуса одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Устанавливает код и текст HTTP-статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setError(error?: string): this`}),` — Записывает строку сообщения об ошибке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastResponse(response?: any): this`}),` — Записывает ответ сервера и автоматически извлекает `,(0,c.jsx)(t.code,{children:`message`}),` и `,(0,c.jsx)(t.code,{children:`status`}),`, если они есть.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Устанавливает пользовательский тип статуса API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastMessage(message?: string): this`}),` — Явно записывает сообщение.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apistatusitem`,children:(0,c.jsx)(t.code,{children:`ApiStatusItem`})}),`
`,(0,c.jsx)(t.p,{children:`Полное представление статуса запроса.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: number`}),` — Код HTTP-статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`statusText?: string`}),` — Текст HTTP-статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`error?: string`}),` — Сообщение об ошибке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastResponse?: any`}),` — Данные последнего ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastStatus?: ApiStatusType`}),` — Последний тип статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastMessage?: string`}),` — Последнее сообщение.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};