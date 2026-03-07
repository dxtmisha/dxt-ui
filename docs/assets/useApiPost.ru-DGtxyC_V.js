import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useApiPost - Выполнение POST-запросов"}),`
`,n.jsx(e.h1,{id:"useapipost",children:n.jsx(e.code,{children:"useApiPost"})}),`
`,n.jsxs(e.p,{children:["Возвращает объект с состоянием загрузки и методом ",n.jsx(e.code,{children:"send"})," для выполнения ",n.jsx(e.code,{children:"POST"}),"-запросов к API."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: RefOrNormal<string | undefined>"})," — Путь к endpoint API (может быть реактивным)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Действие (коллбэк), выполняемое после успешного завершения запроса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: (data: T) => Return"})," — Функция трансформации ответа от сервера перед возвращением или передачей в ",n.jsx(e.code,{children:"action"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toData: boolean = true"})," — Извлекать ли поле ",n.jsx(e.code,{children:"data"})," из ответа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — Дополнительные опции запроса (объект параметров ",n.jsx(e.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
Объект со следующими свойствами:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading"})," — Реактивное состояние загрузки (",n.jsx(e.code,{children:"true"})," пока идет ожидание ответа)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Асинхронный метод для отправки запроса. Он управляет состоянием загрузки, применяет трансформацию, выполняет коллбэк ",n.jsx(e.code,{children:"action"})," и безопасно перехватывает ошибки."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost(
  '/api/submit',
  (data) => console.log('Действие завершено:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Итоговый результат:', result)
}
`})})]})}function x(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
