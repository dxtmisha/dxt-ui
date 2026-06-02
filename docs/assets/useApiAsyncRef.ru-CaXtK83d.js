import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useApiAsyncRef - Асинхронная инициализация`}),`
`,(0,c.jsx)(n.h1,{id:`useapiasyncref`,children:(0,c.jsx)(n.code,{children:`useApiAsyncRef`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` — это асинхронная обертка над `,(0,c.jsx)(n.a,{href:`./useApiRef.ru.mdx`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`, которая выполняет немедленную инициализацию запроса.`]}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от стандартного `,(0,c.jsx)(n.code,{children:`useApiRef`}),`, который инициализируется "лениво" (при первом обращении к данным), этот метод вызывает `,(0,c.jsx)(n.code,{children:`initSsr()`}),` сразу.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Немедленная инициализация`}),` — запускает запрос сразу при вызове хука.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка SSR`}),` — гарантирует наличие данных перед рендерингом страницы на сервере.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(n.p,{children:[`Параметры полностью идентичны `,(0,c.jsx)(n.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — путь к endpoint.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — опции запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — включить ли реактивность.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — условия выполнения запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — преобразование данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — валидация контракта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — удаление из кэша при размонтировании.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — экземпляр API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`возвращаемое-значение`,children:`Возвращаемое значение`}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает объект `,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),`:`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Реактивные состояния:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — реактивные данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — реактивный элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — текущий объект ошибки, если запрос не удался.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если контракт ответа валиден.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — подробный результат валидации контракта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length: ComputedRef<number>`}),` — количество элементов в списке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — флаг начальной фазы загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — текущий статус загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — флаг активной обработки данных.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Методы:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isStarting(): boolean`}),`, `,(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),`, `,(0,c.jsx)(n.code,{children:`isReading(): boolean`}),` — методы проверки статуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiData<R> | undefined`}),` — получить текущее значение данных без реактивности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — ручная инициализация.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initSsr(): void`}),` — инициализация для SSR.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<void>`}),` — принудительный перезапуск запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): void`}),` — остановка наблюдения и очистка данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`abort(): void`}),` — отмена текущего HTTP-запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// Инициализация запускается немедленно
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};