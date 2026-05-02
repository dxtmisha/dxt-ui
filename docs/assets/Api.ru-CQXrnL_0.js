import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/Api - Управление запросами (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`класс-api`,children:`Класс Api`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` является `,(0,c.jsx)(n.strong,{children:`основным классом (статическим)`}),` и служит главной точкой входа для управления HTTP-запросами. Он представляет собой статическую обертку над глобально управляемым `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`, предоставляя чистый интерфейс на основе синглтона для стандартных сетевых операций.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический интерфейс`}),` — выполнение стандартных HTTP-операций (`,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),` и т. д.) без необходимости ручного создания экземпляров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальные хуки жизненного цикла`}),` — настройте подготовку и анализ запросов один раз для всего приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция в SSR`}),` — использует `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` для управления изоляцией отдельных экземпляров во время рендеринга на стороне сервера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Упрощенная настройка`}),` — предоставляет унифицированный метод `,(0,c.jsx)(n.code,{children:`setConfig`}),` для одновременного применения нескольких слоев конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.p,{children:`Методы для выполнения физических сетевых запросов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Основной исполнитель; принимает строку пути или объект конфигурации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Отправляет GET-запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Отправляет POST-запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Отправляет PUT-запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`patch<T>(request: ApiFetch): Promise<T>`}),` — Отправляет PATCH-запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Отправляет DELETE-запрос.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Проверяет, запущена ли среда на локальном сервере разработки.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): void`}),` — Изменяет базовый URL API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): void`}),` — Устанавливает заголовки запроса по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): void`}),` — Устанавливает данные тела запроса по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback): void`}),` — Регистрирует хук, запускаемый перед каждым включенным запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback): void`}),` — Регистрирует хук, запускаемый после каждого включенного ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimeout(timeout: number): void`}),` — Изменяет глобальный таймаут запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOrigin(origin: string): void`}),` — Изменяет источник (протокол и домен) для базового URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config?: ApiConfig): void`}),` — Применяет полный объект конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Доступ к менеджеру статуса последнего запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Доступ к менеджеру ответов/эмуляции.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydration(): ApiHydration`}),` — Доступ к менеджеру гидратации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydrationScript(): string`}),` — Возвращает блок скрипта для гидратации SSR-клиент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOrigin(): string`}),` — Возвращает базовый URL источника, объединенный с путем API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Возвращает полностью разрешенный URL с подстановкой плейсхолдеров `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?, method?): string | FormData | undefined`}),` — Подготавливает тело запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Подготавливает строку запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiInstance`}),` — Возвращает базовый объект `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`apiconfig`,children:`ApiConfig`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`urlRoot: string`}),` — базовый URL для API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`origin: string`}),` — протокол и домен для формирования базового URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers: Record<string, string>`}),` — заголовки запроса по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault: Record<string, any>`}),` — данные запроса по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation: (apiFetch: ApiFetch) => Promise<void>`}),` — входной хук.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — выходной хук.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout: number`}),` — глобальный таймаут в миллисекундах.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`прокси-архитектура`,children:`Прокси-архитектура`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` работает как `,(0,c.jsx)(n.strong,{children:`статический прокси`}),`. Все вызовы методов перенаправляются на внутренний `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-экземпляром`,children:`Управление экземпляром`}),`
`,(0,c.jsxs)(n.p,{children:[`Внутренний менеджер хранится в `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` под уникальным ключом (`,(0,c.jsx)(n.code,{children:`__dxt_api_instance__`}),`). Эта архитектура решает две основные проблемы:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Потокобезопасность в SSR`}),`: Во время рендеринга на стороне сервера `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` гарантирует, что каждый входящий запрос имеет свою собственную изолированную конфигурацию и состояние API, предотвращая утечку данных между пользователями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Простота синглтона на клиенте`}),`: На стороне клиента он ведет себя как настоящий синглтон, позволяя настроить API в точке входа и использовать его где угодно без передачи экземпляров.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`делегирование`,children:`Делегирование`}),`
`,(0,c.jsxs)(n.p,{children:[`Хотя `,(0,c.jsx)(n.code,{children:`Api`}),` является предпочтительным интерфейсом для стандартной логики приложения, основная логика (повторы, гидратация, джиттер) находится внутри `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. Для сложных сценариев, включающих несколько базовых URL-адресов или разные наборы заголовков одновременно, вы можете создавать экземпляры `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` напрямую.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};