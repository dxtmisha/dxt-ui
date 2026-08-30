import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiErrorItem - Экземпляр ошибки`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apierroritem`,children:`Класс ApiErrorItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` является `,(0,c.jsx)(t.strong,{children:`оберткой данных для ответов об ошибках API`}),`. Он инкапсулирует контекст запроса (метод, ответ) и идентифицированные критерии ошибки из хранилища, предоставляя единый интерфейс для извлечения деталей ошибки.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкапсуляция данных`}),` — хранит полный контекст сбоя API, включая сырой объект `,(0,c.jsx)(t.code,{children:`Response`}),` от Fetch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единое извлечение`}),` — обеспечивает последовательный доступ к кодам и сообщениям об ошибках, независимо от того, были ли они получены из тела ответа или из предварительно определенных критериев хранилища.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамические сообщения`}),` — разрешает сообщения об ошибках, используя статические строки или динамические функции-фабрики на основе ответа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`аксессоры`,children:`Аксессоры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMethod(): ApiMethodItem`}),` — Возвращает HTTP-метод, использованный для запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getResponse(): Response`}),` — Возвращает сырой объект ответа Fetch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getError(): ApiErrorStorageItem`}),` — Возвращает идентифицированные критерии ошибки из хранилища.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatus(): number`}),` — Возвращает код статуса HTTP.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`извлечение-данных`,children:`Извлечение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode(): string | undefined`}),` — Получает код ошибки из критериев хранилища.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMessage(): string | undefined`}),` — Разрешает сообщение об ошибке (проверяет критерии хранилища или использует значения по умолчанию из ответа).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` обычно создается фабрикой `,(0,c.jsx)(t.code,{children:`ApiError.getItem()`}),`. Он служит конечным продуктом фазы анализа ошибок, готовым к использованию компонентами UI или сервисами логирования.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};