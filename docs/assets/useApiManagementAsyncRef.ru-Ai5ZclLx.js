import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useApiManagementAsyncRef - Асинхронная инициализация управления API`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementasyncref`,children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`}),` — это асинхронная обертка над `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`, которая выполняет немедленную инициализацию запроса.`]}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от стандартного `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, который инициализируется "лениво" (при первом обращении к списку или данным), этот метод вызывает `,(0,c.jsx)(t.code,{children:`initSsr()`}),` сразу при создании. Это делает его идеальным выбором для использования в SSR-окружении.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Немедленная инициализация`}),` — запускает процесс инициализации GET-запроса сразу при вызове хука.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка SSR`}),` — гарантирует, что данные будут загружены на сервере до рендеринга страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная функциональность Management`}),` — сохраняет все возможности `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, включая форматировщики, поиск и мутации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(t.p,{children:[`Параметры полностью идентичны `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — настройки главного GET-запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — правила форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — настройки поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest / putRequest / deleteRequest`}),` — настройки мутаций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: any) => Promise<void> | void`}),` — общий коллбэк, выполняемый после любой успешной мутации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — экземпляр API.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`возвращаемое-значение`,children:`Возвращаемое значение`}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает объект управления API. Состав возвращаемого значения полностью идентичен `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если данные прошли проверку `,(0,c.jsx)(t.code,{children:`typeData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если данные ответа соответствуют определенному контракту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — подробный результат валидации контракта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — обработанный массив данных с поддержкой Skeleton, форматтеров и поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — «сырые» реактивные данные из `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — текущий объект ошибки, если запрос не удался.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — текущее количество элементов в `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting / loading / reading`}),` — флаги состояния запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch / loadingPost / loadingPut / loadingDelete`}),` — состояния загрузки для поиска и мутаций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch / search`}),` — статус поиска и реактивная строка поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete`}),` — методы для выполнения мутаций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset / abort`}),` — методы управления.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiManagementAsyncRef } from '@dxtmisha/functional'

// Инициализация (и SSR-предзагрузка) запускается немедленно
const { list, loading } = useApiManagementAsyncRef(
  { 
    path: 'api/products',
    skeleton: () => Array(3).fill({ id: 0, title: 'Loading...' })
  }
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};