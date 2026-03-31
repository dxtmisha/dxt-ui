import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useApiRef - Работа с запросами`}),`
`,(0,c.jsx)(n.h1,{id:`useapiref`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable для удобной работы с API-запросами во Vue-компонентах. Возвращает реактивные данные, флаги состояния и методы управления загрузкой.`}),`
`,(0,c.jsx)(n.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая инициализация`}),`: Запрос и наблюдение за зависимостями (watchers) инициализируются только при первом обращении к данным (`,(0,c.jsx)(n.code,{children:`data`}),` или `,(0,c.jsx)(n.code,{children:`item`}),`). Это позволяет объявлять `,(0,c.jsx)(n.code,{children:`useApiRef`}),` без немедленной нагрузки на сеть и процессор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная область видимости (Eternal)`}),`: Если параметр `,(0,c.jsx)(n.code,{children:`unmounted`}),` установлен в `,(0,c.jsx)(n.code,{children:`false`}),`, реактивность выносится в `,(0,c.jsx)(n.code,{children:`EffectScopeGlobal`}),`. Это гарантирует, что запросы продолжат обновляться даже после размонтирования компонента, который их создал.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — путь к endpoint (может быть реактивным `,(0,c.jsx)(n.code,{children:`Ref`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — опции запроса (объект `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` или строка с именем метода).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — автоматически перезапускать запрос при изменении `,(0,c.jsx)(n.code,{children:`path`}),`, `,(0,c.jsx)(n.code,{children:`options`}),` или локали. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — реактивное условие выполнения. Если `,(0,c.jsx)(n.code,{children:`false`}),` — запрос не выполняется, данные сбрасываются.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => ApiData<R>`}),` — функция преобразования ответа перед сохранением в `,(0,c.jsx)(n.code,{children:`data`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),` (по умолчанию), данные сбрасываются и watcher останавливается при размонтировании компонента. При `,(0,c.jsx)(n.code,{children:`false`}),` используется `,(0,c.jsx)(n.code,{children:`EffectScopeGlobal`}),` для фоновой работы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Возвращает (`,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),`):`]})}),`
`,(0,c.jsx)(n.p,{children:`Реактивные состояния:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — Ссылка на загруженные данные (Computed). Инициирует `,(0,c.jsx)(n.strong,{children:`ленивую инициализацию`}),` (запрос и watcher) при первом обращении.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — Прямая ссылка на данные (Ref). Также инициирует ленивую инициализацию при доступе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если данные еще ни разу не запрашивались или находятся в процессе получения первой порции данных (`,(0,c.jsx)(n.code,{children:`data`}),` еще `,(0,c.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если в данный момент выполняется любой сетевой запрос (первичный или последующий `,(0,c.jsx)(n.code,{children:`reset`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — Флаг активного процесса чтения/обработки данных.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Методы:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isStarting(): boolean`}),` — Синхронный метод, возвращающий текущее значение флага `,(0,c.jsx)(n.code,{children:`starting`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),` — Синхронный метод, возвращающий текущее значение флага `,(0,c.jsx)(n.code,{children:`loading`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isReading(): boolean`}),` — Синхронный метод, возвращающий текущее значение флага `,(0,c.jsx)(n.code,{children:`reading`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiData<R> | undefined`}),` — Метод для получения текущего значения `,(0,c.jsx)(n.code,{children:`data`}),` без создания реактивной зависимости.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Метод для явной инициализации запроса и watchers. Вызывается автоматически при первом обращении к `,(0,c.jsx)(n.code,{children:`data`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<void>`}),` — Асинхронный метод для принудительного перезапуска запроса. Отменяет текущий активный запрос (если есть) и инициирует новый.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): void`}),` — Останавливает наблюдение за реактивными зависимостями и сбрасывает `,(0,c.jsx)(n.code,{children:`data`}),` в `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`abort(): void`}),` — Вызывает отмену текущего HTTP-запроса через внутренний `,(0,c.jsx)(n.code,{children:`AbortController`}),`, сохраняя при этом уже загруженные данные в `,(0,c.jsx)(n.code,{children:`data`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ленивая-инициализация-lazy-loading`,children:`Ленивая инициализация (Lazy Loading)`}),`
`,(0,c.jsxs)(n.p,{children:[`Запрос и механизмы слежения за изменениями `,(0,c.jsx)(n.strong,{children:`не запускаются`}),` непосредственно при вызове `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Они активируются только при обращении к `,(0,c.jsx)(n.code,{children:`data`}),`, `,(0,c.jsx)(n.code,{children:`item`}),` или вызове `,(0,c.jsx)(n.code,{children:`init()`}),`. Это позволяет оптимизировать производительность setup-скриптов.`]}),`
`,(0,c.jsx)(n.h2,{id:`глобальные-условия`,children:`Глобальные условия`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`setApiRefGlobalConditions(conditions)`}),` — устанавливает глобальное условие для всех экземпляров `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Работает только один раз.`]}),`
`,(0,c.jsx)(n.h2,{id:`объект-apioptions`,children:`Объект ApiOptions`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiOptions`}),` — может принимать строку с названием `,(0,c.jsx)(n.code,{children:`method`}),` (например, `,(0,c.jsx)(n.code,{children:`'GET'`}),`) или объект типа `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`. Поля объекта `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — путь к endpoint-скрипту относительно базового URL (например: `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — полный URL запроса. Если указан, игнорирует `,(0,c.jsx)(n.code,{children:`api`}),` и `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — добавлять ли базовый URL перед `,(0,c.jsx)(n.code,{children:`path`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — HTTP-метод (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). По умолчанию: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — тело запроса (для POST/PUT) или query-параметры (для GET). Передается как JSON или `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — дополнительные заголовки запроса. `,(0,c.jsx)(n.code,{children:`null`}),` — отключить все заголовки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — значение `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — добавить заголовки аутентификации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, автоматически разворачивает `,(0,c.jsx)(n.code,{children:`data`}),` из обертки `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),`. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — подавляет вывод ошибок в `,(0,c.jsx)(n.code,{children:`console.error`}),` при сбое. По умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — запускать ли глобальный хук `,(0,c.jsx)(n.code,{children:`setPreparation`}),` до этого запроса. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — запускать ли глобальный хук `,(0,c.jsx)(n.code,{children:`setEnd`}),` после ответа. По умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — обработчик ответа вместо стандартного чтения JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — дополнительные опции для нативного `,(0,c.jsx)(n.code,{children:`fetch()`}),` (CORS, режим кеша и др.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — контроллер для отмены запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiRef, setApiRefGlobalConditions } from '@dxtmisha/functional'

const userId = ref('123')
const isAuthenticated = ref(true)

// Глобальное условие (все запросы выполняются только если аутентифицированы)
setApiRefGlobalConditions(isAuthenticated)

const {
  data: user,
  starting,
  loading,
  reading,
  getItem,
  reset,
  stop,
  abort
} = useApiRef(
  () => \`users/\${userId.value}\`,
  { method: 'GET' },
  true // Реактивно перезапускать при изменении userId
)

// Проверка состояния без реактивности
console.log(getItem()) // undefined до первого обращения к data

// Принудительная перезагрузка
await reset()

// Отмена запроса (без сброса данных)
abort()

// Остановка слежения (сбрасывает данные)
stop()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};