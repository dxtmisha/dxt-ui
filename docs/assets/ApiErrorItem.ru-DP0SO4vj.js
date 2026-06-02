import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiErrorItem - Экземпляр ошибки`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apierroritem`,children:`Класс ApiErrorItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` является `,(0,c.jsx)(n.strong,{children:`оберткой данных для ответов об ошибках API`}),`. Он инкапсулирует контекст запроса (метод, ответ) и идентифицированные критерии ошибки из хранилища, предоставляя единый интерфейс для извлечения деталей ошибки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкапсуляция данных`}),` — хранит полный контекст сбоя API, включая сырой объект `,(0,c.jsx)(n.code,{children:`Response`}),` от Fetch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единое извлечение`}),` — обеспечивает последовательный доступ к кодам и сообщениям об ошибках, независимо от того, были ли они получены из тела ответа или из предварительно определенных критериев хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамические сообщения`}),` — разрешает сообщения об ошибках, используя статические строки или динамические функции-фабрики на основе ответа.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`аксессоры`,children:`Аксессоры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMethod(): ApiMethodItem`}),` — Возвращает HTTP-метод, использованный для запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): Response`}),` — Возвращает сырой объект ответа Fetch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): ApiErrorStorageItem`}),` — Возвращает идентифицированные критерии ошибки из хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number`}),` — Возвращает код статуса HTTP.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`извлечение-данных`,children:`Извлечение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string | undefined`}),` — Получает код ошибки из критериев хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string | undefined`}),` — Разрешает сообщение об ошибке (проверяет критерии хранилища или использует значения по умолчанию из ответа).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` обычно создается фабрикой `,(0,c.jsx)(n.code,{children:`ApiError.getItem()`}),`. Он служит конечным продуктом фазы анализа ошибок, готовым к использованию компонентами UI или сервисами логирования.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};