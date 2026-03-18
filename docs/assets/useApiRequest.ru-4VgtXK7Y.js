import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional/Composables/useApiRequest - Выполнение запросов"}),`
`,e.jsx(n.h1,{id:"useapirequest",children:e.jsx(n.code,{children:"useApiRequest"})}),`
`,e.jsxs(n.p,{children:["Возвращает объект с состоянием загрузки и методом ",e.jsx(n.code,{children:"send"})," для выполнения запросов к API."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — Путь к endpoint API (может быть реактивным)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method: ApiMethodItem = ApiMethodItem.post"})," — HTTP метод для запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Действие (коллбэк), выполняемое после успешного завершения запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — Функция трансформации ответа от сервера перед возвращением или передачей в ",e.jsx(n.code,{children:"action"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData: boolean = true"})," — Извлекать ли поле ",e.jsx(n.code,{children:"data"})," из ответа."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — Дополнительные опции запроса (объект параметров ",e.jsx(n.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Объект со следующими свойствами:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — Реактивное состояние загрузки. Принимает значение ",e.jsx(n.code,{children:"true"})," во время выполнения запроса и ",e.jsx(n.code,{children:"false"})," после его завершения или ошибки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Асинхронный метод для отправки запроса. Он автоматически управляет состоянием ",e.jsx(n.code,{children:"loading"}),", применяет функцию трансформации к ответу, вызывает коллбэк ",e.jsx(n.code,{children:"action"})," при успехе и безопасно обрабатывает ошибки, выводя их в консоль."]}),`
`]}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useApiRequest } from '@dxtmisha/functional'
import { ApiMethodItem } from '@dxtmisha/functional-basic'

const { loading, send } = useApiRequest(
  '/api/submit',
  ApiMethodItem.post,
  (data) => console.log('Действие завершено:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Итоговый результат:', result)
}
`})})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{j as default};
