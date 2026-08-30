import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiPreparation - Подготовка запросов API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apipreparation`,children:`Класс ApiPreparation`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный класс, предназначенный для обработки задач и побочных эффектов непосредственно перед и после выполнения API-запроса. Он служит для глобального перехвата запросов через хуки, позволяя манипулировать состоянием или запускать глобальную логику, такую как обновление токенов или логирование.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiPreparation`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для управления жизненным циклом запросов. В большинстве случаев рекомендуется взаимодействовать с хуками через методы `,(0,c.jsx)(t.code,{children:`setPreparation`}),` и `,(0,c.jsx)(t.code,{children:`setEnd`}),` основного инстанса `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Последовательное выполнение`}),` — гарантирует, что хуки подготовки выполняются по одному, предотвращая коллизии при параллельных операциях (например, дублирование запросов на обновление токена).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальный перехват`}),` — предоставляет единую точку входа и выхода для всего сетевого трафика, инициируемого родительским менеджером.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Повтор запроса`}),` — хуки после запроса могут сигнализировать системе о необходимости автоматического повтора запроса после изменения состояния.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет зарегистрированный коллбэк подготовки. Если другая подготовка уже выполняется, метод ожидает её завершения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: boolean`}),` — Активен ли хук для текущего запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Конфигурация предстоящего запроса.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.h4,{id:`makeend`,children:(0,c.jsx)(t.code,{children:`makeEnd`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет зарегистрированный коллбэк анализа после завершения запроса.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: boolean`}),` — Активен ли хук для текущего запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query: Response`}),` — Нативный объект ответа Fetch API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Конфигурация, использованная для запроса.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiPreparationEnd>`}),` — Объект, управляющий дальнейшими шагами (например, сброс или подмена данных).`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Регистрирует функцию для запуска перед каждым включенным запросом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Регистрирует функцию для запуска после каждого включенного ответа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apipreparationend`,children:(0,c.jsx)(t.code,{children:`ApiPreparationEnd`})}),`
`,(0,c.jsx)(t.p,{children:`Результат выполнения хука анализа.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset?: boolean`}),` — Если true, запрос будет прерван и перезапущен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: any`}),` — Произвольные данные.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`руководство-механика-хуков`,children:`Руководство: Механика хуков`}),`
`,(0,c.jsx)(t.p,{children:`Следующие правила и условия определяют, как система подготовки синхронизирует и управляет хуками жизненного цикла:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация`}),` — система использует механизм опроса (интервал 160 мс), чтобы гарантировать, что одновременно выполняется только один хук `,(0,c.jsx)(t.code,{children:`setPreparation`}),`. Если одновременно запускаются несколько запросов, последующие вызовы будут ждать до 32 попыток опроса (~5 секунд), пока первый не завершится.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инъекция контекста`}),` — объект `,(0,c.jsx)(t.code,{children:`apiFetch`}),` передается в хук по ссылке. Изменение его свойств (таких как заголовки или тело запроса) внутри `,(0,c.jsx)(t.code,{children:`setPreparation`}),` напрямую влияет на последующий сетевой вызов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление потоком (Reset)`}),` — хук `,(0,c.jsx)(t.code,{children:`setEnd`}),` может вернуть `,(0,c.jsx)(t.code,{children:`{ reset: true }`}),`. Когда этот флаг обнаружен, `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` прервет текущую цепочку запроса и немедленно перезапустит её с фазы подготовки. Это в основном используется для прозрачного автоматического обновления токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Область выполнения`}),` — хуки запускаются только в том случае, если они явно включены в конфигурации запроса. По умолчанию `,(0,c.jsx)(t.code,{children:`globalPreparation`}),` и `,(0,c.jsx)(t.code,{children:`globalEnd`}),` в `,(0,c.jsx)(t.code,{children:`ApiFetch`}),` установлены в true.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};