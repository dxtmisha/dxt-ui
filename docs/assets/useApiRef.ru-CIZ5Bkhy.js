import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(d){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useApiRef - Работа с запросами"}),`
`,e.jsx(n.h1,{id:"useapiref",children:e.jsx(n.code,{children:"useApiRef"})}),`
`,e.jsxs(n.p,{children:["Composable для удобной работы с API-запросами во Vue-компонентах. Возвращает реактивные данные, флаги состояния и методы управления загрузкой. Использует ",e.jsx(n.strong,{children:"ленивую загрузку"})," — запрос отправляется только при первом обращении к свойству ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — путь к endpoint (может быть реактивным ",e.jsx(n.code,{children:"Ref"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — опции запроса (объект ",e.jsx(n.code,{children:"ApiFetch"})," или строка с именем метода)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — автоматически перезапускать запрос при изменении ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"options"})," или локали. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: RefType<boolean>"})," — реактивное условие выполнения. Если ",e.jsx(n.code,{children:"false"})," — запрос не выполняется, данные сбрасываются."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => ApiData<R>"})," — функция преобразования ответа перед сохранением в ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", данные сбрасываются и watcher останавливается при размонтировании компонента."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Возвращает (",e.jsx(n.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,e.jsxs(n.p,{children:["Реактивные состояния (геттеры ",e.jsx(n.code,{children:"ComputedRef"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data"})," — ",e.jsx(n.code,{children:"Ref<ApiData<R> | undefined>"})," — загруженные данные. При первом обращении запускает запрос (lazy loading)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," пока данные еще ни разу не загружены (",e.jsx(n.code,{children:"data === undefined"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," пока идет активный запрос к серверу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading"})," — ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," пока продолжается чтение данных."]}),`
`]}),`
`,e.jsx(n.p,{children:"Методы:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isStarting(): boolean"})," — возвращает значение флага ",e.jsx(n.code,{children:"starting"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLoading(): boolean"})," — возвращает значение флага ",e.jsx(n.code,{children:"loading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isReading(): boolean"})," — возвращает значение флага ",e.jsx(n.code,{children:"reading"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): ApiData<R> | undefined"})," — возвращает текущие загруженные данные без реактивности."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): Promise<void>"})," — принудительно перезапускает запрос."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): void"})," — останавливает watcher и сбрасывает ",e.jsx(n.code,{children:"data"})," в ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort(): void"})," — отменяет текущий запрос через ",e.jsx(n.code,{children:"AbortController"})," без сброса данных."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ленивая-загрузка-lazy-loading",children:"Ленивая загрузка (Lazy Loading)"}),`
`,e.jsxs(n.p,{children:["Запрос ",e.jsx(n.strong,{children:"не отправляется"})," при вызове ",e.jsx(n.code,{children:"useApiRef"}),". Он запускается только при первом обращении к свойству ",e.jsx(n.code,{children:"data"}),". Это позволяет вызывать composable наверху ",e.jsx(n.code,{children:"setup()"})," без лишних сетевых запросов."]}),`
`,e.jsx(n.h2,{id:"глобальные-условия",children:"Глобальные условия"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"setApiRefGlobalConditions(conditions)"})," — устанавливает глобальное условие для всех экземпляров ",e.jsx(n.code,{children:"useApiRef"}),". Работает только один раз."]}),`
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
`})})]})}function a(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{a as default};
