import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useApiRequest - Выполнение запросов"}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"})," — Реактивное состояние загрузки (",e.jsx(n.code,{children:"true"})," пока идет ожидание ответа)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Асинхронный метод для отправки запроса. Он управляет состоянием загрузки, применяет трансформацию, выполняет коллбэк ",e.jsx(n.code,{children:"action"})," и безопасно перехватывает ошибки."]}),`
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
`})})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
