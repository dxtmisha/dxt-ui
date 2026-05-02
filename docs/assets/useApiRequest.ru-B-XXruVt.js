import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useApiRequest - Выполнение запросов`}),`
`,(0,c.jsx)(n.h1,{id:`useapirequest`,children:(0,c.jsx)(n.code,{children:`useApiRequest`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает объект с состоянием загрузки и методом `,(0,c.jsx)(n.code,{children:`send`}),` для выполнения запросов к API.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Путь к endpoint API (может быть реактивным).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem = ApiMethodItem.post`}),` — HTTP метод для запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Действие (коллбэк), выполняемое после успешного завершения запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Функция трансформации ответа от сервера перед возвращением или передачей в `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData: boolean = true`}),` — Извлекать ли поле `,(0,c.jsx)(n.code,{children:`data`}),` из ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Дополнительные опции запроса (объект параметров `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект со следующими свойствами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Реактивное состояние загрузки. Принимает значение `,(0,c.jsx)(n.code,{children:`true`}),` во время выполнения запроса и `,(0,c.jsx)(n.code,{children:`false`}),` после его завершения или ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Асинхронный метод для отправки запроса. Он автоматически управляет состоянием `,(0,c.jsx)(n.code,{children:`loading`}),`, применяет функцию трансформации к ответу, вызывает коллбэк `,(0,c.jsx)(n.code,{children:`action`}),` при успехе и безопасно обрабатывает ошибки, выводя их в консоль.`]}),`
`]}),`
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
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiRequest } from '@dxtmisha/functional'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};