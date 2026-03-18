import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useApiPut - Выполнение PUT-запросов"}),`
`,n.jsx(e.h1,{id:"useapiput",children:n.jsx(e.code,{children:"useApiPut"})}),`
`,n.jsxs(e.p,{children:["Возвращает объект с состоянием загрузки и методом ",n.jsx(e.code,{children:"send"})," для выполнения ",n.jsx(e.code,{children:"PUT"}),"-запросов к API."]}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: Ref<boolean>"})," — Реактивное состояние загрузки. Принимает значение ",n.jsx(e.code,{children:"true"})," во время выполнения запроса и ",n.jsx(e.code,{children:"false"})," после его завершения или ошибки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Асинхронный метод для отправки ",n.jsx(e.code,{children:"PUT"}),"-запроса. Он автоматически управляет состоянием ",n.jsx(e.code,{children:"loading"}),", применяет функцию трансформации к ответу, вызывает коллбэк ",n.jsx(e.code,{children:"action"})," при успехе и безопасно обрабатывает ошибки."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useApiPut } from '@dxtmisha/functional'

const { loading, send } = useApiPut(
  '/api/update',
  (data) => console.log('Действие завершено:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleUpdate = async () => {
  const result = await send({ id: 1, name: 'New Name' })
  console.log('Итоговый результат:', result)
}
`})})]})}function x(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
