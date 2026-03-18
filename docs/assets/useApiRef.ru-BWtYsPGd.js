import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(d){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional/Composables/useApiRef - Работа с запросами"}),`
`,e.jsx(n.h1,{id:"useapiref",children:e.jsx(n.code,{children:"useApiRef"})}),`
`,e.jsx(n.p,{children:"Composable для удобной работы с API-запросами во Vue-компонентах. Возвращает реактивные данные, флаги состояния и методы управления загрузкой."}),`
`,e.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ленивая инициализация"}),": Запрос и наблюдение за зависимостями (watchers) инициализируются только при первом обращении к данным (",e.jsx(n.code,{children:"data"})," или ",e.jsx(n.code,{children:"item"}),"). Это позволяет объявлять ",e.jsx(n.code,{children:"useApiRef"})," без немедленной нагрузки на сеть и процессор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальная область видимости (Eternal)"}),": Если параметр ",e.jsx(n.code,{children:"unmounted"})," установлен в ",e.jsx(n.code,{children:"false"}),", реактивность выносится в ",e.jsx(n.code,{children:"EffectScopeGlobal"}),". Это гарантирует, что запросы продолжат обновляться даже после размонтирования компонента, который их создал."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — путь к endpoint (может быть реактивным ",e.jsx(n.code,{children:"Ref"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — опции запроса (объект ",e.jsx(n.code,{children:"ApiFetch"})," или строка с именем метода)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — автоматически перезапускать запрос при изменении ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"options"})," или локали. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: RefType<boolean>"})," — реактивное условие выполнения. Если ",e.jsx(n.code,{children:"false"})," — запрос не выполняется, данные сбрасываются."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => ApiData<R>"})," — функция преобразования ответа перед сохранением в ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — если ",e.jsx(n.code,{children:"true"})," (по умолчанию), данные сбрасываются и watcher останавливается при размонтировании компонента. При ",e.jsx(n.code,{children:"false"})," используется ",e.jsx(n.code,{children:"EffectScopeGlobal"})," для фоновой работы."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Возвращает (",e.jsx(n.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,e.jsx(n.p,{children:"Реактивные состояния:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ComputedRef<ApiData<R> | undefined>"})," — Ссылка на загруженные данные (Computed). Инициирует ",e.jsx(n.strong,{children:"ленивую инициализацию"})," (запрос и watcher) при первом обращении."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: Ref<ApiData<R> | undefined>"})," — Прямая ссылка на данные (Ref). Также инициирует ленивую инициализацию при доступе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting: ComputedRef<boolean>"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если данные еще ни разу не запрашивались или находятся в процессе получения первой порции данных (",e.jsx(n.code,{children:"data"})," еще ",e.jsx(n.code,{children:"undefined"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если в данный момент выполняется любой сетевой запрос (первичный или последующий ",e.jsx(n.code,{children:"reset"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading: Ref<boolean>"})," — Флаг активного процесса чтения/обработки данных."]}),`
`]}),`
`,e.jsx(n.p,{children:"Методы:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isStarting(): boolean"})," — Синхронный метод, возвращающий текущее значение флага ",e.jsx(n.code,{children:"starting"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLoading(): boolean"})," — Синхронный метод, возвращающий текущее значение флага ",e.jsx(n.code,{children:"loading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isReading(): boolean"})," — Синхронный метод, возвращающий текущее значение флага ",e.jsx(n.code,{children:"reading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): ApiData<R> | undefined"})," — Метод для получения текущего значения ",e.jsx(n.code,{children:"data"})," без создания реактивной зависимости."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): void"})," — Метод для явной инициализации запроса и watchers. Вызывается автоматически при первом обращении к ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): Promise<void>"})," — Асинхронный метод для принудительного перезапуска запроса. Отменяет текущий активный запрос (если есть) и инициирует новый."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): void"})," — Останавливает наблюдение за реактивными зависимостями и сбрасывает ",e.jsx(n.code,{children:"data"})," в ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort(): void"})," — Вызывает отмену текущего HTTP-запроса через внутренний ",e.jsx(n.code,{children:"AbortController"}),", сохраняя при этом уже загруженные данные в ",e.jsx(n.code,{children:"data"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ленивая-инициализация-lazy-loading",children:"Ленивая инициализация (Lazy Loading)"}),`
`,e.jsxs(n.p,{children:["Запрос и механизмы слежения за изменениями ",e.jsx(n.strong,{children:"не запускаются"})," непосредственно при вызове ",e.jsx(n.code,{children:"useApiRef"}),". Они активируются только при обращении к ",e.jsx(n.code,{children:"data"}),", ",e.jsx(n.code,{children:"item"})," или вызове ",e.jsx(n.code,{children:"init()"}),". Это позволяет оптимизировать производительность setup-скриптов."]}),`
`,e.jsx(n.h2,{id:"глобальные-условия",children:"Глобальные условия"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"setApiRefGlobalConditions(conditions)"})," — устанавливает глобальное условие для всех экземпляров ",e.jsx(n.code,{children:"useApiRef"}),". Работает только один раз."]}),`
`,e.jsx(n.h2,{id:"объект-apioptions",children:"Объект ApiOptions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ApiOptions"})," — может принимать строку с названием ",e.jsx(n.code,{children:"method"})," (например, ",e.jsx(n.code,{children:"'GET'"}),") или объект типа ",e.jsx(n.code,{children:"ApiFetch"}),". Поля объекта ",e.jsx(n.code,{children:"ApiFetch"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — путь к endpoint-скрипту относительно базового URL (например: ",e.jsx(n.code,{children:"'users/list'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathFull?: string"})," — полный URL запроса. Если указан, игнорирует ",e.jsx(n.code,{children:"api"})," и ",e.jsx(n.code,{children:"path"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"api?: boolean"})," — добавлять ли базовый URL перед ",e.jsx(n.code,{children:"path"}),". По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP-метод (",e.jsx(n.code,{children:"'GET'"}),", ",e.jsx(n.code,{children:"'POST'"}),", ",e.jsx(n.code,{children:"'PUT'"}),", ",e.jsx(n.code,{children:"'DELETE'"}),"). По умолчанию: ",e.jsx(n.code,{children:"'GET'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: FormData | Record<string, any> | string"})," — тело запроса (для POST/PUT) или query-параметры (для GET). Передается как JSON или ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headers?: Record<string, string> | null"})," — дополнительные заголовки запроса. ",e.jsx(n.code,{children:"null"})," — отключить все заголовки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string"})," — значение ",e.jsx(n.code,{children:"Content-Type"}),". По умолчанию: ",e.jsx(n.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auth?: boolean"})," — добавить заголовки аутентификации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", автоматически разворачивает ",e.jsx(n.code,{children:"data"})," из обертки ",e.jsx(n.code,{children:"{ data: ... }"}),". По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hideError?: boolean"})," — подавляет вывод ошибок в ",e.jsx(n.code,{children:"console.error"})," при сбое. По умолчанию: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalPreparation?: boolean"})," — запускать ли глобальный хук ",e.jsx(n.code,{children:"setPreparation"})," до этого запроса. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalEnd?: boolean"})," — запускать ли глобальный хук ",e.jsx(n.code,{children:"setEnd"})," после ответа. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — обработчик ответа вместо стандартного чтения JSON."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init?: RequestInit"})," — дополнительные опции для нативного ",e.jsx(n.code,{children:"fetch()"})," (CORS, режим кеша и др.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controller?: AbortController"})," — контроллер для отмены запроса."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function j(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{j as default};
