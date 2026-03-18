import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useApiDelete - Выполнение DELETE-запросов"}),`
`,e.jsx(n.h1,{id:"useapidelete",children:e.jsx(n.code,{children:"useApiDelete"})}),`
`,e.jsxs(n.p,{children:["Возвращает объект с состоянием загрузки и методом ",e.jsx(n.code,{children:"send"})," для выполнения ",e.jsx(n.code,{children:"DELETE"}),"-запросов к API."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — Путь к endpoint API (может быть реактивным)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Действие (коллбэк), выполняемое после успешного завершения запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — Функция трансформации ответа от сервера перед возвращением или передачей в ",e.jsx(n.code,{children:"action"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData: boolean = true"})," — Извлекать ли поле ",e.jsx(n.code,{children:"data"})," из ответа."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — Дополнительные опции запроса (объект параметров ",e.jsx(n.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Объект со следующими свойствами:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — Реактивное состояние загрузки. Принимает значение ",e.jsx(n.code,{children:"true"})," во время выполнения запроса и ",e.jsx(n.code,{children:"false"})," после его завершения или ошибки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Асинхронный метод для отправки ",e.jsx(n.code,{children:"DELETE"}),"-запроса. Он автоматически управляет состоянием ",e.jsx(n.code,{children:"loading"}),", применяет функцию трансформации к ответу, вызывает коллбэк ",e.jsx(n.code,{children:"action"})," при успехе и безопасно обрабатывает ошибки."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useApiDelete } from '@dxtmisha/functional'

const { loading, send } = useApiDelete(
  '/api/delete',
  (data) => console.log('Действие завершено:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleDelete = async () => {
  const result = await send({ id: 1 })
  console.log('Итоговый результат:', result)
}
`})})]})}function x(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
