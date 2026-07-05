import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useApiManagementAsyncRef - Асинхронная инициализация управления API`}),`
`,(0,c.jsx)(n.h1,{id:`useapimanagementasyncref`,children:(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),` — это асинхронная обертка над `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`, которая выполняет немедленную инициализацию запроса.`]}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от стандартного `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, который инициализируется "лениво" (при первом обращении к списку или данным), этот метод вызывает `,(0,c.jsx)(n.code,{children:`initSsr()`}),` сразу при создании. Это делает его идеальным выбором для использования в SSR-окружении.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Немедленная инициализация`}),` — запускает процесс инициализации GET-запроса сразу при вызове хука.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка SSR`}),` — гарантирует, что данные будут загружены на сервере до рендеринга страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Полная функциональность Management`}),` — сохраняет все возможности `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, включая форматировщики, поиск и мутации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(n.p,{children:[`Параметры полностью идентичны `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — настройки главного GET-запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`formattersOptions?: FormattersOptions`}),` — правила форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — настройки поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`postRequest / putRequest / deleteRequest`}),` — настройки мутаций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: any) => Promise<void> | void`}),` — общий коллбэк, выполняемый после любой успешной мутации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — экземпляр API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`возвращаемое-значение`,children:`Возвращаемое значение`}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает объект управления API. Состав возвращаемого значения полностью идентичен `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.ru.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если данные прошли проверку `,(0,c.jsx)(n.code,{children:`typeData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если данные ответа соответствуют определенному контракту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — подробный результат валидации контракта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: ComputedRef`}),` — обработанный массив данных с поддержкой Skeleton, форматтеров и поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — «сырые» реактивные данные из `,(0,c.jsx)(n.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — текущий объект ошибки, если запрос не удался.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length: ComputedRef<number>`}),` — текущее количество элементов в `,(0,c.jsx)(n.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting / loading / reading`}),` — флаги состояния запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingSearch / loadingPost / loadingPut / loadingDelete`}),` — состояния загрузки для поиска и мутаций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch / search`}),` — статус поиска и реактивная строка поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sendPost / sendPut / sendDelete`}),` — методы для выполнения мутаций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset / abort`}),` — методы управления.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiManagementAsyncRef } from '@dxtmisha/functional'

// Инициализация (и SSR-предзагрузка) запускается немедленно
const { list, loading } = useApiManagementAsyncRef(
  { 
    path: 'api/products',
    skeleton: () => Array(3).fill({ id: 0, title: 'Loading...' })
  }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};