import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiInstance - Управление запросами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apiinstance`,children:`Класс ApiInstance`}),`
`,(0,c.jsx)(n.p,{children:`Класс для работы с сетевыми запросами через Fetch API. Предоставляет расширенные возможности конфигурирования, глобальной обработки статусов, эмуляции ответов, установки хуков подготовки и автоматического парсинга данных.`}),`
`,(0,c.jsxs)(n.p,{children:[`Включает тесную интеграцию с зависимыми классами: `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`, `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`, `,(0,c.jsx)(n.code,{children:`ApiPreparation`}),`, `,(0,c.jsx)(n.code,{children:`ApiDefault`}),` и `,(0,c.jsx)(n.code,{children:`ApiHeaders`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD методы`}),` — удобные алиасы `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),` для работы с HTTP-запросами`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная конфигурация`}),` — установка базового URL, заголовков и параметров по умолчанию для всех запросов`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хуки жизненного цикла`}),` — возможность задать функции, выполняемые до (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`) и после (`,(0,c.jsx)(n.code,{children:`setEnd`}),`) каждого запроса`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание статуса`}),` — доступ к статусу и ошибкам последнего запроса через `,(0,c.jsx)(n.code,{children:`ApiStatus`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гидратация`}),` — передача данных от сервера к клиенту (SSR) для мгновенной отрисовки`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование`}),` — сохранение ответов во внутреннем или внешнем хранилище через `,(0,c.jsx)(n.code,{children:`ApiCache`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эмуляция ответов`}),` — гибкое управление мок-данными через `,(0,c.jsx)(n.code,{children:`ApiResponse`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический парсинг`}),` — преобразование тела запроса в JSON/FormData и автоматическое извлечение данных из JSON-ответов`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Геолокация`}),` — автоматическая подстановка `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` в пути запросов`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsxs)(n.p,{children:[`Экземпляр `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` может быть настроен во время инициализации с помощью пользовательских классов зависимостей или конкретных экземпляров.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string`}),` — базовый путь для всех запросов (по умолчанию: `,(0,c.jsx)(n.code,{children:`'/api/'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ApiInstanceOptions`}),` — объект конфигурации для внедрения зависимостей.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiinstanceoptions`,children:(0,c.jsx)(n.code,{children:`ApiInstanceOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headersClass?: typeof ApiHeaders`}),` — класс для управления заголовками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefaultClass?: typeof ApiDefault`}),` — класс для параметров запроса по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusClass?: typeof ApiStatus`}),` — класс для отслеживания статуса запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseClass?: typeof ApiResponse`}),` — класс для эмуляции ответов и кэширования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparationClass?: typeof ApiPreparation`}),` — класс для управления хуками жизненного цикла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingClass?: LoadingInstance`}),` — экземпляр менеджера индикации загрузки (по умолчанию: `,(0,c.jsx)(n.code,{children:`Loading.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenterClass?: ErrorCenterInstance`}),` — экземпляр центра ошибок для вызова событий (по умолчанию: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydrationClass?: typeof ApiHydration`}),` — класс для управления гидратацией SSR.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.h4,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Универсальный метод для выполнения сетевого HTTP-запроса. Если передана строка, выполняется простой `,(0,c.jsx)(n.code,{children:`GET`}),` запрос по этому адресу.
В случае сетевых сбоев (например, 500 статус) метод явно выбрасывает исключение (`,(0,c.jsx)(n.code,{children:`throw e`}),`), что позволяет перехватывать ошибки в `,(0,c.jsx)(n.code,{children:`try/catch`}),`. Если сервер возвращает JSON объект, к возвращаемым данным автоматически добавляется поле `,(0,c.jsx)(n.code,{children:`statusObject`}),` (инстанс статуса запроса).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathRequest: string | ApiFetch`}),` — путь (строка) или конфигурационный объект запроса.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),` — возвращает спарсенные данные ответа сервера (с полями `,(0,c.jsx)(n.code,{children:`data`}),`, `,(0,c.jsx)(n.code,{children:`statusObject`}),` и др., если возвращается объект).`]}),`
`,(0,c.jsx)(n.h3,{id:`сокращенные-методы`,children:`Сокращенные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(request: ApiFetch): Promise<T>`}),` — Отправляет запрос методом `,(0,c.jsx)(n.code,{children:`GET`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post(request: ApiFetch): Promise<T>`}),` — Отправляет запрос методом `,(0,c.jsx)(n.code,{children:`POST`}),`. Идеально для создания/сохранения сущностей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put(request: ApiFetch): Promise<T>`}),` — Отправляет запрос методом `,(0,c.jsx)(n.code,{children:`PUT`}),`. Применяется для обновления данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`patch(request: ApiFetch): Promise<T>`}),` — Отправляет запрос методом `,(0,c.jsx)(n.code,{children:`PATCH`}),`. Используется для частичного обновления данных ресурса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete(request: ApiFetch): Promise<T>`}),` — Отправляет запрос методом `,(0,c.jsx)(n.code,{children:`DELETE`}),`. Применяется для удаления данных из системы.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если код запущен на локальном сервере.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Возвращает менеджер `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` для работы со статусом последнего запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Возвращает менеджер эмуляции `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.p,{children:[`Методы для настройки API (поддерживают чейнинг вызовов, возвращают объект `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): this`}),` — Устанавливает глобальные заголовки по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): this`}),` — Устанавливает общие параметры для всех запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): this`}),` — Изменяет базовый URL путь для API скриптов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Устанавливает хук, выполняемый перед каждым сетевым запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Устанавливает хук, выполняемый после получения ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOrigin(origin: string): this`}),` — Устанавливает источник (протокол и домен) для формирования базового URL.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Формирует полный адрес к скрипту запроса с подстановкой плейсхолдеров `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOrigin(): string`}),` — Возвращает базовый URL источника, объединенный с путем API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined`}),` — Формирует данные для тела запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string`}),` — Формирует строку query-параметров для GET-запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydration(): ApiHydration`}),` — Возвращает менеджер гидратации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydrationScript(): string`}),` — Возвращает строковое представление данных гидратации для клиента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`объект-apifetch`,children:`Объект ApiFetch`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiFetch`}),` — главный конфигурационный объект, передаваемый в методы `,(0,c.jsx)(n.code,{children:`request`}),`, `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),`. Все поля опциональны:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — путь к endpoint-скрипту относительно базового URL (например: `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — полный URL запроса. Если указан, игнорирует `,(0,c.jsx)(n.code,{children:`api`}),` и `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — добавлять ли базовый URL перед `,(0,c.jsx)(n.code,{children:`path`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — HTTP-метод (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'PATCH'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). По умолчанию: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — тело запроса (для POST/PUT/PATCH) или query-параметры (for GET). Передается как JSON или `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — дополнительные заголовки запроса. `,(0,c.jsx)(n.code,{children:`null`}),` — отключить все заголовки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — значение `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — добавить заголовки аутентификации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, автоматически разворачивает `,(0,c.jsx)(n.code,{children:`data`}),` из обертки `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`global?: boolean`}),` — использовать глобальный кэш ответов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`devMode?: boolean`}),` — включить логирование разработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — подавляет вывод ошибок в `,(0,c.jsx)(n.code,{children:`console.error`}),` при сбое. По умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — запускать ли глобальный хук `,(0,c.jsx)(n.code,{children:`setPreparation`}),` до этого запроса. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — запускать ли глобальный хук `,(0,c.jsx)(n.code,{children:`setEnd`}),` после ответа. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — обработчик ответа вместо стандартного чтения JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — дополнительные опции для нативного `,(0,c.jsx)(n.code,{children:`fetch()`}),` (CORS, режим кеша и др.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout?: number`}),` — таймаут запроса в миллисекундах. По умолчанию: `,(0,c.jsx)(n.code,{children:`16000`}),`мс (используется только если не передан `,(0,c.jsx)(n.code,{children:`controller`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — контроллер для отмены запроса. Если передан, таймаут игнорируется.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retry?: number`}),` — количество повторов при сбое.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retryDelay?: number`}),` — базовая задержка между повторами в миллисекундах. По умолчанию: `,(0,c.jsx)(n.code,{children:`64`}),`мс. Используется алгоритм с джиттером для предотвращения лавинообразных запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`endResetLimit?: number`}),` — лимит рекурсивных повторов через `,(0,c.jsx)(n.code,{children:`setEnd`}),` с `,(0,c.jsx)(n.code,{children:`reset: true`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`8`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-данных-ответа`,children:`Структура данных ответа`}),`
`,(0,c.jsxs)(n.p,{children:[`Запросы возвращают `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`apidatat`,children:(0,c.jsx)(n.code,{children:`ApiData<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Структура возвращаемых данных зависит от типа ответа:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Массив`}),`: Если ответ является массивом, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` представляет собой `,(0,c.jsx)(n.code,{children:`T[]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объект`}),`: Если ответ является объектом, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` включает в себя поля из `,(0,c.jsx)(n.code,{children:`T`}),` и стандартную обертку `,(0,c.jsx)(n.code,{children:`ApiDataItem<T>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apidataitemt`,children:(0,c.jsx)(n.code,{children:`ApiDataItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Объект ответа содержит следующие поля:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: T`}),` — основная полезная нагрузка, если ответ был обернут.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`success?: boolean`}),` — флаг успешности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: ApiStatusType`}),` — тип статуса (`,(0,c.jsx)(n.code,{children:`'success'`}),`, `,(0,c.jsx)(n.code,{children:`'error'`}),`, `,(0,c.jsx)(n.code,{children:`'warning'`}),`, `,(0,c.jsx)(n.code,{children:`'info'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — сообщение ответа или описание ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusObject?: ApiStatusItem`}),` — техническая информация о запросе:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — HTTP-код статуса (например, 200, 404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusText?: string`}),` — текст статуса HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`error?: string`}),` — внутреннее сообщение об ошибке, если запрос не удался.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastResponse?: any`}),` — данные последнего ответа до парсинга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastStatus?: ApiStatusType`}),` — статус последнего запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastMessage?: string`}),` — сообщение последнего запроса.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`отмена-запросов-abortcontroller`,children:`Отмена запросов (AbortController)`}),`
`,(0,c.jsxs)(n.p,{children:[`API поддерживает отмену запросов из коробки. Для этого можно передать экземпляр `,(0,c.jsx)(n.code,{children:`AbortController`}),` в поле `,(0,c.jsx)(n.code,{children:`controller`}),` объекта `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const controller = new AbortController()

// Запускаем запрос, передавая контроллер
api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Запрос был отменен пользователем')
  }
})

