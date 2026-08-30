import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useApiAsyncRef - Асинхронная инициализация`}),`
`,(0,c.jsx)(t.h1,{id:`useapiasyncref`,children:(0,c.jsx)(t.code,{children:`useApiAsyncRef`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiAsyncRef`}),` — это асинхронная обертка над `,(0,c.jsx)(t.a,{href:`./useApiRef.ru.mdx`,children:(0,c.jsx)(t.code,{children:`useApiRef`})}),`, которая выполняет немедленную инициализацию запроса.`]}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от стандартного `,(0,c.jsx)(t.code,{children:`useApiRef`}),`, который инициализируется "лениво" (при первом обращении к данным), этот метод вызывает `,(0,c.jsx)(t.code,{children:`initSsr()`}),` сразу.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Немедленная инициализация`}),` — запускает запрос сразу при вызове хука.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка SSR`}),` — гарантирует наличие данных перед рендерингом страницы на сервере.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(t.p,{children:[`Параметры полностью идентичны `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — путь к endpoint.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — опции запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactivity?: boolean`}),` — включить ли реактивность.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: RefType<boolean>`}),` — условия выполнения запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — преобразование данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — валидация контракта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unmounted?: boolean`}),` — удаление из кэша при размонтировании.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — экземпляр API.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`возвращаемое-значение`,children:`Возвращаемое значение`}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает объект `,(0,c.jsx)(t.code,{children:`UseApiRef<R>`}),`:`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Реактивные состояния:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — реактивные данные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — реактивный элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — текущий объект ошибки, если запрос не удался.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если контракт ответа валиден.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — подробный результат валидации контракта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — количество элементов в списке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — флаг начальной фазы загрузки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — текущий статус загрузки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — флаг активной обработки данных.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Методы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStarting(): boolean`}),`, `,(0,c.jsx)(t.code,{children:`isLoading(): boolean`}),`, `,(0,c.jsx)(t.code,{children:`isReading(): boolean`}),` — методы проверки статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): ApiData<R> | undefined`}),` — получить текущее значение данных без реактивности.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — ручная инициализация.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initSsr(): void`}),` — инициализация для SSR.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): Promise<void>`}),` — принудительный перезапуск запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): void`}),` — остановка наблюдения и очистка данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`abort(): void`}),` — отмена текущего HTTP-запроса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// Инициализация запускается немедленно
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};