// Отменяем при размонтировании компонента (например)
controller.abort()
`})}),`
`,(0,c.jsx)(n.h2,{id:`хуки-жизненного-цикла-lifecycle-hooks`,children:`Хуки жизненного цикла (Lifecycle Hooks)`}),`
`,(0,c.jsx)(n.p,{children:`Хуки позволяют внедрять логику, которая будет автоматически выполняться для каждого сетевого запроса данного инстанса. Это мощный инструмент для решения таких задач, как:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Динамическое добавление токенов авторизации.`}),`
`,(0,c.jsx)(n.li,{children:`Централизованное логирование сетевой активности.`}),`
`,(0,c.jsx)(n.li,{children:`Автоматическое обновление истекших токенов (Refresh Token).`}),`
`,(0,c.jsx)(n.li,{children:`Глобальное уведомление пользователя об ошибках.`}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`подготовка-запроса-setpreparation`,children:[`Подготовка запроса (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`setPreparation`}),` устанавливает callback-функцию, которая вызывается непосредственно перед отправкой запроса на сервер (до выполнения нативного `,(0,c.jsx)(n.code,{children:`fetch`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности работы:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очередность исполнения`}),`: Если одновременно запускается несколько запросов, класс гарантирует, что хук подготовки будет выполнен `,(0,c.jsx)(n.strong,{children:`последовательно`}),`. Все последующие запросы будут ждать завершения текущего хука в режиме ожидания (с интервалом опроса 16мс). Это предотвращает конфликты, например, при одновременном обновлении токена несколькими запросами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Параметры`}),`: Получает объект `,(0,c.jsx)(n.code,{children:`apiFetch`}),`, содержащий все текущие настройки запроса. Вы можете изменять этот объект (например, добавляя заголовки или модифицируя тело запроса).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Возвращает`}),`: `,(0,c.jsx)(n.code,{children:`Promise<void>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setPreparation(async (apiFetch) => {
  // Пример: добавление динамического заголовка
  if (apiFetch.auth) {
    const token = await authStore.getToken()
    apiFetch.headers = {
      ...apiFetch.headers,
      'Authorization': \`Bearer \${token}\`
    }
  }
  
  console.log(\`[API] Подготовка запроса: \${apiFetch.method} \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsxs)(n.h3,{id:`завершение-запроса-setend`,children:[`Завершение запроса (`,(0,c.jsx)(n.code,{children:`setEnd`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`setEnd`}),` устанавливает callback-функцию, которая вызывается после получения ответа от сервера, но перед тем, как данные будут переданы в вызывающий код.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query: Response`}),` — нативный объект ответа Fetch API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — объект параметров, с которыми был выполнен запрос.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiPreparationEnd>`}),`. Объект результата может содержать следующие поля:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset?: boolean`}),` — если установлено в `,(0,c.jsx)(n.code,{children:`true`}),`, библиотека прервет текущую цепочку и `,(0,c.jsx)(n.strong,{children:`выполнит запрос заново`}),` (рекурсивно) через рандомизированную задержку (см. `,(0,c.jsx)(n.code,{children:`retryDelay`}),`). Весь процесс подготовки и выполнения будет запущен повторно. Используется для автоматической обработки обновленных прав доступа. Лимит таких повторов ограничен параметром `,(0,c.jsx)(n.code,{children:`endResetLimit`}),` (по умолчанию 8).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: any`}),` — позволяет переопределить данные, которые вернет метод API. Если это поле указано, стандартный механизм чтения ответа (JSON/текст) будет проигнорирован.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setEnd(async (response, apiFetch) => {
  // Пример: автоматическое обновление Refresh Token
  if (response.status === 401) {
    const isSuccess = await authStore.refresh()
    
    if (isSuccess) {
      // Повторить запрос с новым токеном
      return { reset: true }
    }
  }

  // Пример: глобальное уведомление об ошибке
  if (response.status >= 500) {
    notification.error('Сервис временно недоступен')
  }

  return {}
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`отключение-хуков-для-конкретного-запроса`,children:`Отключение хуков для конкретного запроса`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете выборочно отключить выполнение глобальных хуков в объекте `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation: false`}),` — пропустить выполнение хука `,(0,c.jsx)(n.code,{children:`setPreparation`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd: false`}),` — пропустить выполнение хука `,(0,c.jsx)(n.code,{children:`setEnd`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`гидратация`,children:`Гидратация`}),`
`,(0,c.jsx)(n.p,{children:`Гидратация — это механизм передачи данных, полученных в ходе серверного рендеринга (SSR), на сторону клиента. Это позволяет избежать повторного выполнения тех же самых сетевых запросов сразу после загрузки страницы в браузере, что значительно ускоряет отрисовку и снижает нагрузку на сервер.`}),`
`,(0,c.jsx)(n.h3,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`На стороне сервера (SSR):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Все выполненные запросы (обычно метода `,(0,c.jsx)(n.code,{children:`GET`}),` с параметром `,(0,c.jsx)(n.code,{children:`global: true`}),`) автоматически сохраняются в списке гидратации.`]}),`
`,(0,c.jsxs)(n.li,{children:[`После завершения формирования страницы необходимо вызвать метод `,(0,c.jsx)(n.code,{children:`api.getHydrationScript()`}),` и вставить полученную строку в HTML-шаблон (обычно в конец тега `,(0,c.jsx)(n.code,{children:`<body>`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`На стороне клиента (Браузер):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`При создании экземпляра `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` он автоматически ищет на странице скрипт с данными гидратации.`]}),`
`,(0,c.jsx)(n.li,{children:`Найденные данные загружаются в систему и подставляются вместо первого вызова аналогичных запросов.`}),`
`,(0,c.jsx)(n.li,{children:`Таким образом, клиентский код получает данные мгновенно, не дожидаясь ответа от сети.`}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`пример-использования-ssr`,children:`Пример использования (SSR)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// На сервере
const api = new ApiInstance();
await api.get({ path: 'settings' });

// В шаблоне страницы (например, в конце body)
// Метод вернет строку: <script id="__ui:api:hydration:id__" type="application/json">[...]<\/script>
const hydrationScript = api.getHydrationScript();
`})}),`
`,(0,c.jsx)(n.h2,{id:`кэширование`,children:`Кэширование`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека предоставляет встроенный механизм кэширования ответов, который позволяет сохранять результаты запросов в памяти или во внешнем хранилище (например, `,(0,c.jsx)(n.code,{children:`LocalStorage`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Время жизни (TTL)`}),` — для каждого запроса можно указать время актуальности кэша в секундах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внешние хранилища`}),` — возможность интеграции с любым асинхронным хранилищем данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая очистка`}),` — старые данные удаляются из памяти при превышении лимитов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-внешнего-хранилища`,children:`Настройка внешнего хранилища`}),`
`,(0,c.jsxs)(n.p,{children:[`По умолчанию кэш работает только в оперативной памяти и сбрасывается при перезагрузке страницы. Чтобы сохранять данные надолго, необходимо инициализировать `,(0,c.jsx)(n.code,{children:`ApiCache`}),` своими слушателями (например, используя `,(0,c.jsx)(n.code,{children:`LocalStorage`}),` или `,(0,c.jsx)(n.code,{children:`IndexedDB`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiCache, DataStorage } from '@dxtmisha/functional';

// Пример инициализации с использованием LocalStorage через обертку DataStorage
ApiCache.init(
  async (key) => DataStorage.get(key),
  async (key, value) => {
    DataStorage.set(key, value);
    return true;
  },
  async (key) => {
    DataStorage.remove(key);
    return true;
  }
);
`})}),`
`,(0,c.jsx)(n.h3,{id:`использование-в-запросах`,children:`Использование в запросах`}),`
`,(0,c.jsxs)(n.p,{children:[`Для включения кэширования достаточно передать время в секундах в поле `,(0,c.jsx)(n.code,{children:`cache`}),` объекта `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Кэшировать ответ на 1 час (3600 секунд)
const data = await api.get({
  path: 'catalog/list',
  cache: 3600
});
`})}),`
`,(0,c.jsx)(n.p,{children:`Если данные есть в кэше и их время жизни не истекло, библиотека вернет их мгновенно, не выполняя реальный запрос к серверу.`}),`
`,(0,c.jsx)(n.h2,{id:`эмуляция-ответов`,children:`Эмуляция ответов`}),`
`,(0,c.jsxs)(n.p,{children:[`Менеджер эмуляции `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` (доступен через `,(0,c.jsx)(n.code,{children:`api.getResponse()`}),`) позволяет настраивать мок-ответы для определенных путей — это невероятно полезно при разработке UI без готового Backend API или для написания тестов.`]}),`
`,(0,c.jsx)(n.h3,{id:`регистрация-мок-ответов`,children:`Регистрация мок-ответов`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`add`}),` принимает объект типа `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),` или массив таких объектов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Важные поля `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),`:`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path`}),` — Строка (точное совпадение) или Регулярное выражение (`,(0,c.jsx)(n.code,{children:`RegExp`}),`) для перехвата пути.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method`}),` — HTTP метод (`,(0,c.jsx)(n.code,{children:`ApiMethodItem.get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),` и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request`}),` — (Опционально) Фильтр по телу запроса. Можно использовать специальный маркер `,(0,c.jsx)(n.code,{children:`'*any'`}),`, чтобы перехватывать любые данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response`}),` — Статический объект с данными ответа `,(0,c.jsx)(n.em,{children:`или`}),` функция `,(0,c.jsx)(n.code,{children:`(request) => any`}),`, генерирующая ответ динамически на основе параметров запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disable`}),` — (Опционально) Отключить этот мок (boolean или callback).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isForGlobal`}),` — (Опционально) Пометить как глобальный мок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lag`}),` — (Опционально) Имитировать задержку сети (`,(0,c.jsx)(n.code,{children:`boolean`}),`), добавляет случайный setTimeout от 0 до 2000мс.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = api.getResponse()

// Включить режим разработчика (в консоль будут выводиться логи перехваченных запросов)
responseManager.setDevMode(true)

// Пример 1: Статический ответ на GET запрос
responseManager.add({
  path: 'users/profile', // можно использовать строку или RegExp
  method: 'GET',
  response: { id: 1, name: 'Admin', role: 'superuser' },
  lag: true // Искусственная задержка (lag) для симуляции реального сетевого пинга
})

// Пример 2: Динамический ответ с функцией (полезно для пагинации или поиска)
responseManager.add({
  path: /users\\/search/, // перехватываем по RegExp
  method: 'GET',
  // Функция получает оригинальные параметры, переданные в request
  response: (request) => {
    return [
        { id: 1, name: \`Искали: \${request.query}\` }
    ]
  }
})

// Пример 3: Перехват POST запроса с любым телом
responseManager.add({
  path: 'users/create',
  method: 'POST',
  request: '*any', // маркер *any позволяет игнорировать проверку тела запроса
  response: { success: true, message: 'Пользователь успешно создан (MOCK)' }
})

// Использование в коде (сетевой запрос не уйдет, вернется мок)
const profile = await api.get({ path: 'users/profile' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`приоритет-и-фильтрация-моков`,children:`Приоритет и фильтрация моков`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Эмулятор (mock) срабатывает `,(0,c.jsx)(n.strong,{children:`до`}),` реального `,(0,c.jsx)(n.code,{children:`fetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Если эмулятор не находит совпадений (по `,(0,c.jsx)(n.code,{children:`path`}),`, `,(0,c.jsx)(n.code,{children:`method`}),` или `,(0,c.jsx)(n.code,{children:`request`}),`), класс выполнит реальный сетевой запрос к серверу.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Вы можете отключить определенный мок, передав функцию в поле `,(0,c.jsx)(n.code,{children:`disable: () => true`}),`. Метод `,(0,c.jsx)(n.code,{children:`add`}),` не будет его перехватывать.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional'

const api = new ApiInstance()

// Конфигурация API
api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Отслеживание подготовки перед началом (hook)
api.setPreparation(async (apiFetch) => {
    console.log('Начинается запрос к:', apiFetch.path)
})

// Простой GET запрос с обработкой ошибок
try {
  const data = await api.get({ path: 'users' })
  // Из объекта ответа также можно извлечь встроенный статус (если возвращается объект):
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Сетевая ошибка при запросе пользователей:', e)
}

// POST запрос с телом и возможностью отмены
const abortCtrl = new AbortController()
try {
  const newUser = await api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Запрос отменен!')
}

// Отмена в случае необходимости
// abortCtrl.abort()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};